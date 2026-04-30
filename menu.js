
let currentCat = 'all';
let currentSearch = '';

function renderMenu(cat) {
    currentCat = cat || currentCat;
    const menu = GP.get('menu');
    const settings = GP.get('settings');
    const currency = settings.currency || '$';
    const list = document.getElementById('menuList');
    if (!list) return;

    let data = currentCat === 'all' ? menu : menu.filter(i => i.category === currentCat);

    if (currentSearch) {
        const q = currentSearch.toLowerCase();
        data = data.filter(i => {
            const matchName = i.name.toLowerCase().includes(q);
            const matchDesc = (i.desc || '').toLowerCase().includes(q);
            const matchIng = (i.ingredients || []).some(ing => ing.toLowerCase().includes(q));
            const matchCat = i.category.toLowerCase().includes(q);
            return matchName || matchDesc || matchIng || matchCat;
        });
    }

    const countEl = document.getElementById('searchResultsCount');
    if (currentSearch) {
        countEl.style.display = 'block';
        countEl.textContent = data.length === 0 ? 'No results found' : `${data.length} result${data.length !== 1 ? 's' : ''} for "${currentSearch}"`;
    } else {
        countEl.style.display = 'none';
    }

    list.classList.add('fading');
    setTimeout(() => {
        if (data.length === 0) {
            list.innerHTML = `<div class="no-results"><i class="fa-solid fa-magnifying-glass"></i><p>${currentSearch ? 'No items match your search.' : 'No items in this category.'}</p></div>`;
        } else {
            list.innerHTML = data.map(item => {
            const hasSizes = item.sizes && Object.keys(item.sizes).length > 0;
            const priceDisplay = hasSizes
                ? `${currency}${Number(item.sizes.small.price).toFixed(2)} – ${currency}${Number(item.sizes.large.price).toFixed(2)}`
                : `${currency}${Number(item.price).toFixed(2)}`;
            return `
            <div class="menu-row animate" data-item-id="${item.id}" onclick="window.location.href='item.html?id=${item.id}'" style="cursor:pointer">
                <div class="menu-row-img">
                    <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.src='https://placehold.co/200x200/111/D4AF37?text=GP'">
                </div>
                <div class="menu-row-info">
                    <h3>${item.name}</h3>
                    <p>${item.desc}</p>
                </div>
                <div class="menu-row-action">
                    <span class="row-price">${priceDisplay}</span>
                    <button class="row-add-btn" onclick="event.stopPropagation();handleAdd(${item.id})">Add</button>
                </div>
            </div>`;
        }).join('');
        }
        list.classList.remove('fading');
        initAnimations();
    }, 200);
}

function handleAdd(id) {
    const menu = GP.get('menu');
    const item = menu.find(i => i.id === id);
    if (!item) return;
    if (item.sizes && Object.keys(item.sizes).length > 0) {
        openSizeModal(id);
    } else {
        addToCart(id);
    }
}

function clearSearch() {
    document.getElementById('menuSearchInput').value = '';
    document.getElementById('menuSearchClear').style.display = 'none';
    currentSearch = '';
    renderMenu(currentCat);
}

// Pre-select item from URL
function preloadItem() {
    const params = new URLSearchParams(window.location.search);
    const itemId = parseInt(params.get('item'));
    if (itemId) {
        setTimeout(() => openSizeModal(itemId), 400);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderMenu('all');
    document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderMenu(btn.dataset.cat);
        });
    });

    // Search
    const searchInput = document.getElementById('menuSearchInput');
    let searchTimeout;
    searchInput.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        const val = searchInput.value.trim();
        document.getElementById('menuSearchClear').style.display = val ? 'block' : 'none';
        searchTimeout = setTimeout(() => {
            currentSearch = val;
            renderMenu(currentCat);
        }, 250);
    });

    // Socials
    const contact = GP.get('contact');
    renderFooterSocials(contact.socialLinks || []);

    preloadItem();
});

let selectedSizeKey = null;

function openSizeModal(id) {
    const menu = GP.get('menu');
    const settings = GP.get('settings');
    const currency = settings.currency || '$';
    const item = menu.find(i => i.id === id);
    if (!item) return;

    if (!item.sizes || Object.keys(item.sizes).length === 0) {
        addToCart(id);
        return;
    }

    selectedSizeKey = null;
    document.getElementById('sizeModalTitle').textContent = item.name + ' — Select Size';

    const body = document.getElementById('sizeModalBody');
    body.innerHTML = `
        <div class="size-options" id="sizeOptions">
            ${Object.entries(item.sizes).map(([key, size]) => `
                <div class="size-option" data-size="${key}" onclick="selectSize('${key}', ${size.price}, this)">
                    <span class="size-option-label">${size.label}</span>
                    <span class="size-option-price">${currency}${Number(size.price).toFixed(2)}</span>
                </div>
            `).join('')}
        </div>
        <button class="size-modal-add" id="sizeAddBtn" disabled onclick="addSizeToCart(${item.id})">Select a Size</button>
    `;

    document.getElementById('sizeModalOverlay').classList.add('open');
}

function selectSize(key, price, el) {
    selectedSizeKey = key;
    document.querySelectorAll('.size-option').forEach(o => o.classList.remove('selected'));
    el.classList.add('selected');
    const settings = GP.get('settings');
    const currency = settings.currency || '$';
    const btn = document.getElementById('sizeAddBtn');
    btn.disabled = false;
    btn.textContent = 'Add to Cart — ' + currency + Number(price).toFixed(2);
    btn.dataset.price = price;
}

function closeSizeModal() {
    document.getElementById('sizeModalOverlay').classList.remove('open');
    selectedSizeKey = null;
}

function addSizeToCart(id) {
    if (!selectedSizeKey) return;
    const menu = GP.get('menu');
    const item = menu.find(i => i.id === id);
    if (!item || !item.sizes[selectedSizeKey]) return;

    const sizeInfo = item.sizes[selectedSizeKey];
    const cartItem = {
        id: item.id,
        name: item.name,
        price: sizeInfo.price,
        sizeKey: selectedSizeKey,
        sizeLabel: sizeInfo.label,
        qty: 1
    };

    const existing = cart.find(c => c.id === id && c.sizeKey === selectedSizeKey);
    if (existing) {
        existing.qty++;
    } else {
        cart.push(cartItem);
    }

    saveCart();
    closeSizeModal();
    flashBtn(id);
}
