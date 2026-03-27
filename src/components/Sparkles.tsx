import { useMemo, forwardRef } from "react";

const Sparkles = forwardRef<HTMLDivElement, { count?: number }>(({ count = 20 }, ref) => {
  const sparkles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 4,
      size: Math.random() * 4 + 2,
    }));
  }, [count]);

  return (
    <div ref={ref} className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full animate-sparkle"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            background: "hsl(var(--accent))",
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
});

Sparkles.displayName = "Sparkles";

export default Sparkles;
