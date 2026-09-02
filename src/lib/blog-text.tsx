import { Link } from "react-router-dom";
import { Fragment } from "react";

type Segment =
  | { type: "text"; content: string }
  | { type: "link"; text: string; href: string }
  | { type: "bold"; content: string };

function parseInline(text: string): Segment[] {
  const segments: Segment[] = [];
  let remaining = text;

  const linkRe = /\[([^\]]+)\]\(([^)]+)\)/;
  const boldRe = /\*\*([^*]+)\*\*/;

  while (remaining.length > 0) {
    const linkMatch = remaining.match(linkRe);
    const boldMatch = remaining.match(boldRe);
    const linkIdx = linkMatch ? remaining.indexOf(linkMatch[0]) : -1;
    const boldIdx = boldMatch ? remaining.indexOf(boldMatch[0]) : -1;

    if (linkIdx === -1 && boldIdx === -1) {
      segments.push({ type: "text", content: remaining });
      break;
    }

    const useLink =
      linkIdx !== -1 && (boldIdx === -1 || linkIdx <= boldIdx);
    const match = useLink ? linkMatch! : boldMatch!;
    const idx = useLink ? linkIdx : boldIdx;

    if (idx > 0) {
      segments.push({ type: "text", content: remaining.slice(0, idx) });
    }

    if (useLink) {
      segments.push({
        type: "link",
        text: match[1],
        href: match[2],
      });
    } else {
      segments.push({ type: "bold", content: match[1] });
    }

    remaining = remaining.slice(idx + match[0].length);
  }

  return segments;
}

export function renderRichText(text: string) {
  const segments = parseInline(text);
  return segments.map((seg, i) => {
    if (seg.type === "link") {
      const isInternal = seg.href.startsWith("/");
      if (isInternal) {
        return (
          <Link
            key={i}
            to={seg.href}
            className="text-primary underline-offset-4 hover:underline font-medium"
          >
            {seg.text}
          </Link>
        );
      }
      return (
        <a
          key={i}
          href={seg.href}
          className="text-primary underline-offset-4 hover:underline font-medium"
          rel="noopener noreferrer"
        >
          {seg.text}
        </a>
      );
    }
    if (seg.type === "bold") {
      return (
        <Fragment key={i}>
          <strong className="font-semibold text-foreground">{seg.content}</strong>
        </Fragment>
      );
    }
    return <Fragment key={i}>{seg.content}</Fragment>;
  });
}
