import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: string;
  className?: string;
  light?: boolean;
}

export function Eyebrow({ children, className, light = false }: EyebrowProps) {
  return (
    <span className={cn("eyebrow", light && "eyebrow-light", className)}>
      {children}
    </span>
  );
}
