import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Увеличиваем количество частиц для более оживленного фона
    const particleCount = 50; // было 20
    const particles = [];
    const connectionDistance = 80; // было 120 - уменьшаем для больше соединений
    const moveSpeed = 0.3; // было 0.5

    // Создаем частицы
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * moveSpeed,
        vy: (Math.random() - 0.5) * moveSpeed,
        radius: 1.5,
      });
    }

    let animationFrameId;
    
    function animate() {
      ctx.clearRect(0, 0, width, height);
      
      // Обновляем позиции частиц
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        
        // Отражаем от границ
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
        
        // Рисуем частицы
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.fill();
      });
      
      // Увеличиваем количество соединений для более плотной сети
      for (let i = 0; i < particles.length; i++) {
        // Рисуем соединения с большим количеством ближайших частиц
        for (let j = i + 1; j < Math.min(i + 8, particles.length); j++) { // было i + 5
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.15 * (1 - distance / connectionDistance)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    }
    
    animate();
    
    // Обработчик изменения размера окна
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 bg-transparent" 
      style={{ pointerEvents: 'none' }}
    />
  );
}