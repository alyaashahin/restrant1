// ===== SHARED CART + NAV — included on every page =====
// Depends on: gp-data.js being loaded first

let cart = JSON.parse(localStorage.getItem('gp_cart')) || [];

// ===== CART CORE =====
function saveCart() {
    localStorage.setItem('gp_cart', JSON.stringify(cart));
    updateCartUI();
    updateCartBadge();
}

function addToCart(id) {
    const menu = GP.get('menu');
    const item = menu.find(i => i.id === id);
    if (!item) return;
    const existing = cart.find(i => i.id === id);
    existing ? existing.qty++ : cart.push({ ...item, qty: 1 });
    saveCart(); openCart();
    flashBtn(id);
}

function updateQty(id, delta) {
    const idx = cart.findIndex(i => i.id === id);
    if (idx === -1) return;
    cart[idx].qty += delta;
    if (cart[idx].qty <= 0) cart.splice(idx, 1);
    saveCart();
}

function updateCartQty(id, sizeKey, delta) {
    let idx;
    if (sizeKey) {
        idx = cart.findIndex(i => i.id === id && i.sizeKey === sizeKey);
    } else {
        idx = cart.findIndex(i => i.id === id);
    }
    if (idx === -1) return;
    cart[idx].qty += delta;
    if (cart[idx].qty <= 0) cart.splice(idx, 1);
    saveCart();
}

function removeItem(id) {
    cart = cart.filter(i => i.id !== id);
    saveCart();
}

function removeCartItem(id, sizeKey) {
    if (sizeKey) {
        cart = cart.filter(i => !(i.id === id && i.sizeKey === sizeKey));
    } else {
        cart = cart.filter(i => i.id !== id);
    }
    saveCart();
}

function openCart()  { document.getElementById('cartPanel')?.classList.add('open'); document.getElementById('cartOverlay')?.classList.add('open'); }
function closeCart() { document.getElementById('cartPanel')?.classList.remove('open'); document.getElementById('cartOverlay')?.classList.remove('open'); }

function updateCartBadge() {
    const total = cart.reduce((s, i) => s + i.qty, 0);
    document.querySelectorAll('.cart-count').forEach(el => {
        el.textContent = total > 0 ? total : '';
        el.setAttribute('data-count', total);
    });
}

function updateCartUI() {
    const body = document.getElementById('cartBody');
    const totalEl = document.getElementById('cartTotal');
    const settings = GP.get('settings');
    const currency = settings.currency || '$';
    if (!body) return;

    if (cart.length === 0) {
        body.innerHTML = `<div class="cart-empty"><i class="fa-solid fa-bag-shopping" style="font-size:2rem;color:var(--border);display:block;margin-bottom:1rem"></i>Your cart is empty.</div>`;
    } else {
        body.innerHTML = cart.map(i => `
            <div class="cart-item">
                <div>
                    <div class="cart-item-name">${i.name}${i.sizeLabel ? `<span class="size-tag">${i.sizeLabel}</span>` : ''}</div>
                    <div class="cart-item-price">${currency}${Number(i.price).toFixed(2)} × ${i.qty}</div>
                </div>
                <div class="cart-qty-ctrl">
                    <button class="qty-btn" onclick="updateCartQty(${i.id}, '${i.sizeKey || ''}', -1)">−</button>
                    <span class="qty-num">${i.qty}</span>
                    <button class="qty-btn" onclick="updateCartQty(${i.id}, '${i.sizeKey || ''}', 1)">+</button>
                    <button class="del-btn" onclick="removeCartItem(${i.id}, '${i.sizeKey || ''}')"><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>
        `).join('');
    }

    const total = cart.reduce((s, i) => s + Number(i.price) * i.qty, 0);
    if (totalEl) totalEl.textContent = currency + total.toFixed(2);
}

function handleCheckout() {
    if (cart.length === 0) { alert('Please add items to your order first.'); return; }
    openCheckoutModal();
}

function openCheckoutModal() {
    // Remove any existing modal
    document.getElementById('checkoutModal')?.remove();

    const settings = GP.get('settings');
    const currency = settings.currency || '$';
    const total = cart.reduce((s, i) => s + Number(i.price) * i.qty, 0);

    const modal = document.createElement('div');
    modal.id = 'checkoutModal';
    modal.innerHTML = `
    <div class="co-overlay" id="coOverlay"></div>
    <div class="co-panel" id="coPanel">
        <div class="co-header">
            <h2><i class="fa-solid fa-receipt"></i> Complete Your Order</h2>
            <button class="co-close" id="coClose"><i class="fa-solid fa-xmark"></i></button>
        </div>

        <div class="co-order-summary">
            <div class="co-summary-label">Order Summary</div>
            ${cart.map(i => `
                <div class="co-item-row">
                    <span>${i.name}${i.sizeLabel ? ` <span class="co-size-label">[${i.sizeLabel}]</span>` : ''} <span class="co-qty">×${i.qty}</span></span>
                    <span>${currency}${(Number(i.price) * i.qty).toFixed(2)}</span>
                </div>
            `).join('')}
            <div class="co-total-row">
                <span>Total</span>
                <span>${currency}${total.toFixed(2)}</span>
            </div>
        </div>

        <div class="co-type-selector">
            <button class="co-type-btn active" id="btnDelivery" onclick="switchType('delivery')">
                <i class="fa-solid fa-motorcycle"></i>
                <span>Delivery</span>
            </button>
            <button class="co-type-btn" id="btnDineIn" onclick="switchType('dinein')">
                <i class="fa-solid fa-utensils"></i>
                <span>Dine-In</span>
            </button>
        </div>

        <div id="formDelivery" class="co-form active">
            <div class="co-field">
                <label><i class="fa-solid fa-user"></i> Name</label>
                <input type="text" id="del_name" placeholder="Your full name">
            </div>
            <div class="co-field">
                <label><i class="fa-solid fa-phone"></i> Mobile Number</label>
                <input type="tel" id="del_phone" placeholder="e.g. 01012345678">
            </div>
            <div class="co-field">
                <label><i class="fa-solid fa-location-dot"></i> Delivery Address</label>
                <textarea id="del_address" rows="2" placeholder="Street, area, building number..."></textarea>
            </div>
        </div>

        <div id="formDineIn" class="co-form">
            <div class="co-field">
                <label><i class="fa-solid fa-user"></i> Name</label>
                <input type="text" id="din_name" placeholder="Your full name">
            </div>
            <div class="co-field">
                <label><i class="fa-solid fa-phone"></i> Mobile Number</label>
                <input type="tel" id="din_phone" placeholder="e.g. 01012345678">
            </div>
            <div class="co-field">
                <label><i class="fa-solid fa-chair"></i> Table Number</label>
                <input type="text" id="din_table" placeholder="e.g. T4, Table 7">
            </div>
        </div>

        <button class="co-submit-btn" onclick="submitOrder()">
            <i class="fa-brands fa-whatsapp"></i> Send Order via WhatsApp
        </button>
    </div>`;

    document.body.appendChild(modal);

    // Animate in
    requestAnimationFrame(() => {
        modal.querySelector('.co-overlay').classList.add('visible');
        modal.querySelector('.co-panel').classList.add('visible');
    });

    document.getElementById('coClose').addEventListener('click', closeCheckoutModal);
    document.getElementById('coOverlay').addEventListener('click', closeCheckoutModal);
}

let currentOrderType = 'delivery';

function switchType(type) {
    currentOrderType = type;
    document.getElementById('btnDelivery').classList.toggle('active', type === 'delivery');
    document.getElementById('btnDineIn').classList.toggle('active', type === 'dinein');
    document.getElementById('formDelivery').classList.toggle('active', type === 'delivery');
    document.getElementById('formDineIn').classList.toggle('active', type === 'dinein');
}

function closeCheckoutModal() {
    const modal = document.getElementById('checkoutModal');
    if (!modal) return;
    modal.querySelector('.co-overlay').classList.remove('visible');
    modal.querySelector('.co-panel').classList.remove('visible');
    setTimeout(() => modal.remove(), 300);
}

function submitOrder() {
    const contact = GP.get('contact');
    const settings = GP.get('settings');
    const currency = settings.currency || '$';
    const total = cart.reduce((s, i) => s + Number(i.price) * i.qty, 0);
    const items = cart.map(i => `• ${i.name}${i.sizeLabel ? ` [${i.sizeLabel}]` : ''} (×${i.qty}) — ${currency}${(Number(i.price)*i.qty).toFixed(2)}`).join('\n');

    let name, phone, locationInfo, orderTypeLabel;

    if (currentOrderType === 'delivery') {
        name = document.getElementById('del_name')?.value.trim();
        phone = document.getElementById('del_phone')?.value.trim();
        const address = document.getElementById('del_address')?.value.trim();
        if (!name || !phone || !address) { alert('Please fill in all delivery details.'); return; }
        orderTypeLabel = '🛵 Delivery';
        locationInfo = `📍 Address: ${address}`;
    } else {
        name = document.getElementById('din_name')?.value.trim();
        phone = document.getElementById('din_phone')?.value.trim();
        const table = document.getElementById('din_table')?.value.trim();
        if (!name || !phone || !table) { alert('Please fill in all dine-in details.'); return; }
        orderTypeLabel = '🍽️ Dine-In';
        locationInfo = `🪑 Table: ${table}`;
    }

    // Save order to localStorage for admin dashboard
    const savedOrders = JSON.parse(localStorage.getItem('gp_orders')) || [];
    const newOrder = {
        id: Date.now(),
        customer: name,
        phone: phone,
        type: currentOrderType,
        items: cart.map(i => `${i.name}${i.sizeLabel ? ` [${i.sizeLabel}]` : ''} (×${i.qty})`).join(', '),
        itemsDetailed: cart.map(i => ({ name: i.name, qty: i.qty, price: i.price, sizeLabel: i.sizeLabel || '' })),
        total: total,
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
        date: new Date().toLocaleDateString('en-US'),
        status: 'new',
        location: currentOrderType === 'delivery'
            ? document.getElementById('del_address')?.value.trim()
            : document.getElementById('din_table')?.value.trim()
    };
    savedOrders.push(newOrder);
    localStorage.setItem('gp_orders', JSON.stringify(savedOrders));

    // Send WhatsApp message
    const msg = encodeURIComponent(
        `🍽️ New Order — The Golden Plate\n` +
        `━━━━━━━━━━━━━━━━\n` +
        `${orderTypeLabel}\n` +
        `👤 Name: ${name}\n` +
        `📞 Phone: ${phone}\n` +
        `${locationInfo}\n` +
        `━━━━━━━━━━━━━━━━\n` +
        `${items}\n` +
        `━━━━━━━━━━━━━━━━\n` +
        `💰 Total: ${currency}${total.toFixed(2)}`
    );

    window.open(`https://wa.me/${contact.whatsapp || '1234567890'}?text=${msg}`, '_blank');
    cart = []; saveCart(); closeCart(); closeCheckoutModal();
}

function flashBtn(id) {
    document.querySelectorAll(`[data-item-id="${id}"] .add-btn, [data-item-id="${id}"] .row-add-btn`).forEach(btn => {
        btn.style.background = 'var(--gold)';
        btn.style.color = 'var(--btn-text)';
        setTimeout(() => { btn.style.background = ''; btn.style.color = ''; }, 500);
    });
}

// ===== NAV =====
function initNav() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.getElementById('navLinks');
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const settings = GP.get('settings');

    // Site name
    document.querySelectorAll('.nav-logo, .footer-logo').forEach(el => el.textContent = settings.name || 'The Golden Plate');
    document.querySelectorAll('.footer-tagline').forEach(el => el.textContent = settings.tagline || '');

    if (navbar) window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', scrollY > 30));
    if (mobileBtn) mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        const icon = mobileBtn.querySelector('i');
        if (navLinks.classList.contains('open')) {
            icon.className = 'fa-solid fa-xmark';
            document.body.style.overflow = 'hidden';
        } else {
            icon.className = 'fa-solid fa-bars';
            document.body.style.overflow = '';
        }
    });
    document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => {
        navLinks?.classList.remove('open');
        const icon = mobileBtn?.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-bars';
        document.body.style.overflow = '';
    }));

    // Cart events
    document.querySelector('.cart-toggle')?.addEventListener('click', openCart);
    document.getElementById('cartOverlay')?.addEventListener('click', closeCart);
    document.querySelector('.close-cart')?.addEventListener('click', closeCart);
    document.getElementById('checkoutBtn')?.addEventListener('click', handleCheckout);

    // Year
    document.querySelectorAll('.year').forEach(el => el.textContent = new Date().getFullYear());

    updateCartUI();
    updateCartBadge();
}

// ===== SCROLL ANIMATIONS =====
function initAnimations() {
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.1, rootMargin: '0px 0px -48px 0px' });
    document.querySelectorAll('.animate').forEach(el => obs.observe(el));
}

// ===== FOOTER SOCIAL LINKS =====
function renderFooterSocials(links) {
    const container = document.getElementById('footerSocials');
    if (!container) return;
    container.innerHTML = links.filter(l => l.url).map(link => `
        <a href="${link.url}" target="_blank" rel="noopener noreferrer" aria-label="Social link">
            <i class="${GP.detectSocialIcon(link.url)}"></i>
        </a>
    `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initAnimations();
});





document.addEventListener('DOMContentLoaded', () => {
    const heroBg = GP.getSiteImage('hero-bg');
    if (heroBg) {
        document.querySelector('.hero').style.backgroundImage = `url('${heroBg}')`;
    }

    const hero = GP.get('hero');
    const heading = hero.heading;
    const highlight = hero.highlight;
    const headingEl = document.getElementById('heroHeading');
    if (headingEl && highlight && heading.includes(highlight)) {
        headingEl.innerHTML = heading.replace(highlight, `<span id="heroSpan">${highlight}</span>`);
    } else if (headingEl) {
        headingEl.textContent = heading;
    }
    const descEl = document.getElementById('heroDesc');
    if (descEl) descEl.textContent = hero.desc;
    const btnEl = document.getElementById('heroBtnEl');
    if (btnEl) { btnEl.textContent = hero.btnText; btnEl.href = hero.btnLink; }

    const t1 = GP.getSiteImage('testimonial-1');
    const t2 = GP.getSiteImage('testimonial-2');
    const t3 = GP.getSiteImage('testimonial-3');
    document.querySelectorAll('.review-avatar').forEach((el, i) => {
        const img = [t1, t2, t3][i];
        if (img) {
            el.style.backgroundImage = `url('${img}')`;
            el.style.backgroundSize = 'cover';
            el.style.backgroundPosition = 'center';
            el.textContent = '';
        }
    });

    // Load contact for socials
    const contact = GP.get('contact');
    renderFooterSocials(contact.socialLinks || []);

    // Render preview menu (first 6 items)
    const menu = GP.get('menu');
    const previewGrid = document.getElementById('previewGrid');
    const settings = GP.get('settings');
    const currency = settings.currency || '$';
    if (previewGrid) {
        previewGrid.innerHTML = menu.slice(0, 6).map(item => {
            const hasSizes = item.sizes && Object.keys(item.sizes).length > 0;
            const priceDisplay = hasSizes ? `${currency}${Number(item.sizes.small.price).toFixed(2)} – ${currency}${Number(item.sizes.large.price).toFixed(2)}` : `${currency}${Number(item.price).toFixed(2)}`;
            const actionBtn = hasSizes
                ? `<button class="add-btn" onclick="event.stopPropagation();window.location.href='item.html?id=${item.id}'"><span>View Details</span></button>`
                : `<button class="add-btn" onclick="event.stopPropagation();addToCart(${item.id})"><span>Add to Cart</span></button>`;
            return `
            <div class="menu-card animate" data-item-id="${item.id}" onclick="window.location.href='item.html?id=${item.id}'">
                <div class="menu-card-img">
                    <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.src='https://placehold.co/600x400/111/D4AF37?text=${encodeURIComponent(item.name)}'">
                </div>
                <div class="menu-card-body">
                    <h3>${item.name}</h3>
                    <p>${item.desc}</p>
                    <div class="menu-card-footer">
                        <span class="item-price">${priceDisplay}</span>
                        ${actionBtn}
                    </div>
                </div>
            </div>`;
        }).join('');
        initAnimations(); // re-run for new elements
    }

    // Dynamic reviews
    renderHomeReviews();
});

function renderHomeReviews() {
    const reviews = JSON.parse(localStorage.getItem('gp_reviews') || '[]');
    const approved = reviews.filter(r => r.status === 'approved').sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 6);
    const grid = document.getElementById('reviewsGrid');
    if (!grid) return;

    const defaultReviews = [
        { name: 'Sophie Laurent', initials: 'S', loc: 'Paris, France', text: '"An absolutely transcendent dining experience. The Truffle Risotto was like nothing I\'ve ever tasted — pure artistry on a plate."', rating: 5 },
        { name: 'James Mitchell', initials: 'J', loc: 'New York, USA', text: '"The ambiance, the service, the food — everything was flawless. The Wagyu Burger set a new standard for what a burger can be."', rating: 5 },
        { name: 'Amelia Stone', initials: 'A', loc: 'London, UK', text: '"We celebrated our anniversary here and it was magical. Every detail was considered. We\'ll be back for every special occasion."', rating: 5 }
    ];

    if (approved.length === 0) {
        grid.innerHTML = defaultReviews.map((r, i) => `
            <div class="review-card animate" style="transition-delay:${i*0.1}s">
                <div class="review-stars">${'★'.repeat(r.rating)}</div>
                <p class="review-text">${r.text}</p>
                <div class="review-author"><div class="review-avatar">${r.initials}</div><div><div class="review-name">${r.name}</div><div class="review-loc">${r.loc}</div></div></div>
            </div>
        `).join('');
    } else {
        grid.innerHTML = approved.map((r, i) => {
            const stars = '★'.repeat(r.rating);
            const initials = r.name.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();
            const date = new Date(r.date + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
            return `
            <div class="review-card animate" style="transition-delay:${i*0.1}s">
                <div class="review-stars">${stars}</div>
                <p class="review-text">"${r.text}"</p>
                <div class="review-author">
                    <div class="review-avatar">${initials}</div>
                    <div>
                        <div class="review-name">${r.name}</div>
                        <div class="review-loc">${date}</div>
                    </div>
                </div>
            </div>`;
        }).join('');
    }
    initAnimations();
}

function submitHomeReview() {
    const name = document.getElementById('homeReviewName').value.trim();
    const rating = parseInt(document.getElementById('homeReviewRating').value);
    const text = document.getElementById('homeReviewText').value.trim();

    if (!name || !text) { alert('Please fill in your name and review.'); return; }
    if (text.length < 10) { alert('Review must be at least 10 characters.'); return; }

    const reviews = JSON.parse(localStorage.getItem('gp_reviews') || '[]');
    reviews.push({ id: Date.now(), itemId: 0, name, rating, text, date: new Date().toISOString().split('T')[0], status: 'pending' });
    localStorage.setItem('gp_reviews', JSON.stringify(reviews));

    document.getElementById('homeReviewName').value = '';
    document.getElementById('homeReviewText').value = '';
    document.getElementById('homeReviewSuccess').style.display = 'block';
    setTimeout(() => document.getElementById('homeReviewSuccess').style.display = 'none', 4000);
}
