import React, { useEffect, useRef } from 'react';

export default function DataFlowBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initDrops();
    };
    
    window.addEventListener('resize', resizeCanvas);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = '01';
    const fontSize = 16;
    let columns = canvas.width / fontSize;
    let drops: number[] = [];

    const initDrops = () => {
      columns = canvas.width / fontSize;
      drops = [];
      for (let x = 0; x < columns; x++) {
        drops[x] = (Math.random() * canvas.height) / fontSize;
      }
    };
    initDrops();

    let animationFrameId: number;
    let lastDrawTime = 0;

    const draw = (timestamp: number) => {
      if (timestamp - lastDrawTime > 50) {
        ctx.fillStyle = 'rgba(5, 5, 5, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
          const text = chars.charAt(Math.floor(Math.random() * chars.length));
          
          if (Math.random() > 0.8) {
            ctx.fillStyle = '#915EFF'; // Purple
          } else {
            ctx.fillStyle = '#00cea8'; // Cyan
          }
          
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);

          if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
            drops[i] = 0;
          }
          drops[i]++;
        }
        lastDrawTime = timestamp;
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.3 }}
    />
  );
}
