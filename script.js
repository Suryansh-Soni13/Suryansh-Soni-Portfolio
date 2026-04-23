// Ultra-Premium Tech Interaction Logic

document.addEventListener('mousemove', (e) => {
    const frame = document.querySelector('.main-glass-frame');
    const glow1 = document.querySelectorAll('.glow-point')[0];
    const glow2 = document.querySelectorAll('.glow-point')[1];
    
    if (!frame) return;

    // Mouse Tracking for Main Frame (Subtle 3D)
    const rect = frame.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    frame.style.transform = `perspective(1000px) rotateX(${-y / 50}deg) rotateY(${x / 50}deg)`;

    // Background Glow Tracking
    const moveX = (e.clientX / window.innerWidth - 0.5) * 50;
    const moveY = (e.clientY / window.innerHeight - 0.5) * 50;
    
    if (glow1) glow1.style.transform = `translate(${moveX}px, ${moveY}px)`;
    if (glow2) glow2.style.transform = `translate(${-moveX}px, ${-moveY}px)`;
});

document.addEventListener('mouseleave', () => {
    const frame = document.querySelector('.main-glass-frame');
    if (frame) {
        frame.style.transition = 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)';
        frame.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    }
});

document.addEventListener('mouseenter', () => {
    const frame = document.querySelector('.main-glass-frame');
    if (frame) frame.style.transition = 'none';
});

// Letter stagger effect (Optional - for high-end polish)
console.log('%c System Protocol: Suryansh N Soni Site Initialized ', 'background: #020617; color: #00f2fe; font-weight: bold;');
