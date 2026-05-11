import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

type Props = { children: ReactNode; delay?: number; className?: string; as?: keyof HTMLElementTagNameMap };

export function Reveal({ children, delay = 0, className = "", as = "div" }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = as as any;
  const style: CSSProperties = { transitionDelay: `${delay}ms` };
  return (
    <Tag ref={ref as any} style={style} className={`reveal ${visible ? "in" : ""} ${className}`}>
      {children}
    </Tag>
  );
}
