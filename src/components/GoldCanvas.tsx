"use client";

import React, { useEffect, useRef } from "react";

export function GoldCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Subtle gold particulates
    const particleCount = 35;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.2 + 0.6,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.25 - 0.1,
      opacity: Math.random() * 0.4 + 0.15,
      pulseSpeed: Math.random() * 0.02 + 0.005,
      pulseVal: Math.random() * Math.PI,
    }));

    let time = 0;

    const render = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      // Draw subtle undulating gold silk line
      ctx.save();
      ctx.beginPath();
      ctx.strokeStyle = "rgba(201, 168, 106, 0.08)";
      ctx.lineWidth = 1.5;

      const wave1Y = height * 0.35 + Math.sin(time * 0.5) * 40;
      const wave2Y = height * 0.65 + Math.cos(time * 0.4) * 50;

      ctx.moveTo(-50, wave1Y);
      ctx.bezierCurveTo(
        width * 0.3,
        wave1Y - 60 * Math.cos(time * 0.3),
        width * 0.7,
        wave1Y + 70 * Math.sin(time * 0.4),
        width + 50,
        wave1Y + 20
      );
      ctx.stroke();

      ctx.beginPath();
      ctx.strokeStyle = "rgba(201, 168, 106, 0.05)";
      ctx.lineWidth = 2;
      ctx.moveTo(-50, wave2Y);
      ctx.bezierCurveTo(
        width * 0.4,
        wave2Y + 80 * Math.sin(time * 0.3),
        width * 0.6,
        wave2Y - 50 * Math.cos(time * 0.5),
        width + 50,
        wave2Y
      );
      ctx.stroke();
      ctx.restore();

      // Render floating gold particles
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.pulseVal += p.pulseSpeed;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const currentOpacity = p.opacity + Math.sin(p.pulseVal) * 0.15;
        const boundedOpacity = Math.max(0.05, Math.min(0.6, currentOpacity));

        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
        grad.addColorStop(0, `rgba(243, 224, 181, ${boundedOpacity})`);
        grad.addColorStop(0.5, `rgba(201, 168, 106, ${boundedOpacity * 0.5})`);
        grad.addColorStop(1, "rgba(201, 168, 106, 0)");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-70"
    />
  );
}
