
import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  alpha: number;
  shape?: 'circle' | 'star' | 'bubble';
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  const scrollYRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Track scroll position
    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);

    // Initialize particles
    const particleCount = Math.min(60, Math.floor(window.innerWidth / 25));
    const particles: Particle[] = [];

    const shapes = ['circle', 'star', 'bubble'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 4 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        color: getRandomColor(),
        alpha: Math.random() * 0.4 + 0.1,
        shape: shapes[Math.floor(Math.random() * shapes.length)] as 'circle' | 'star' | 'bubble'
      });
    }

    particlesRef.current = particles;

    function getRandomColor() {
      // Beach-themed colors
      const colors = ['#6366F1', '#22D3EE', '#7C3AED', '#38BDF8', '#60A5FA'];
      return colors[Math.floor(Math.random() * colors.length)];
    }

    function drawStar(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, color: string, alpha: number) {
      const spikes = 5;
      const outerRadius = size;
      const innerRadius = size / 2;
      
      ctx.beginPath();
      ctx.globalAlpha = alpha;
      ctx.fillStyle = color;
      
      let rot = Math.PI / 2 * 3;
      let x2 = x;
      let y2 = y;
      const step = Math.PI / spikes;

      ctx.moveTo(x2, y2 - outerRadius);
      
      for (let i = 0; i < spikes; i++) {
        x2 = x + Math.cos(rot) * outerRadius;
        y2 = y + Math.sin(rot) * outerRadius;
        ctx.lineTo(x2, y2);
        rot += step;
        
        x2 = x + Math.cos(rot) * innerRadius;
        y2 = y + Math.sin(rot) * innerRadius;
        ctx.lineTo(x2, y2);
        rot += step;
      }
      
      ctx.lineTo(x, y - outerRadius);
      ctx.closePath();
      ctx.fill();
    }

    function drawBubble(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, color: string, alpha: number) {
      ctx.beginPath();
      ctx.globalAlpha = alpha;
      ctx.fillStyle = color;
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
      
      // Add shine to bubble
      ctx.beginPath();
      ctx.globalAlpha = alpha * 0.7;
      ctx.fillStyle = '#ffffff';
      ctx.arc(x - size * 0.3, y - size * 0.3, size * 0.2, 0, Math.PI * 2);
      ctx.fill();
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Parallax effect based on scroll
      const scrollFactor = scrollYRef.current * 0.05;
      
      particlesRef.current.forEach((particle, index) => {
        // Create subtle mouse interaction
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 200) {
          const angle = Math.atan2(dy, dx);
          const force = (200 - distance) / 10000;
          particle.speedX -= Math.cos(angle) * force;
          particle.speedY -= Math.sin(angle) * force;
        }
        
        // Apply scroll effect
        particle.y += scrollFactor * 0.01 * (index % 3 + 1);
        
        // Reset if off-screen due to scroll
        if (particle.y > canvas.height + 100) {
          particle.y = -50;
          particle.x = Math.random() * canvas.width;
        } else if (particle.y < -100) {
          particle.y = canvas.height + 50;
          particle.x = Math.random() * canvas.width;
        }
        
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Boundary checks with wrap-around
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Draw different particle shapes
        switch(particle.shape) {
          case 'star':
            drawStar(ctx, particle.x, particle.y, particle.size, particle.color, particle.alpha);
            break;
          case 'bubble':
            drawBubble(ctx, particle.x, particle.y, particle.size, particle.color, particle.alpha);
            break;
          default:
            // Draw circle
            ctx.beginPath();
            ctx.globalAlpha = particle.alpha;
            ctx.fillStyle = particle.color;
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Connect particles that are close to each other
        for (let j = index + 1; j < particlesRef.current.length; j++) {
          const otherParticle = particlesRef.current[j];
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = particle.color;
            ctx.globalAlpha = (1 - distance / 120) * 0.2;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        }
      });
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};

export default ParticleBackground;
