import React, { useEffect, useRef } from 'react';

interface BackgroundEffectsProps {
  type: 'particles' | 'grid' | 'waves' | 'geometric' | 'dots';
  intensity?: 'low' | 'medium' | 'high';
  color?: string;
  className?: string;
}

const BackgroundEffects: React.FC<BackgroundEffectsProps> = ({ 
  type, 
  intensity = 'medium', 
  color = '#3b82f6',
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let animationId: number;

    const getIntensityValue = () => {
      switch (intensity) {
        case 'low': return 0.3;
        case 'medium': return 0.6;
        case 'high': return 1;
        default: return 0.6;
      }
    };

    const intensityValue = getIntensityValue();

    if (type === 'particles') {
      const particles: Array<{
        x: number;
        y: number;
        vx: number;
        vy: number;
        size: number;
        opacity: number;
      }> = [];

      const particleCount = Math.floor(100 * intensityValue);

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 1,
          vy: (Math.random() - 0.5) * 1,
          size: Math.random() * 3 + 2,
          opacity: Math.random() * 0.8 + 0.4
        });
      }

      const animateParticles = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
          particle.x += particle.vx;
          particle.y += particle.vy;

          if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
          if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = `${color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
          ctx.fill();

          // Draw connections
          particles.forEach(otherParticle => {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = `${color}${Math.floor((1 - distance / 150) * 0.6 * 255).toString(16).padStart(2, '0')}`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          });
        });

        animationId = requestAnimationFrame(animateParticles);
      };

      animateParticles();
    } else if (type === 'grid') {
      const gridSize = 40;
      const animateGrid = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        ctx.strokeStyle = `${color}${Math.floor(0.3 * intensityValue * 255).toString(16).padStart(2, '0')}`;
        ctx.lineWidth = 1;

        for (let x = 0; x < canvas.width; x += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, canvas.height);
          ctx.stroke();
        }

        for (let y = 0; y < canvas.height; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(canvas.width, y);
          ctx.stroke();
        }

        // Add animated dots at intersections
        const time = Date.now() * 0.001;
        for (let x = 0; x < canvas.width; x += gridSize) {
          for (let y = 0; y < canvas.height; y += gridSize) {
            const pulse = Math.sin(time + x * 0.01 + y * 0.01) * 0.5 + 0.5;
            ctx.beginPath();
            ctx.arc(x, y, pulse * 2, 0, Math.PI * 2);
            ctx.fillStyle = `${color}${Math.floor(pulse * 0.6 * intensityValue * 255).toString(16).padStart(2, '0')}`;
            ctx.fill();
          }
        }

        animationId = requestAnimationFrame(animateGrid);
      };

      animateGrid();
    } else if (type === 'waves') {
      const animateWaves = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const time = Date.now() * 0.001;
        const waveCount = 3;

        for (let i = 0; i < waveCount; i++) {
          ctx.beginPath();
          ctx.strokeStyle = `${color}${Math.floor(0.5 * intensityValue * 255).toString(16).padStart(2, '0')}`;
          ctx.lineWidth = 2;

          for (let x = 0; x < canvas.width; x += 2) {
            const y = canvas.height / 2 + 
              Math.sin((x * 0.01) + (time * 0.5) + (i * Math.PI / 3)) * 
              (20 + i * 10) * intensityValue;
            
            if (x === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }
          ctx.stroke();
        }

        animationId = requestAnimationFrame(animateWaves);
      };

      animateWaves();
    } else if (type === 'geometric') {
      const animateGeometric = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const time = Date.now() * 0.001;
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        // Draw rotating geometric shapes
        for (let i = 0; i < 5; i++) {
          ctx.save();
          ctx.translate(centerX, centerY);
          ctx.rotate(time * 0.1 + i * Math.PI / 2.5);
          
          ctx.strokeStyle = `${color}${Math.floor(0.6 * intensityValue * 255).toString(16).padStart(2, '0')}`;
          ctx.lineWidth = 2;
          
          const size = 50 + i * 20;
          ctx.strokeRect(-size / 2, -size / 2, size, size);
          
          ctx.restore();
        }

        animationId = requestAnimationFrame(animateGeometric);
      };

      animateGeometric();
    } else if (type === 'dots') {
      const animateDots = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const time = Date.now() * 0.001;
        const dotCount = Math.floor(200 * intensityValue);

        for (let i = 0; i < dotCount; i++) {
          const x = (i * 137.5) % canvas.width;
          const y = (i * 137.5 * 0.618) % canvas.height;
          const pulse = Math.sin(time * 2 + i * 0.1) * 0.5 + 0.5;
          
          ctx.beginPath();
          ctx.arc(x, y, pulse * 4, 0, Math.PI * 2);
          ctx.fillStyle = `${color}${Math.floor(pulse * 0.7 * intensityValue * 255).toString(16).padStart(2, '0')}`;
          ctx.fill();
        }

        animationId = requestAnimationFrame(animateDots);
      };

      animateDots();
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [type, intensity, color]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ opacity: intensity === 'low' ? 0.6 : intensity === 'medium' ? 0.8 : 1.0 }}
    />
  );
};

export default BackgroundEffects;
