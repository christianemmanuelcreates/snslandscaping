import { useEffect, useState, type ReactNode } from "react";
import { useLocation } from "react-router-dom";

export function PageTransition({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    setDisplayChildren(children);
    setAnimKey((k) => k + 1);
  }, [pathname, children]);

  return (
    <div key={animKey} className="page-enter">
      {displayChildren}
    </div>
  );
}
