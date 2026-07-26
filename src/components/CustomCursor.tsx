import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "motion/react";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Raw mouse position
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for outer magnetic ring
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if device is fine pointer (mouse/trackpad) vs touch
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check element under cursor
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveEl = target.closest(
        "a, button, input, textarea, select, [role='button'], .magnetic-target, summary"
      ) as HTMLElement | null;

      if (interactiveEl) {
        setIsHovered(true);
        const text = interactiveEl.getAttribute("data-cursor") || "";
        setCursorText(text);
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouchDevice) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Precision Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-amber-400 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.9)]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? (isHovered ? 0 : 1) : 0,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 500 }}
      />

      {/* Magnetic Outer Glow Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full flex items-center justify-center border transition-colors duration-200"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          width: isHovered ? 48 : 28,
          height: isHovered ? 48 : 28,
          scale: isClicking ? 0.85 : 1,
          backgroundColor: isHovered
            ? "rgba(245, 158, 11, 0.12)"
            : "rgba(255, 255, 255, 0.02)",
          borderColor: isHovered
            ? "rgba(245, 158, 11, 0.6)"
            : "rgba(255, 255, 255, 0.25)",
          backdropFilter: isHovered ? "blur(2px)" : "blur(0px)",
          boxShadow: isHovered
            ? "0 0 25px rgba(245, 158, 11, 0.3)"
            : "0 0 0px rgba(0, 0, 0, 0)",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 22,
        }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="text-[9px] font-mono tracking-wider font-semibold uppercase text-amber-300 pointer-events-none"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </div>
  );
}
