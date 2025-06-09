"use client"

import { useEffect, useRef, useState } from 'react';

const MatrixRain = () => {
  const canvasRef = useRef(null);
  const [isLowPerfDevice, setIsLowPerfDevice] = useState(false);

  useEffect(() => {
    // Check for low performance device
    const checkPerformance = () => {
      // Simple heuristic - mobile devices or low memory
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const isLowMemory = navigator.deviceMemory && navigator.deviceMemory < 4;
      
      setIsLowPerfDevice(isMobile || isLowMemory);
    };
    
    checkPerformance();
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let columns = [];
    let fontSize = isLowPerfDevice ? 18 : 14; // Larger font size = fewer columns on low-perf devices
    let drops = [];
    let animationFrameId;
    let lastTime = 0;
    const fpsInterval = isLowPerfDevice ? 1000/15 : 1000/30; // Lower FPS for low-perf devices

    // Debounce resize function
    let resizeTimeout;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeCanvas, 200);
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Reduce particle count for low performance devices
      const density = isLowPerfDevice ? 1.5 : 1;
      columns = Math.floor(canvas.width / (fontSize * density));
      
      drops = [];
      for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -100;
      }
    };

    // Characters to display
    const chars = isLowPerfDevice 
      ? '01' // Simpler character set for low-perf devices
      : '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';

    const draw = (timestamp) => {
      // Throttle frame rate
      const elapsed = timestamp - lastTime;
      
      if (elapsed > fpsInterval) {
        lastTime = timestamp - (elapsed % fpsInterval);
        
        // Set semi-transparent black background
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Set text color and font
        ctx.fillStyle = '#10b981'; // emerald-500
        ctx.font = `${fontSize}px monospace`;
        
        // Loop through drops
        for (let i = 0; i < drops.length; i++) {
          // Select a random character
          const text = chars[Math.floor(Math.random() * chars.length)];
          
          // Calculate opacity based on position (gradually fades)
          const opacity = Math.max(0, Math.min(0.9, 1 - drops[i] / canvas.height));
          
          // Set varying shades of emerald
          ctx.fillStyle = `rgba(16, 185, 129, ${opacity})`; // emerald-500 with opacity
          
          // Draw the character
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);
          
          // Move drop down
          drops[i]++;
          
          // Reset drop position when it reaches bottom or randomly
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
        }
      }
      
      animationFrameId = requestAnimationFrame(draw);
    };

    // Initialize and start animation
    resizeCanvas();
    animationFrameId = requestAnimationFrame(draw);

    // Handle window resize with debounce
    window.addEventListener('resize', debouncedResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(resizeTimeout);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isLowPerfDevice]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full opacity-40"
      style={{ position: 'absolute', top: 0, left: 0 }}
      aria-hidden="true"
    />
  );
};

export default MatrixRain;