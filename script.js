// Futuristic Scrolling Portfolio JavaScript - Red Neon & Violet Theme

const projectsData = {
    'ai-music': {
        title: 'AI Short Music Development',
        category: 'apps',
        badge: 'AI Audio / Generation',
        brief: 'An audio generation showcase containing custom-trained AI music tracks. Play the featured track directly.',
        desc: 'This project showcases AI-generated short music tracks, exploring machine learning tools for music production, arrangement, and vocal synthesis. Use the interactive audio player below to listen to the custom-designed track which blends modern synthpop vibes with ambient futuristic soundscapes.',
        tech: ['Suno AI', 'HTML5 Audio', 'Web Audio API', 'JavaScript'],
        live: 'assets/Aasmaan_Ki_Manzil.mp3',
        github: '#'
    },
    'mirrorme': {
        title: 'MirrorMe',
        category: 'saas',
        badge: 'SaaS / Employee Management',
        brief: 'A responsive SaaS-style Employee & Intern Management System with admin control, work tracking, and internal chat.',
        desc: 'MirrorMe is a full-featured employee and intern management platform designed to streamline corporate workflows. It features a comprehensive admin dashboard for monitoring employee tasks, tracking working hours, and checking system attendance. In addition, it integrates an internal real-time chat module for smooth collaborative conversations, feedback loops, and announcements.',
        tech: ['HTML5', 'Vanilla CSS', 'JavaScript', 'Node.js', 'Express', 'WebSockets', 'MongoDB'],
        live: '#',
        github: 'https://github.com/Suryansh-Soni13/MirrorMe'
    },
    'skillsync': {
        title: 'SkillSync',
        category: 'apps',
        badge: 'Collaboration App',
        brief: 'A collaborative application where freelancers connect, form teams, and work on projects together.',
        desc: 'SkillSync addresses a common pain point for freelancers: finding team members with complementary skill sets. The platform allows freelancers to create project boards, request assistance, search profiles, and join active teams. With integrated task-matching logic, it helps pool resources to handle larger clients.',
        tech: ['HTML5', 'CSS3', 'JavaScript', 'LocalDB', 'Socket.io', 'REST APIs'],
        live: '#',
        github: 'https://github.com/Suryansh-Soni13/SkillSync'
    },
    'auto-elite-garage': {
        title: 'Auto Elite Garage',
        category: 'ecom',
        badge: 'Commercial Web Portal',
        brief: 'A modern automotive-themed commercial website project showing responsive layouts and custom booking features.',
        desc: 'Auto Elite Garage is a sleek, premium automotive showroom and repair service portal. The platform features an interactive car visualizer, service scheduling modules, cost estimator calculators, and responsive product catalogs. The design aesthetics emphasize high contrast, carbon textures, and clean animations.',
        tech: ['HTML5', 'CSS3 (Variables)', 'JavaScript (ES6)', 'ScrollReveal.js'],
        live: '#',
        github: 'https://github.com/Suryansh-Soni13/Auto-Elite-Garage'
    },
    'band8war': {
        title: 'Band8War (IELTS Planner)',
        category: 'tools',
        badge: 'EdTech / Utility Tool',
        brief: 'A single-page web app helping students track IELTS scores, monitor progress, and follow a personalized 20-day plan.',
        desc: 'Band8War is a highly interactive test preparation manager. It enables students preparing for the IELTS exam to input mock test results across Reading, Writing, Listening, and Speaking. The system dynamically computes cumulative band scores, charts score progressions over time, and provides an interactive checklist of daily lessons aligned with a 20-day target program.',
        tech: ['HTML5', 'CSS Grid', 'JavaScript', 'Chart.js', 'Local Storage'],
        live: '#',
        github: 'https://github.com/Suryansh-Soni13/Band8War-IELTS-Score-Tracker-Planner'
    },
    'resumehub-ai': {
        title: 'ResumeHub_AI',
        category: 'apps',
        badge: 'AI Application',
        brief: 'An AI-powered resume screening, analysis, and optimization workspace for job seekers and HR managers.',
        desc: 'ResumeHub_AI utilizes language models and parsing algorithms to scan resumes for keyword density, layout compliance, and job description alignment. It highlights missing technical skill matches, suggests improved phrasing, and simulates ATS compatibility scores. Users can export reports to refine profiles before job submissions.',
        tech: ['JavaScript', 'HTML5', 'CSS3', 'OpenAI API', 'Node.js', 'PDF.js'],
        live: '#',
        github: 'https://github.com/Suryansh-Soni13/ResumeHub_AI'
    },
    'dhan-suraksha': {
        title: 'Dhan-Suraksha',
        category: 'tools',
        badge: 'FinTech / Utility',
        brief: 'A personal financial budget manager, saving estimator, and investment calculator.',
        desc: 'Dhan-Suraksha is an intuitive budgeting utility developed to encourage healthy saving habits. Users can track income streams, log expenses by category, set monthly savings goals, and model basic investment growth rates (mutual funds, compounding interest, fixed deposits). It features clean graphs and quick summaries to make financial data transparent.',
        tech: ['HTML5', 'CSS3', 'JavaScript', 'Local Storage', 'SVG Charts'],
        live: '#',
        github: 'https://github.com/Suryansh-Soni13/Dhan-Suraksha'
    },
    'wordpress-glassified': {
        title: 'Glassified.ca',
        category: 'wordpress',
        badge: 'WordPress E-commerce Client',
        brief: 'WordPress e-commerce shop specializing in custom glassware, architectural mirrors, and glass fittings.',
        desc: 'Developed during his time with TechVenus Solutions, Glassified.ca is a premium WordPress shop built to market high-quality glass products in Canada. It integrates secure payment processors, product builders with customizable measurements, real-time shipment calculators, and dynamic search filters.',
        tech: ['WordPress', 'WooCommerce', 'Elementor Pro', 'PHP', 'MySQL', 'Custom Theme CSS'],
        live: 'https://glassified.ca',
        github: '#'
    },
    'wordpress-healthyrasoi': {
        title: 'HealthyRasoi.in',
        category: 'wordpress',
        badge: 'WordPress Food Platform',
        brief: 'A healthy recipe blog, meal plan organizer, and organic food delivery portal.',
        desc: 'HealthyRasoi is a dynamic website centered around clean eating. It features recipe databases with filters for dietary restrictions, caloric trackers, meal subscription scheduling, and integrated local payment gateways. Optimized for fast content delivery network (CDN) cache management.',
        tech: ['WordPress', 'Elementor', 'WooCommerce Subscriptions', 'Yoast SEO', 'W3 Total Cache'],
        live: 'https://healthyrasoi.in',
        github: '#'
    }
};

// Web Audio API Synthesizer Engine
class SynthEngine {
    constructor() {
        this.ctx = null;
        this.muted = true;
        this.ambientOsc = null;
        this.ambientGain = null;
    }

    init() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    playClick(freq = 900, dur = 0.04) {
        if (this.muted) return;
        this.init();
        
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + dur);
        
        osc.start();
        osc.stop(this.ctx.currentTime + dur);
    }

    playSuccessChime() {
        if (this.muted) return;
        this.init();
        
        const time = this.ctx.currentTime;
        // Neon Crimson major chord chime
        const notes = [440.00, 554.37, 659.25, 880.00]; 
        
        notes.forEach((freq, index) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            
            osc.frequency.setValueAtTime(freq, time + (index * 0.08));
            gain.gain.setValueAtTime(0, time + (index * 0.08));
            gain.gain.linearRampToValueAtTime(0.08, time + (index * 0.08) + 0.02);
            gain.gain.exponentialRampToValueAtTime(0.001, time + (index * 0.08) + 0.35);
            
            osc.start(time + (index * 0.08));
            osc.stop(time + (index * 0.08) + 0.35);
        });
    }

    toggleAmbientLoop() {
        this.init();
        if (this.ambientOsc) {
            this.ambientOsc.stop();
            this.ambientOsc = null;
            return false;
        } else {
            this.ambientGain = this.ctx.createGain();
            this.ambientGain.gain.setValueAtTime(0.02, this.ctx.currentTime);
            this.ambientGain.connect(this.ctx.destination);
            
            this.ambientOsc = this.ctx.createOscillator();
            this.ambientOsc.type = 'sawtooth';
            // Ambient Low Cyber Drone (65.41 Hz)
            this.ambientOsc.frequency.setValueAtTime(65.41, this.ctx.currentTime);
            
            const filter = this.ctx.createBiquadFilter();
            filter.type = 'lowpass';
            filter.frequency.setValueAtTime(120, this.ctx.currentTime);
            
            this.ambientOsc.connect(filter);
            filter.connect(this.ambientGain);
            
            this.ambientOsc.start();
            return true;
        }
    }
}

const synth = new SynthEngine();

// Neon Background Particles Logic
function initCanvasParticles() {
    const canvas = document.getElementById('canvas-bg');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });
    
    const particles = [];
    const count = Math.min(60, Math.floor((width * height) / 28000));
    
    let mouse = { x: null, y: null, radius: 150 };
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });
    
    window.addEventListener('mouseout', () => {
        mouse.x = null;
        mouse.y = null;
    });
    
    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.4;
            this.vy = (Math.random() - 0.5) * 0.4;
            this.r = Math.random() * 2 + 1;
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;
            
            if (mouse.x !== null) {
                const dx = this.x - mouse.x;
                const dy = this.y - mouse.y;
                const dist = Math.hypot(dx, dy);
                if (dist < mouse.radius) {
                    const force = (mouse.radius - dist) / mouse.radius;
                    const angle = Math.atan2(dy, dx);
                    this.x += Math.cos(angle) * force * 1.5;
                    this.y += Math.sin(angle) * force * 1.5;
                }
            }
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 0, 60, 0.22)';
            ctx.fill();
        }
    }
    
    for (let i = 0; i < count; i++) {
        particles.push(new Particle());
    }
    
    function animate() {
        ctx.clearRect(0, 0, width, height);
        
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
            
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.hypot(dx, dy);
                
                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    const alpha = (120 - dist) / 120 * 0.1;
                    ctx.strokeStyle = `rgba(255, 0, 60, ${alpha})`;
                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                }
            }
        }
        
        updateAndDrawConfetti(ctx);
        requestAnimationFrame(animate);
    }
    
    animate();
}

// Confetti Particle System
const confettiArray = [];
function triggerConfettiBurst() {
    const colors = ['rgb(255, 0, 60)', 'rgb(138, 43, 226)', '#ef4444', '#f59e0b', '#ec4899'];
    const startX = window.innerWidth / 2;
    const startY = window.innerHeight / 2;
    
    for (let i = 0; i < 70; i++) {
        confettiArray.push({
            x: startX,
            y: startY,
            vx: (Math.random() - 0.5) * 8,
            vy: (Math.random() - 0.75) * 11,
            r: Math.random() * 4 + 2.5,
            color: colors[Math.floor(Math.random() * colors.length)],
            alpha: 1,
            decay: Math.random() * 0.018 + 0.008
        });
    }
}

function updateAndDrawConfetti(ctx) {
    for (let i = confettiArray.length - 1; i >= 0; i--) {
        const c = confettiArray[i];
        c.x += c.vx;
        c.y += c.vy;
        c.vy += 0.22;
        c.alpha -= c.decay;
        
        if (c.alpha <= 0) {
            confettiArray.splice(i, 1);
            continue;
        }
        
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
        ctx.fillStyle = c.color;
        ctx.globalAlpha = c.alpha;
        ctx.fill();
    }
    ctx.globalAlpha = 1.0;
}

// ==========================================
// BACKGROUND MULTI-TRACK AUDIO ENGINE (SPA)
// ==========================================

// Per-page track mapping:
//   index.html        → Aasmaan Ki Manzil (Hindi)
//   experience.html   → Lecture Hall Hustle (English)
//   about.html        → Technova Ki Udaan (Hindi)
//   all other pages   → no music (null = silent)
const pageTrackMap = {
    'index.html':      { src: 'assets/Aasmaan_Ki_Manzil.mp3',   name: 'Aasmaan Ki Manzil',   artist: 'Suno AI - Hindi' },
    'experience.html': { src: 'assets/Lecture_Hall_Hustle.mp3', name: 'Lecture Hall Hustle', artist: 'Suno AI - English' },
    'about.html':      { src: 'assets/Technova_Ki_Udaan.mp3',   name: 'Technova Ki Udaan',   artist: 'Suno AI - Hindi' }
};

let bgAudio = null;
let isAudioPlaying = false;
let currentTrackSrc = null;
let audioErrorCount = 0;

/** Returns the track object for a given page filename, or null if that page has no music. */
function getTrackForPage(pageFile) {
    const key = pageFile ? pageFile.split('/').pop().split('?')[0].split('#')[0] : 'index.html';
    return pageTrackMap[key] || null;
}

/** Returns the track for the currently loaded page (or null if silent). */
function getCurrentPageTrack() {
    const page = window.location.pathname.split('/').pop() || 'index.html';
    return getTrackForPage(page);
}

function initBgAudio() {
    if (!bgAudio) {
        bgAudio = new Audio();
        bgAudio.preload = 'auto';
        bgAudio.loop = false;
        bgAudio.addEventListener('ended', () => {
            // Loop the same page-track when it ends
            bgAudio.currentTime = 0;
            bgAudio.play().catch(() => {});
        });
        bgAudio.addEventListener('timeupdate', updateAudioProgress);
        bgAudio.addEventListener('loadedmetadata', () => {
            updateAudioDuration(bgAudio.duration);
        });
        bgAudio.addEventListener('error', handleAudioError);
    }
}

function handleAudioError() {
    audioErrorCount++;
    if (audioErrorCount <= 3) {
        console.warn(`Audio load failed (attempt ${audioErrorCount}): ${bgAudio.src}`);
    } else if (audioErrorCount === 4) {
        console.error('Audio files not found in assets/. Please add the MP3 files to the assets/ folder.');
    }
    isAudioPlaying = false;
    updatePlayerUI();
}

/**
 * Switch to the correct track for a given page filename.
 * If the page has no track, audio fades out and stops.
 * If already playing the correct track, does nothing.
 * Crossfades smoothly in ~320 ms.
 */
function switchTrackForPage(pageFile) {
    initBgAudio();
    const track = getTrackForPage(pageFile);

    const fadeSteps = 8;
    const fadeInterval = 40;
    const origVolume = bgAudio.volume || 1;

    // --- Silent page: fade out and stop ---
    if (!track) {
        if (bgAudio.paused) return;
        let step = 0;
        const fadeOut = setInterval(() => {
            step++;
            bgAudio.volume = Math.max(0, origVolume * (1 - step / fadeSteps));
            if (step >= fadeSteps) {
                clearInterval(fadeOut);
                bgAudio.pause();
                bgAudio.volume = origVolume;
                isAudioPlaying = false;
                currentTrackSrc = null;
                updatePlayerUI();
            }
        }, fadeInterval);
        return;
    }

    // Normalise paths so we compare fairly
    const normNew = track.src.split('/').pop();
    const normCur = (currentTrackSrc || '').split('/').pop();

    if (normNew === normCur && !bgAudio.paused) {
        // Same song already playing – do nothing
        return;
    }

    // Crossfade out → swap → crossfade in
    let step = 0;
    const fadeOut = setInterval(() => {
        step++;
        bgAudio.volume = Math.max(0, origVolume * (1 - step / fadeSteps));
        if (step >= fadeSteps) {
            clearInterval(fadeOut);
            bgAudio.pause();
            bgAudio.src = track.src;
            bgAudio.volume = 0;
            currentTrackSrc = track.src;
            audioErrorCount = 0;

            const playPromise = bgAudio.play();
            if (playPromise) {
                playPromise
                    .then(() => {
                        isAudioPlaying = true;
                        updatePlayerUI();
                        // Fade in
                        let inStep = 0;
                        const fadeIn = setInterval(() => {
                            inStep++;
                            bgAudio.volume = Math.min(origVolume, origVolume * (inStep / fadeSteps));
                            if (inStep >= fadeSteps) clearInterval(fadeIn);
                        }, fadeInterval);
                    })
                    .catch(err => {
                        console.log('Autoplay blocked; waiting for user interaction.', err);
                        isAudioPlaying = false;
                        updatePlayerUI();
                    });
            }
        }
    }, fadeInterval);
}

function playTrack() {
    initBgAudio();
    const track = getCurrentPageTrack();
    if (!track) return; // silent page – do nothing
    bgAudio.src = track.src;
    currentTrackSrc = track.src;
    audioErrorCount = 0;
    bgAudio.play()
        .then(() => {
            isAudioPlaying = true;
            updatePlayerUI();
        })
        .catch(err => {
            console.error('Audio play trigger failed:', err);
            isAudioPlaying = false;
            updatePlayerUI();
        });
}

function toggleBgAudio() {
    initBgAudio();
    if (bgAudio.paused) {
        bgAudio.play()
            .then(() => {
                isAudioPlaying = true;
                updatePlayerUI();
            })
            .catch(err => {
                console.error("Audio playback failed: ", err);
                isAudioPlaying = false;
                updatePlayerUI();
            });
    } else {
        bgAudio.pause();
        isAudioPlaying = false;
        updatePlayerUI();
    }
}

function updateAudioProgress() {
    if (!bgAudio) return;
    const progressFill = document.getElementById('playerProgressFill');
    const currentTimeText = document.getElementById('playerCurrentTime');
    
    const curTime = bgAudio.currentTime;
    const duration = bgAudio.duration || 0;
    
    if (duration > 0) {
        const pct = (curTime / duration) * 100;
        if (progressFill) progressFill.style.width = `${pct}%`;
    }
    
    if (currentTimeText) currentTimeText.textContent = formatTime(curTime);
}

function updateAudioDuration(duration) {
    const durationText = document.getElementById('playerDuration');
    if (durationText) durationText.textContent = formatTime(duration);
}

function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

function updatePlayerUI() {
    const playBtn = document.getElementById('playerPlayBtn');
    const modalTrackName = document.querySelector('#modalAudioPlayer .track-name');
    const modalTrackArtist = document.querySelector('#modalAudioPlayer .track-artist');
    
    const track = getCurrentTrack();
    
    if (modalTrackName) modalTrackName.textContent = track.name;
    if (modalTrackArtist) modalTrackArtist.textContent = track.artist;
    
    const pauseIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="14" y="4" width="4" height="16" rx="1"/><rect x="6" y="4" width="4" height="16" rx="1"/></svg>`;
    const playIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>`;
    
    if (playBtn) {
        playBtn.innerHTML = isAudioPlaying ? pauseIcon : playIcon;
    }
    
    const widget = document.getElementById('musicWidget');
    const widgetTitle = document.getElementById('musicWidgetTitle');
    const widgetArtist = document.getElementById('musicWidgetArtist');
    
    if (widgetTitle) widgetTitle.textContent = track.name;
    if (widgetArtist) widgetArtist.textContent = track.artist;
    
    if (widget) {
        const eqBars = widget.querySelector('.music-eq-bars');
        const playIconEl = widget.querySelector('.music-play-icon');
        
        if (isAudioPlaying) {
            if (eqBars) eqBars.style.display = 'flex';
            if (playIconEl) playIconEl.style.display = 'none';
            widget.classList.add('playing');
        } else {
            if (eqBars) eqBars.style.display = 'none';
            if (playIconEl) playIconEl.style.display = 'flex';
            widget.classList.remove('playing');
        }
    }
}

// Inject Floating Music Widget dynamically
function injectMusicWidget() {
    if (document.getElementById('musicWidget')) return;
    
    const widget = document.createElement('div');
    widget.id = 'musicWidget';
    widget.className = 'music-widget';
    
    widget.innerHTML = `
        <button class="music-widget-toggle" id="musicWidgetToggle" aria-label="Toggle music">
            <div class="music-eq-bars" style="display: none;">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <span class="music-play-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/></svg>
            </span>
        </button>
        <div class="music-widget-info">
            <span class="music-widget-title" id="musicWidgetTitle">Loading...</span>
            <span class="music-widget-artist" id="musicWidgetArtist">Cyber Soundscape</span>
        </div>
    `;
    
    document.body.appendChild(widget);
    
    const toggleBtn = widget.querySelector('#musicWidgetToggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleBgAudio();
        });
    }
    
    updatePlayerUI();
}

// ==========================================
// CLIENT-SIDE ROUTER (SPA SEAMLESS ROUTING)
// ==========================================
function initRouter() {
    document.addEventListener('click', (e) => {
        // If file:// protocol, let standard browser navigation load the page to avoid CORS/security errors
        if (window.location.protocol === 'file:') {
            return;
        }

        const link = e.target.closest('a');
        if (!link) return;
        
        const href = link.getAttribute('href');
        if (!href) return;
        
        const isExternal = href.startsWith('http') || href.startsWith('//') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('https://wa.me');
        const isLocalPage = href.endsWith('.html') || href.includes('.html#');
        
        if (isLocalPage && !isExternal) {
            e.preventDefault();
            
            const parts = href.split('#');
            const pagePath = parts[0] || 'index.html';
            const hash = parts[1];
            
            const currentPath = window.location.pathname.split('/').pop() || 'index.html';
            const targetPath = pagePath;
            
            if (currentPath === targetPath) {
                if (hash) {
                    const targetEl = document.getElementById(hash);
                    if (targetEl) {
                        targetEl.scrollIntoView({ behavior: 'smooth' });
                    }
                } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            } else {
                navigateToPage(href);
            }
        }
    });
    
    window.addEventListener('popstate', () => {
        if (window.location.protocol === 'file:') {
            return;
        }
        const path = window.location.pathname.split('/').pop() || 'index.html';
        loadPage(path);
    });
}

function navigateToPage(url) {
    if (window.location.protocol !== 'file:') {
        history.pushState(null, '', url);
    }
    loadPage(url);
}

function loadPage(url) {
    if (window.location.protocol === 'file:') {
        window.location.href = url;
        return;
    }

    const parts = url.split('#');
    const fetchUrl = parts[0] || 'index.html';
    const hash = parts[1];
    
    const main = document.querySelector('main');
    if (main) {
        main.classList.add('page-transitioning');
    }
    
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    if (navToggle && navMenu) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    fetch(fetchUrl)
        .then(res => {
            if (!res.ok) throw new Error('Fetch failed');
            return res.text();
        })
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            
            document.title = doc.title;
            
            const newMain = doc.querySelector('main');
            if (newMain && main) {
                setTimeout(() => {
                    main.innerHTML = newMain.innerHTML;
                    main.className = newMain.className;
                    main.id = newMain.id;
                    
                    main.classList.remove('page-transitioning');
                    
                    syncModalAndToast(doc);
                    updateNavbarActiveLink(fetchUrl);
                    reinitializePageScripts(doc);

                    // Switch to the per-page track with crossfade
                    switchTrackForPage(fetchUrl);
                    
                    if (hash) {
                        setTimeout(() => {
                            const targetElement = document.getElementById(hash);
                            if (targetElement) {
                                targetElement.scrollIntoView({ behavior: 'smooth' });
                            }
                        }, 100);
                    } else {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                }, 250);
            }
        })
        .catch(err => {
            console.warn('AJAX page fetch failed, falling back to standard reload:', err);
            window.location.href = url;
        });
}

function syncModalAndToast(doc) {
    const existingModal = document.getElementById('projectModal');
    const newModal = doc.getElementById('projectModal');
    if (newModal) {
        if (existingModal) {
            existingModal.outerHTML = newModal.outerHTML;
        } else {
            document.body.appendChild(newModal);
        }
    } else if (existingModal) {
        existingModal.remove();
    }
    
    const existingToast = document.getElementById('toastContainer');
    const newToast = doc.getElementById('toastContainer');
    if (newToast) {
        if (existingToast) {
            existingToast.outerHTML = newToast.outerHTML;
        } else {
            document.body.appendChild(newToast);
        }
    }
}

function updateNavbarActiveLink(url) {
    const navLinks = document.querySelectorAll('.nav-link');
    const filename = url.split('/').pop().split('#')[0] || 'index.html';
    
    navLinks.forEach(link => {
        const linkFilename = link.getAttribute('href').split('#')[0];
        if (linkFilename === filename) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Project Details Modal System
function openModal(projectId) {
    const data = projectsData[projectId];
    if (!data) return;

    const modal = document.getElementById('projectModal');
    const modalTag = document.getElementById('modalTag');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalClient = document.getElementById('modalClient');
    const modalDuration = document.getElementById('modalDuration');
    const modalTech = document.getElementById('modalTech');
    const modalEmailBtn = document.getElementById('modalEmailBtn');
    const modalWhatsappBtn = document.getElementById('modalWhatsappBtn');

    modalTag.textContent = data.badge;
    modalTitle.textContent = data.title;
    modalDesc.textContent = data.desc;
    
    modalClient.textContent = data.category === 'wordpress' ? 'TechVenus Solutions Client' : 'Suryansh Soni Dev';
    modalDuration.textContent = data.category === 'wordpress' ? '2024 - 2025' : '2024 - 2026';
    
    modalTech.innerHTML = '';
    data.tech.forEach(t => {
        const pill = document.createElement('span');
        pill.className = 'modal-tech-pill';
        pill.textContent = t;
        modalTech.appendChild(pill);
    });
    
    if (modalEmailBtn) {
        modalEmailBtn.href = `mailto:freelancersuru13@gmail.com?subject=Inquiry%20about%20Project:%20${encodeURIComponent(data.title)}`;
    }
    
    if (modalWhatsappBtn) {
        modalWhatsappBtn.href = `https://wa.me/919601451370?text=${encodeURIComponent(`Hi Suryansh, I am interested in viewing your project "${data.title}".`)}`;
    }

    const modalAudioPlayer = document.getElementById('modalAudioPlayer');
    if (modalAudioPlayer) {
        modalAudioPlayer.style.display = 'none';
        if (projectId === 'ai-music') {
            initBgAudio();
        }
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // lock scrolling
    synth.playClick(780, 0.08);
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; // restore scrolling
        synth.playClick(500, 0.04);
    }
}

// 3D Card Perspective Tilt Effect
function initCardTilts() {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((centerY - y) / centerY) * 8;
            const rotateY = ((x - centerX) / centerX) * 8;
            
            card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'rotateX(0deg) rotateY(0deg) translateY(0)';
        });
    });
}

// Scroll Intersection Observer for reveal animations & skill bar fills
function initScrollAnimations() {
    const elements = document.querySelectorAll('.scroll-reveal');
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // If it is the skills section, animate the progress bars
                if (entry.target.id === 'skills') {
                    entry.target.querySelectorAll('.skill-fill-bar').forEach(bar => {
                        bar.style.width = bar.getAttribute('data-width');
                    });
                }
            }
        });
    }, observerOptions);
    
    elements.forEach(el => observer.observe(el));

    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        
        // Header scrolled class
        const header = document.querySelector('.header');
        if (header) {
            if (scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });
}

// Custom cursor event bindings
function bindCursorHovers() {
    const cursor = document.querySelector('.custom-cursor');
    const cursorGlow = document.querySelector('.custom-cursor-glow');
    if (!cursor || !cursorGlow) return;
    
    const hoverTargets = 'a, button, .project-card, .filter-btn, input, textarea';
    document.querySelectorAll(hoverTargets).forEach(el => {
        if (el.dataset.cursorBound) return;
        el.dataset.cursorBound = "true";
        
        el.addEventListener('mouseenter', () => {
            cursor.style.width = '13px';
            cursor.style.height = '13px';
            cursor.style.backgroundColor = 'var(--secondary)';
            cursorGlow.style.width = '42px';
            cursorGlow.style.height = '42px';
            cursorGlow.style.borderColor = 'var(--primary)';
            synth.playClick(950, 0.025);
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.width = '8px';
            cursor.style.height = '8px';
            cursor.style.backgroundColor = 'var(--primary)';
            cursorGlow.style.width = '28px';
            cursorGlow.style.height = '28px';
            cursorGlow.style.borderColor = 'var(--secondary)';
        });
        
        el.addEventListener('click', () => {
            synth.playClick(620, 0.04);
        });
    });
}

function initSpecsButtons() {
    document.querySelectorAll('.project-details-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            openModal(btn.getAttribute('data-id'));
        });
    });
}

function initFilterToggles() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filterValue = btn.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(15px) scale(0.96)';
                
                setTimeout(() => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'flex';
                        card.offsetHeight; // reflow
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0) scale(1)';
                    } else {
                        card.style.display = 'none';
                    }
                }, 200);
            });
        });
    });
}

function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nameEl = document.getElementById('formName');
        const emailEl = document.getElementById('formEmail');
        const messageEl = document.getElementById('formMessage');
        
        const name = nameEl.value.trim();
        const email = emailEl.value.trim();
        const message = messageEl.value.trim();
        
        let hasError = false;
        
        if (name === '') {
            nameEl.classList.add('shake-err');
            setTimeout(() => nameEl.classList.remove('shake-err'), 400);
            hasError = true;
        }
        if (email === '' || !email.includes('@')) {
            emailEl.classList.add('shake-err');
            setTimeout(() => emailEl.classList.remove('shake-err'), 400);
            hasError = true;
        }
        if (message === '') {
            messageEl.classList.add('shake-err');
            setTimeout(() => messageEl.classList.remove('shake-err'), 400);
            hasError = true;
        }
        
        if (hasError) {
            synth.playClick(160, 0.16); // validation buzz
            showToast('Please correct validation warnings.', 'warning');
            return;
        }
        
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const origText = submitBtn.innerHTML;
        
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Sending...';
        
        fetch("https://formsubmit.co/ajax/freelancersuru13@gmail.com", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email,
                message: message,
                _subject: `New Portfolio Message from ${name}`
            })
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Network response was not ok');
            }
        })
        .then(data => {
            const submissions = JSON.parse(localStorage.getItem('formSubmissions') || '[]');
            submissions.push({ name, email, message, date: new Date().toISOString() });
            localStorage.setItem('formSubmissions', JSON.stringify(submissions));
            
            synth.playSuccessChime();
            triggerConfettiBurst();
            
            showToast('Message sent successfully! Suryansh will contact you shortly.', 'success');
            contactForm.reset();
        })
        .catch(error => {
            console.error("Error submitting contact form:", error);
            showToast('Error sending message. Please try again or email directly.', 'warning');
        })
        .finally(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = origText;
        });
    });
}

function showToast(msg, type = 'success') {
    const toastContainer = document.getElementById('toastContainer');
    if (!toastContainer) return;
    
    const toast = document.createElement('div');
    toast.className = 'toast';
    if (type === 'warning') {
        toast.style.borderLeftColor = '#f59e0b';
        toast.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg> <span>${msg}</span>`;
    } else {
        toast.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg> <span>${msg}</span>`;
    }
    
    toastContainer.appendChild(toast);
    setTimeout(() => { toast.classList.add('active'); }, 50);
    
    setTimeout(() => {
        toast.classList.remove('active');
        setTimeout(() => { toast.remove(); }, 500);
    }, 4000);
}

function reinitializePageScripts(doc) {
    initCardTilts();
    initScrollAnimations();
    bindCursorHovers();
    initSpecsButtons();
    initFilterToggles();
    initContactForm();
    
    updatePlayerUI();
    if (bgAudio && !isNaN(bgAudio.duration)) {
        updateAudioDuration(bgAudio.duration);
    }
}

// Delegated click controls for persistent elements
function initDelegatedEvents() {
    document.addEventListener('click', (e) => {
        // Modal play button
        const playBtn = e.target.closest('#playerPlayBtn');
        if (playBtn) {
            e.stopPropagation();
            toggleBgAudio();
            return;
        }
        
        // Modal progress bar click
        const progressBar = e.target.closest('#playerProgressBar');
        if (progressBar) {
            if (!bgAudio) return;
            const rect = progressBar.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const width = rect.width;
            const duration = bgAudio.duration;
            if (duration) {
                bgAudio.currentTime = (clickX / width) * duration;
                updateAudioProgress();
            }
            return;
        }
        
        // Modal overlay clicks close modal
        const modal = document.getElementById('projectModal');
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

function initMobileMenu() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // Close menu on clicking outside
        document.addEventListener('click', (e) => {
            if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !navToggle.contains(e.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
        
        // Close menu on clicking any navigation link
        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Background particles
    initCanvasParticles();
    
    // 3D card tilt
    initCardTilts();
    
    // Scroll reveals
    initScrollAnimations();
    
    // Custom cursor hovers
    bindCursorHovers();
    
    // Setup delegated event listeners for media controls
    initDelegatedEvents();
    
    // Mobile navigation drawer toggle
    initMobileMenu();
    
    // Links interceptor for client-side routing
    initRouter();
    
    // Attach specs buttons and filter click logic
    initSpecsButtons();
    initFilterToggles();
    initContactForm();

    // Custom Cursor Tracker
    const cursor = document.querySelector('.custom-cursor');
    const cursorGlow = document.querySelector('.custom-cursor-glow');
    
    if (cursor && cursorGlow) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            cursorGlow.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
        });
        
        document.addEventListener('mouseenter', () => {
            cursor.style.opacity = 1;
            cursorGlow.style.opacity = 1;
        });
        
        document.addEventListener('mouseleave', () => {
            cursor.style.opacity = 0;
            cursorGlow.style.opacity = 0;
        });
    }

    // Autoplay the correct per-page track 1 second after page load
    setTimeout(() => {
        initBgAudio();
        const track = getCurrentPageTrack();
        if (!track) return; // this page has no music assigned

        bgAudio.src = track.src;
        currentTrackSrc = track.src;

        const startPlay = () => {
            bgAudio.play()
                .then(() => {
                    isAudioPlaying = true;
                    updatePlayerUI();
                })
                .catch(err => {
                    console.log('Autoplay blocked by browser. Waiting for user interaction to start music...');
                    const startAudioOnInteraction = () => {
                        if (bgAudio && bgAudio.paused) {
                            bgAudio.play()
                                .then(() => {
                                    isAudioPlaying = true;
                                    updatePlayerUI();
                                })
                                .catch(e => console.error('Playback failed on interaction:', e));
                        }
                        ['click', 'keydown', 'scroll', 'touchstart'].forEach(type => {
                            document.removeEventListener(type, startAudioOnInteraction);
                        });
                    };
                    ['click', 'keydown', 'scroll', 'touchstart'].forEach(type => {
                        document.addEventListener(type, startAudioOnInteraction, { once: false });
                    });
                });
        };

        startPlay();
    }, 1000);
});

// Window helper exports
window.closeModal = closeModal;
