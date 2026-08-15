import { useEffect, useRef, useState } from "react";

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const SCRAMBLABLE = /[a-zA-Z0-9]/;

function randomChar() {
  return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
}

function scramble(text) {
  return text
    .split("")
    .map((char) => (SCRAMBLABLE.test(char) ? randomChar() : char))
    .join("");
}

const easeInOutSine = (t) => -(Math.cos(Math.PI * t) - 1) / 2;

export default function DecodeText({ text, as: Tag = "span", className, delay = 0, duration = 700 }) {
  const [display, setDisplay] = useState(text);
  const frameRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setDisplay(text);
      return undefined;
    }

    setDisplay(scramble(text));

    let startTime = null;
    let flickerTick = 0;

    const tick = (now) => {
      if (startTime === null) startTime = now;
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const revealCount = Math.floor(easeInOutSine(progress) * text.length);
      flickerTick += 1;

      setDisplay((prev) =>
        text
          .split("")
          .map((char, index) => {
            if (!SCRAMBLABLE.test(char)) return char;
            if (index < revealCount) return char;
            if (flickerTick % 2 === 0) return randomChar();
            return prev[index] ?? randomChar();
          })
          .join("")
      );

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        setDisplay(text);
      }
    };

    const startTimer = setTimeout(() => {
      frameRef.current = requestAnimationFrame(tick);
    }, delay * 1000);

    return () => {
      clearTimeout(startTimer);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [text, delay, duration]);

  return <Tag className={className}>{display}</Tag>;
}