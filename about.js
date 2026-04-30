
document.addEventListener('DOMContentLoaded', () => {
    const aboutBg = GP.getSiteImage('about-story');
    const aboutChef = GP.getSiteImage('about-chef');
    const gallery1 = GP.getSiteImage('gallery-1');
    const gallery2 = GP.getSiteImage('gallery-2');
    const gallery3 = GP.getSiteImage('gallery-3');
    const gallery4 = GP.getSiteImage('gallery-4');

    if (aboutBg) document.querySelectorAll('.origin-img img')[0].src = aboutBg;
    if (aboutChef) document.querySelectorAll('.origin-img img')[1].src = aboutChef;
    if (gallery1) document.querySelectorAll('.gal-item img')[0].src = gallery1;
    if (gallery2) document.querySelectorAll('.gal-item img')[1].src = gallery2;
    if (gallery3) document.querySelectorAll('.gal-item img')[2].src = gallery3;
    if (gallery4) document.querySelectorAll('.gal-item img')[3].src = gallery4;

    const about = GP.get('about');
    const contact = GP.get('contact');

    // Title
    const titleEl = document.getElementById('aboutTitle');
    if (titleEl) titleEl.innerHTML = about.title.includes('Soul')
        ? about.title.replace('Soul', '<span>Soul</span>')
        : about.title;

    document.getElementById('aboutStory').textContent = about.story;
    if (about.story2) document.getElementById('aboutStory2').textContent = about.story2;
    if (document.getElementById('tl1Year')) document.getElementById('tl1Year').textContent = about.year;

    // Socials
    renderFooterSocials(contact.socialLinks || []);

    // Team
    const team = GP.get('team');
    const teamGrid = document.getElementById('teamGrid');
    if (teamGrid) {
        teamGrid.innerHTML = team.map((m, i) => `
            <div class="team-card animate" style="transition-delay:${i*0.1}s">
                <div class="team-img">
                    <img src="${m.img || `https://placehold.co/400x300/111/D4AF37?text=${encodeURIComponent(m.name.split(' ')[0])}`}" alt="${m.name}" loading="lazy" onerror="this.src='https://placehold.co/400x300/111/D4AF37?text=Chef'">
                </div>
                <div class="team-body">
                    <div class="team-name">${m.name}</div>
                    <div class="team-role">${m.role}</div>
                </div>
            </div>
        `).join('');
    }

    // Stats counter
    const statEls = [
        { el: document.getElementById('statYears'), target: parseInt(about.year) ? (new Date().getFullYear() - parseInt(about.year)) : 8 },
        { el: document.getElementById('statGuests'), target: parseInt(about.guests) || 14 },
        { el: document.getElementById('statAwards'), target: parseInt(about.awards) || 3 },
        { el: document.getElementById('statSat'), target: parseInt(about.satisfaction) || 98 },
    ];

    const statsSection = document.querySelector('.stats-band');
    const statsObs = new IntersectionObserver(entries => {
        if (!entries[0].isIntersecting) return;
        statEls.forEach(({ el, target }) => {
            if (!el) return;
            let current = 0;
            const step = target / (1400 / 16);
            const timer = setInterval(() => {
                current += step;
                if (current >= target) { el.textContent = target; clearInterval(timer); }
                else el.textContent = Math.floor(current);
            }, 16);
        });
        statsObs.unobserve(statsSection);
    }, { threshold: 0.4 });
    if (statsSection) statsObs.observe(statsSection);

    initAnimations();
});
