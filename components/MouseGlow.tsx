"use client";

import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      className="relative z-10 bg-transparent text-white py-24"
    >
      <div
        className="absolute w-96 h-96 rounded-full bg-sky-500/20 blur-3xl transition-all duration-300"
        style={{
          left: position.x - 180,
          top: position.y - 180,
        }}
      />
    </div>
  );
}