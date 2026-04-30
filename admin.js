// ===== MENU DATA =====
let menuData = JSON.parse(localStorage.getItem('gp_menu')) || [
    { id: 1, name: "Truffle Burrata", price: 16.00, category: "starters", image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=400&q=80", desc: "Creamy burrata, black truffle shavings, heirloom tomatoes, basil oil." },
    { id: 2, name: "Golden Calamari", price: 14.50, category: "starters", image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=400&q=80", desc: "Lightly dusted, saffron aioli, micro herbs, chili flakes." },
    { id: 3, name: "Wagyu Carpaccio", price: 19.00, category: "starters", image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80", desc: "Thinly sliced wagyu, arugula, capers, truffle vinaigrette." },
    { id: 4, name: "Pan-Seared Scallops", price: 17.50, category: "starters", image: "https://images.unsplash.com/photo-1565680018450-e3b092343732?auto=format&fit=crop&w=400&q=80", desc: "Caramelized crust, cauliflower purée, brown butter, lemon zest." },
    { id: 5, name: "Wagyu Classic Burger", price: 18.50, category: "mains", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80", desc: "Premium wagyu, aged cheddar, truffle aioli, brioche bun." },
    { id: 6, name: "Black Truffle Risotto", price: 22.00, category: "mains", image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c1?auto=format&fit=crop&w=400&q=80", desc: "Arborio rice, porcini mushrooms, parmesan, shaved black truffle." },
    { id: 7, name: "Miso Glazed Salmon", price: 24.50, category: "mains", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a3a2749?auto=format&fit=crop&w=400&q=80", desc: "Wild-caught salmon, sweet miso glaze, bok choy, sesame crisp." },
    { id: 8, name: "Herb-Crusted Lamb", price: 28.00, category: "mains", image: "https://images.unsplash.com/photo-1558030006-4506719b7453?auto=format&fit=crop&w=400&q=80", desc: "New Zealand lamb, rosemary crust, mint pea purée." },
    { id: 9, name: "Lobster Thermidor", price: 34.00, category: "mains", image: "https://images.unsplash.com/photo-1565680018450-e3b092343732?auto=format&fit=crop&w=400&q=80", desc: "Whole lobster, brandy cream, gruyère gratin, seasonal greens." },
    { id: 10, name: "Velvet Berry Tart", price: 12.50, category: "desserts", image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=400&q=80", desc: "Shortcrust pastry, vanilla custard, seasonal berries, gold leaf." },
    { id: 11, name: "Dark Chocolate Fondant", price: 13.00, category: "desserts", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80", desc: "Molten center, sea salt ice cream, raspberry coulis." },
    { id: 12, name: "Tiramisu Classico", price: 11.50, category: "desserts", image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=400&q=80", desc: "Espresso ladyfingers, mascarpone cream, cocoa dust." },
    { id: 13, name: "Crème Brûlée", price: 10.00, category: "desserts", image: "https://images.unsplash.com/photo-1588647001133-29884489e44c?auto=format&fit=crop&w=400&q=80", desc: "Madagascar vanilla, caramelized sugar crust, fresh berries." },
    { id: 14, name: "Espresso Affogato", price: 8.00, category: "drinks", image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=400&q=80", desc: "Double shot espresso, vanilla gelato, dark chocolate shavings." },
    { id: 15, name: "Signature Old Fashioned", price: 15.00, category: "drinks", image: "https://images.unsplash.com/photo-1551024709-8f2704684235?auto=format&fit=crop&w=400&q=80", desc: "Bourbon, angostura bitters, orange zest, luxardo cherry." },
    { id: 16, name: "Rose Lychee Spritz", price: 12.00, category: "drinks", image: "https://images.unsplash.com/photo-1544145947-160989e08326?auto=format&fit=crop&w=400&q=80", desc: "Sparkling rosé, lychee purée, fresh mint, citrus twist." },
    { id: 17, name: "Matcha Zen Tonic", price: 10.50, category: "drinks", image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=400&q=80", desc: "Ceremonial matcha, yuzu, sparkling water, agave syrup." }
];

// ===== ORDERS DATA =====
let ordersData = JSON.parse(localStorage.getItem('gp_orders')) || [
    { id: 1001, customer: "James Mitchell", items: "Wagyu Burger, Truffle Risotto", total: 40.50, time: "12:34 PM", status: "new" },
    { id: 1002, customer: "Sophie Laurent", items: "Lobster Thermidor, Rose Lychee Spritz", total: 46.00, time: "12:51 PM", status: "preparing" },
    { id: 1003, customer: "Rajan Patel", items: "Herb-Crusted Lamb, Crème Brûlée", total: 38.00, time: "1:05 PM", status: "new" },
    { id: 1004, customer: "Emma Chen", items: "Truffle Burrata, Miso Salmon, Berry Tart", total: 53.00, time: "1:18 PM", status: "done" },
    { id: 1005, customer: "Carlos Rivera", items: "Golden Calamari, Old Fashioned", total: 29.50, time: "1:32 PM", status: "done" },
    { id: 1006, customer: "Yuki Tanaka", items: "Wagyu Carpaccio, Espresso Affogato", total: 27.00, time: "1:45 PM", status: "new" },
    { id: 1007, customer: "Nina Petrov", items: "Chocolate Fondant, Matcha Tonic", total: 23.50, time: "2:02 PM", status: "preparing" },
];

// ===== RESERVATIONS DATA =====
let reservationsData = JSON.parse(localStorage.getItem('gp_reservations')) || [
    { id: 1, guest: "William Foster", date: "2026-04-30", time: "7:00 PM", guests: 2, table: "T4", notes: "Anniversary dinner" },
    { id: 2, guest: "Amelia Stone", date: "2026-04-30", time: "8:00 PM", guests: 4, table: "T2", notes: "" },
    { id: 3, guest: "Marcus Lee", date: "2026-05-01", time: "7:30 PM", guests: 6, table: "T7", notes: "Birthday, cake requested" },
    { id: 4, guest: "Isabelle Dubois", date: "2026-05-01", time: "9:00 PM", guests: 2, table: "T1", notes: "Window seat preferred" },
    { id: 5, guest: "Omar Khalid", date: "2026-05-02", time: "6:30 PM", guests: 8, table: "T10", notes: "Corporate dinner" },
];

// ===== TEAM DATA =====
let teamData = JSON.parse(localStorage.getItem('gp_team')) || [
    { name: "Alessandro Rossi", role: "Executive Chef & Founder" },
    { name: "Elena Marquez", role: "Pastry Director" },
    { name: "Julian Vance", role: "Head Sommelier" },
];

// ===== STATE =====
let currentPage = 'dashboard';
let currentMenuFilter = 'all';
let currentOrderFilter = 'all';
let editingItemId = null;
let editingReservationId = null;
let currentImageData = null;

// ===== AUTH =====
function getCredentials() {
    return JSON.parse(localStorage.getItem('gp_admin_credentials')) || { username: 'admin', password: 'admin' };
}

function checkAuth() {
    if (sessionStorage.getItem('gp_logged_in') === 'true') {
        document.getElementById('loginScreen').style.display = 'none';
        document.getElementById('sidebar').style.display = '';
        document.getElementById('mainWrap').style.display = '';
        document.getElementById('mobileSidebarToggle').style.display = '';
        updateAdminUI();
        return true;
    }
    document.getElementById('loginScreen').style.display = 'flex';
    document.getElementById('sidebar').style.display = 'none';
    document.getElementById('mainWrap').style.display = 'none';
    document.getElementById('mobileSidebarToggle').style.display = 'none';
    return false;
}

function attemptLogin() {
    const user = document.getElementById('loginUser').value.trim();
    const pass = document.getElementById('loginPass').value;
    const creds = getCredentials();
    const errEl = document.getElementById('loginError');

    if (!user || !pass) { errEl.textContent = 'Please enter username and password'; return; }
    if (user !== creds.username || pass !== creds.password) { errEl.textContent = 'Invalid username or password'; return; }

    errEl.textContent = '';
    sessionStorage.setItem('gp_logged_in', 'true');
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('sidebar').style.display = '';
    document.getElementById('mainWrap').style.display = '';
    document.getElementById('mobileSidebarToggle').style.display = '';
    updateAdminUI();
    init();
}

function signOut() {
    sessionStorage.removeItem('gp_logged_in');
    document.getElementById('loginScreen').style.display = 'flex';
    document.getElementById('sidebar').style.display = 'none';
    document.getElementById('mainWrap').style.display = 'none';
    document.getElementById('mobileSidebarToggle').style.display = 'none';
    document.getElementById('loginUser').value = '';
    document.getElementById('loginPass').value = '';
    document.getElementById('loginError').textContent = '';
    showToast('Signed out successfully', 'fa-right-from-bracket');
}

function updateAdminUI() {
    const creds = getCredentials();
    const initial = creds.username.charAt(0).toUpperCase();
    document.getElementById('adminAvatar').textContent = initial;
    document.getElementById('adminName').textContent = creds.username;
    const cuEl = document.getElementById('currentUsername');
    if (cuEl) cuEl.value = creds.username;
}

document.getElementById('loginPass').addEventListener('keydown', e => { if (e.key === 'Enter') attemptLogin(); });
document.getElementById('loginUser').addEventListener('keydown', e => { if (e.key === 'Enter') document.getElementById('loginPass').focus(); });

// ===== ACCOUNT =====
function saveAccount() {
    const currentPass = document.getElementById('currentPassword').value;
    const newUser = document.getElementById('newUsername').value.trim();
    const newPass = document.getElementById('newPassword').value;
    const confirmPass = document.getElementById('confirmPassword').value;
    const creds = getCredentials();

    if (currentPass !== creds.password) { showToast('Current password is incorrect', 'fa-triangle-exclamation'); return; }
    if (!newUser && !newPass) { showToast('Enter a new username or password', 'fa-triangle-exclamation'); return; }
    if (newPass && newPass !== confirmPass) { showToast('Passwords do not match', 'fa-triangle-exclamation'); return; }
    if (newPass && newPass.length < 4) { showToast('Password must be at least 4 characters', 'fa-triangle-exclamation'); return; }

    const newCreds = {
        username: newUser || creds.username,
        password: newPass || creds.password
    };
    localStorage.setItem('gp_admin_credentials', JSON.stringify(newCreds));
    updateAdminUI();
    document.getElementById('newUsername').value = '';
    document.getElementById('newPassword').value = '';
    document.getElementById('confirmPassword').value = '';
    document.getElementById('currentPassword').value = '';
    showToast('Credentials updated successfully');
}

// ===== NAVIGATION =====
function goToPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    const pageEl = document.getElementById('page-' + page);
    if (pageEl) pageEl.classList.add('active');
    document.querySelector(`[data-page="${page}"]`)?.classList.add('active');
    document.getElementById('pageTitle').textContent = {
        dashboard: 'Dashboard', orders: 'Orders', menu: 'Menu Items',
        reservations: 'Reservations', images: 'Site Images', reviews: 'Reviews', hero: 'Hero Section', about: 'About / Story',
        contact: 'Contact Info', settings: 'Site Settings', account: 'Account'
    }[page] || page;
    currentPage = page;
    if (page === 'dashboard') renderDashboard();
    if (page === 'orders') renderOrders();
    if (page === 'menu') renderMenuAdmin();
    if (page === 'reservations') renderReservations();
    if (page === 'about') { renderTeamEditor(); loadAboutData(); }
    if (page === 'images') renderSiteImages();
    if (page === 'reviews') renderReviewsModeration();
    if (page === 'account') updateAdminUI();
    if (page === 'contact') renderSocialLinksEditor();
    document.getElementById('sidebar').classList.remove('open');
}

document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', e => {
        e.preventDefault();
        goToPage(item.dataset.page);
    });
});

// ===== MOBILE SIDEBAR =====
document.getElementById('mobileSidebarToggle').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('open');
});

document.getElementById('topbarMenuBtn')?.addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('open');
});

document.addEventListener('click', e => {
    const sidebar = document.getElementById('sidebar');
    const toggle = document.getElementById('mobileSidebarToggle');
    const topbarBtn = document.getElementById('topbarMenuBtn');
    if (sidebar.classList.contains('open') && !sidebar.contains(e.target) && !toggle.contains(e.target) && !topbarBtn.contains(e.target)) {
        sidebar.classList.remove('open');
    }
});

// ===== CLOCK =====
function updateClock() {
    const now = new Date();
    document.getElementById('clock').textContent = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
}
setInterval(updateClock, 1000);
updateClock();

// ===== TOAST =====
function showToast(msg, icon = 'fa-check-circle') {
    const t = document.getElementById('toast');
    t.innerHTML = `<i class="fa-solid ${icon}"></i> ${msg}`;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3000);
}

// ===== SAVE TO LOCALSTORAGE =====
function saveData() {
    localStorage.setItem('gp_menu', JSON.stringify(menuData));
    localStorage.setItem('gp_orders', JSON.stringify(ordersData));
    localStorage.setItem('gp_reservations', JSON.stringify(reservationsData));
    localStorage.setItem('gp_team', JSON.stringify(teamData));
}

// ===== DASHBOARD =====
function renderDashboard() {
    const newOrders = ordersData.filter(o => o.status === 'new').length;
    document.getElementById('ordersBadge').textContent = newOrders;
    document.getElementById('ordersBadge').style.display = newOrders > 0 ? 'inline-block' : 'none';

    // Recent orders table
    const recent = [...ordersData].slice(-5).reverse();
    document.getElementById('recentOrdersTable').innerHTML = recent.map(o => {
        const typeIcon = o.type === 'dinein' ? ' 🍽' : o.type === 'delivery' ? ' 🛵' : '';
        return `<tr style="cursor:pointer" onclick="goToPage('orders');setTimeout(()=>openOrderDetail(${o.id}),100)">
            <td><span style="color:var(--muted);font-size:0.75rem">#${o.id}</span></td>
            <td style="max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${o.customer || ''}${typeIcon}</td>
            <td style="color:#fff;font-weight:600">$${Number(o.total).toFixed(2)}</td>
            <td><span class="badge badge-${o.status}">${o.status}</span></td>
        </tr>`;
    }).join('');

    // Top items
    const counts = {};
    ordersData.forEach(o => {
        o.items.split(',').forEach(item => {
            const k = item.trim();
            counts[k] = (counts[k] || 0) + 1;
        });
    });
    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 5);
    const max = sorted[0]?.[1] || 1;

    document.getElementById('topItems').innerHTML = sorted.map(([name, count]) => {
        const item = menuData.find(i => i.name.toLowerCase().includes(name.toLowerCase().split(' ')[0]));
        return `
        <div class="top-item">
            ${item ? `<img class="top-item-img" src="${item.image}" onerror="this.style.display='none'" alt="">` : '<div class="top-item-img"></div>'}
            <div style="flex:1;min-width:0">
                <div class="top-item-name">${name}</div>
                <div class="top-item-orders">${count} orders</div>
            </div>
            <div class="top-item-bar-wrap"><div class="top-item-bar" style="width:${Math.round(count/max*100)}%"></div></div>
        </div>`;
    }).join('');

    // Update stat
    const todayRevenue = ordersData.filter(o => o.status !== 'cancelled').reduce((s, o) => s + Number(o.total), 0);
    document.getElementById('statRevenue').textContent = '$' + todayRevenue.toFixed(2);
    document.getElementById('statOrders').textContent = ordersData.length;
}

// ===== ORDERS =====
function renderOrders(filter) {
    if (filter) currentOrderFilter = filter;
    const data = currentOrderFilter === 'all' ? ordersData : ordersData.filter(o => o.status === currentOrderFilter);
    document.getElementById('ordersTable').innerHTML = data.length === 0
        ? `<tr><td colspan="7" style="text-align:center;color:var(--muted);padding:2rem">No orders found.</td></tr>`
        : data.map(o => {
            const typeIcon = o.type === 'dinein'
                ? `<span style="font-size:0.68rem;background:rgba(255,255,255,0.06);color:#aaa;padding:2px 6px;border-radius:4px;margin-left:4px">🍽 Dine-In</span>`
                : o.type === 'delivery'
                ? `<span style="font-size:0.68rem;background:rgba(34,197,94,0.1);color:#22c55e;padding:2px 6px;border-radius:4px;margin-left:4px">🛵 Delivery</span>`
                : '';
            return `<tr style="cursor:pointer" onclick="openOrderDetail(${o.id})">
            <td><strong style="color:#ccc">#${o.id}</strong></td>
            <td>${o.customer}${typeIcon}</td>
            <td style="max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:0.8rem;color:var(--muted)">${o.items}</td>
            <td style="color:#fff;font-weight:700">$${Number(o.total).toFixed(2)}</td>
            <td style="color:var(--muted);font-size:0.8rem">${o.time}</td>
            <td>
                <select class="badge badge-${o.status}" onchange="event.stopPropagation();updateOrderStatus(${o.id}, this.value)" onclick="event.stopPropagation()" style="background:transparent;border:none;cursor:pointer;font-family:inherit;font-size:0.68rem;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;color:inherit;padding:3px 6px">
                    <option value="new" ${o.status==='new'?'selected':''}>New</option>
                    <option value="preparing" ${o.status==='preparing'?'selected':''}>Preparing</option>
                    <option value="done" ${o.status==='done'?'selected':''}>Done</option>
                    <option value="cancelled" ${o.status==='cancelled'?'selected':''}>Cancelled</option>
                </select>
            </td>
            <td>
                <button class="danger-btn" onclick="event.stopPropagation();deleteOrder(${o.id})"><i class="fa-solid fa-trash"></i></button>
            </td>
        </tr>`;
        }).join('');
}

function openOrderDetail(id) {
    const o = ordersData.find(o => o.id === id);
    if (!o) return;

    const typeLabel = o.type === 'dinein' ? '🍽️ Dine-In' : o.type === 'delivery' ? '🛵 Delivery' : '📋 Order';
    const locationLabel = o.type === 'dinein' ? 'Table' : 'Address';

    let itemsHTML = '';
    if (o.itemsDetailed && Array.isArray(o.itemsDetailed)) {
        itemsHTML = o.itemsDetailed.map(i => `
            <div style="display:flex;justify-content:space-between;align-items:center;padding:0.55rem 0;border-bottom:1px solid rgba(255,255,255,0.06)">
                <span style="color:var(--text)">${i.name} <span style="color:#ccc;font-weight:600">×${i.qty}</span>${i.sizeLabel ? `<span style="font-size:0.7rem;background:rgba(255,255,255,0.1);color:#ccc;padding:2px 6px;border-radius:4px;margin-left:4px;font-weight:600">${i.sizeLabel}</span>` : ''}</span>
                <span style="color:var(--muted);font-size:0.85rem">$${(Number(i.price)*i.qty).toFixed(2)}</span>
            </div>`).join('');
    } else {
        itemsHTML = o.items.split(',').map(item => `
            <div style="padding:0.5rem 0;border-bottom:1px solid rgba(255,255,255,0.06);color:var(--text)">• ${item.trim()}</div>`).join('');
    }

    const bodyHTML = `
    <div style="display:flex;flex-direction:column;gap:1rem">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem">
            <div style="background:var(--bg);border:1px solid rgba(255,255,255,0.07);border-radius:10px;padding:0.9rem">
                <div style="font-size:0.68rem;text-transform:uppercase;letter-spacing:1px;color:var(--muted);margin-bottom:0.3rem">Order Type</div>
                <div style="font-weight:700;color:var(--text)">${typeLabel}</div>
            </div>
            <div style="background:var(--bg);border:1px solid rgba(255,255,255,0.07);border-radius:10px;padding:0.9rem">
                <div style="font-size:0.68rem;text-transform:uppercase;letter-spacing:1px;color:var(--muted);margin-bottom:0.3rem">Time</div>
                <div style="font-weight:700;color:var(--text)">${o.time}${o.date ? ' · ' + o.date : ''}</div>
            </div>
        </div>
        <div style="background:var(--bg);border:1px solid rgba(255,255,255,0.07);border-radius:10px;padding:0.9rem">
            <div style="font-size:0.68rem;text-transform:uppercase;letter-spacing:1px;color:var(--muted);margin-bottom:0.6rem">Customer Info</div>
            <div style="display:flex;flex-direction:column;gap:0.4rem">
                <div><span style="color:var(--muted);font-size:0.82rem">Name: </span><span style="color:var(--text);font-weight:600">${o.customer}</span></div>
                ${o.phone ? `<div><span style="color:var(--muted);font-size:0.82rem">Phone: </span><span style="color:var(--text);font-weight:600">${o.phone}</span></div>` : ''}
                ${o.location ? `<div><span style="color:var(--muted);font-size:0.82rem">${locationLabel}: </span><span style="color:var(--text);font-weight:600">${o.location}</span></div>` : ''}
            </div>
        </div>
        <div style="background:var(--bg);border:1px solid rgba(255,255,255,0.07);border-radius:10px;padding:0.9rem">
            <div style="font-size:0.68rem;text-transform:uppercase;letter-spacing:1px;color:var(--muted);margin-bottom:0.6rem">Items Ordered</div>
            ${itemsHTML}
            <div style="display:flex;justify-content:space-between;align-items:center;padding-top:0.75rem;margin-top:0.3rem;border-top:2px solid #666;font-weight:700">
                <span style="color:var(--text)">Total</span>
                <span style="color:#fff;font-size:1.1rem">$${Number(o.total).toFixed(2)}</span>
            </div>
        </div>
        <div style="display:grid;grid-template-columns:1fr auto;gap:0.6rem;align-items:flex-end">
            <div>
                <label style="font-size:0.75rem;color:var(--muted);display:block;margin-bottom:0.3rem">Update Status</label>
                <select id="detailStatusSelect" style="width:100%;background:var(--surface);border:1px solid rgba(255,255,255,0.1);border-radius:8px;padding:0.55rem;color:var(--text);font-family:inherit">
                    <option value="new" ${o.status==='new'?'selected':''}>🆕 New</option>
                    <option value="preparing" ${o.status==='preparing'?'selected':''}>🍳 Preparing</option>
                    <option value="done" ${o.status==='done'?'selected':''}>✅ Done</option>
                    <option value="cancelled" ${o.status==='cancelled'?'selected':''}>❌ Cancelled</option>
                </select>
            </div>
            <button onclick="updateOrderStatus(${o.id}, document.getElementById('detailStatusSelect').value); closeModal();" style="background:#fff;color:#000;border:none;border-radius:8px;padding:0.6rem 1rem;font-family:inherit;font-weight:700;cursor:pointer;white-space:nowrap">
                Save Status
            </button>
        </div>
    </div>
    <div class="modal-footer" style="margin-top:1rem">
        <button class="ghost-btn" onclick="closeModal()">Close</button>
        <button class="danger-btn" onclick="if(confirm('Delete this order?')){deleteOrder(${o.id});closeModal();}"><i class="fa-solid fa-trash"></i> Delete</button>
    </div>`;

    openModal('Order #' + o.id + ' — ' + o.customer, bodyHTML);
}

function updateOrderStatus(id, status) {
    const o = ordersData.find(o => o.id === id);
    if (o) { o.status = status; saveData(); renderOrders(); renderDashboard(); showToast('Order #' + id + ' updated to ' + status); }
}

function deleteOrder(id) {
    if (!confirm('Delete order #' + id + '?')) return;
    ordersData = ordersData.filter(o => o.id !== id);
    saveData(); renderOrders(); renderDashboard(); showToast('Order deleted', 'fa-trash');
}

function exportOrders() {
    const rows = [['ID','Customer','Items','Total','Time','Status']];
    ordersData.forEach(o => rows.push([o.id, o.customer, o.items, o.total, o.time, o.status]));
    const csv = rows.map(r => r.join(',')).join('\n');
    const a = document.createElement('a');
    a.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv);
    a.download = 'orders_' + new Date().toISOString().split('T')[0] + '.csv';
    a.click();
    showToast('Orders exported as CSV');
}

// ===== MENU ADMIN =====
function renderMenuAdmin(filter) {
    if (filter !== undefined) currentMenuFilter = filter;
    const data = currentMenuFilter === 'all' ? menuData : menuData.filter(i => i.category === currentMenuFilter);
    document.getElementById('menuAdminGrid').innerHTML = data.length === 0
        ? `<p style="color:var(--muted);padding:2rem">No items in this category.</p>`
        : data.map(item => {
            const hasSizes = item.sizes && Object.keys(item.sizes).length > 0;
            return `
        <div class="menu-admin-card">
            <div class="mac-img">
                <img src="${item.image}" alt="${item.name}" onerror="this.src='https://placehold.co/400x200/111/D4AF37?text=No+Image'" loading="lazy">
                <span class="mac-cat">${item.category}${hasSizes ? '<span class="size-badge">SIZES</span>' : ''}</span>
            </div>
            <div class="mac-body">
                <div class="mac-name">${item.name}</div>
                <div class="mac-desc">${item.desc}</div>
                <div class="mac-footer">
                    <span class="mac-price">$${Number(item.price).toFixed(2)}</span>
                    <div class="mac-actions">
                        <button class="icon-action-btn" onclick="openEditItemModal(${item.id})" title="Edit"><i class="fa-solid fa-pen"></i></button>
                        <button class="icon-action-btn" onclick="deleteMenuItem(${item.id})" title="Delete" style="color:var(--danger);border-color:rgba(239,68,68,0.3)"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </div>
            </div>
        </div>`;
        }).join('');
}

function deleteMenuItem(id) {
    if (!confirm('Delete this menu item?')) return;
    menuData = menuData.filter(i => i.id !== id);
    saveData(); renderMenuAdmin(); showToast('Item deleted', 'fa-trash');
}

// ===== RESERVATIONS =====
function renderReservations() {
    document.getElementById('reservationsTable').innerHTML = reservationsData.length === 0
        ? `<tr><td colspan="7" style="text-align:center;color:var(--muted);padding:2rem">No reservations.</td></tr>`
        : [...reservationsData].sort((a, b) => new Date(a.date) - new Date(b.date)).map(r => `
        <tr>
            <td><strong>${r.guest}</strong></td>
            <td>${formatDate(r.date)}</td>
            <td>${r.time}</td>
            <td>${r.guests}</td>
            <td><span style="background:rgba(255,255,255,0.08);color:#ccc;padding:3px 10px;border-radius:6px;font-size:0.78rem;font-weight:600">${r.table}</span></td>
            <td style="font-size:0.8rem;color:var(--muted)">${r.notes || '—'}</td>
            <td>
                <div style="display:flex;gap:0.4rem">
                    <button class="icon-action-btn" onclick="openEditReservationModal(${r.id})"><i class="fa-solid fa-pen"></i></button>
                    <button class="icon-action-btn" onclick="deleteReservation(${r.id})" style="color:var(--danger);border-color:rgba(239,68,68,0.3)"><i class="fa-solid fa-trash"></i></button>
                </div>
            </td>
        </tr>
    `).join('');
}

function formatDate(d) {
    return new Date(d + 'T12:00:00').toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
}

function deleteReservation(id) {
    if (!confirm('Delete this reservation?')) return;
    reservationsData = reservationsData.filter(r => r.id !== id);
    saveData(); renderReservations(); showToast('Reservation deleted', 'fa-trash');
}

// ===== MODAL =====
function openModal(title, bodyHTML) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalBody').innerHTML = bodyHTML;
    document.getElementById('modalOverlay').classList.add('open');
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('open');
    editingItemId = null;
    editingReservationId = null;
}

document.getElementById('modalOverlay').addEventListener('click', e => {
    if (e.target === document.getElementById('modalOverlay')) closeModal();
});

// ===== ADD / EDIT MENU ITEM =====
function menuItemForm(item = {}) {
    const hasSizes = item.sizes && Object.keys(item.sizes).length > 0;
    const sizeSmall = hasSizes ? item.sizes.small?.price || '' : '';
    const sizeMedium = hasSizes ? item.sizes.medium?.price || '' : '';
    const sizeLarge = hasSizes ? item.sizes.large?.price || '' : '';
    const ingredients = (item.ingredients || []).join(', ');
    const allergens = (item.allergens || []).join(', ');
    const extraImages = item.extraImages || [];
    const allergenOptions = ['dairy','gluten','egg','nuts','seafood','soy','sesame','alcohol'];

    return `
    <div class="modal-form-row">
        <div class="modal-form-group">
            <label>Item Name</label>
            <input type="text" id="mf_name" value="${item.name || ''}" placeholder="e.g. Truffle Burrata">
        </div>
        <div class="modal-form-group">
            <label>Base Price ($)</label>
            <input type="number" id="mf_price" step="0.50" value="${item.price || ''}" placeholder="0.00">
        </div>
    </div>
    <div class="modal-form-group">
        <label>Category</label>
        <select id="mf_category">
            ${['starters','mains','desserts','drinks'].map(c => `<option value="${c}" ${item.category===c?'selected':''}>${c.charAt(0).toUpperCase()+c.slice(1)}</option>`).join('')}
        </select>
    </div>
    <div class="modal-form-group">
        <label>Description</label>
        <textarea id="mf_desc" rows="2" placeholder="Short description...">${item.desc || ''}</textarea>
    </div>
    <div class="modal-form-group">
        <label>Item Image</label>
        <div class="image-upload-area" id="imageUploadArea" onclick="document.getElementById('mf_image_file').click()">
            <input type="file" id="mf_image_file" accept="image/*" style="display:none" onchange="handleImageUpload(this)">
            <div id="imageUploadPlaceholder">
                <i class="fa-solid fa-cloud-arrow-up"></i>
                <span>Click to upload image from gallery</span>
            </div>
            <img id="imagePreview" style="display:none;width:100%;height:100%;object-fit:cover;border-radius:8px">
            <button type="button" class="remove-image-btn" id="removeImageBtn" style="display:none" onclick="event.stopPropagation();removeImage()"><i class="fa-solid fa-xmark"></i></button>
        </div>
    </div>
    <div class="modal-form-group">
        <label>Ingredients (comma separated)</label>
        <textarea id="mf_ingredients" rows="2" placeholder="e.g. Burrata cheese, Black truffle, Heirloom tomatoes">${ingredients}</textarea>
    </div>
    <div class="modal-form-group">
        <label>Allergens (comma separated)</label>
        <input type="text" id="mf_allergens" value="${allergens}" placeholder="e.g. dairy, gluten, egg">
        <p style="font-size:0.7rem;color:var(--muted);margin-top:0.3rem">Options: ${allergenOptions.join(', ')}</p>
    </div>
    <div class="modal-form-group">
        <label>Extra Images (${extraImages.length})</label>
        <div id="extraImagesPreview" style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-bottom:0.5rem">
            ${extraImages.map((img, i) => `
                <div style="position:relative;width:70px;height:70px;border-radius:8px;overflow:hidden">
                    <img src="${img}" style="width:100%;height:100%;object-fit:cover">
                    <button onclick="removeExtraImage(${i})" style="position:absolute;top:2px;right:2px;width:18px;height:18px;border-radius:50%;background:rgba(0,0,0,0.7);color:#ef4444;border:none;cursor:pointer;font-size:0.6rem;display:flex;align-items:center;justify-content:center">&times;</button>
                </div>
            `).join('')}
        </div>
        <button type="button" class="ghost-btn" onclick="addExtraImage()" style="font-size:0.75rem;padding:0.35rem 0.8rem"><i class="fa-solid fa-plus"></i> Add Image</button>
    </div>
    <div class="modal-form-group">
        <label class="size-toggle-label">
            <input type="checkbox" id="mf_has_sizes" onchange="toggleSizeFields()" ${hasSizes?'checked':''}>
            Enable Size Options (Small / Medium / Large)
        </label>
    </div>
    <div id="sizeFieldsContainer" style="display:${hasSizes?'block':'none'}">
        <div class="size-field-row">
            <span class="size-label">Small</span>
            <input type="number" id="mf_price_small" step="0.50" placeholder="Price for small" value="${sizeSmall}">
        </div>
        <div class="size-field-row">
            <span class="size-label">Medium</span>
            <input type="number" id="mf_price_medium" step="0.50" placeholder="Price for medium" value="${sizeMedium}">
        </div>
        <div class="size-field-row">
            <span class="size-label">Large</span>
            <input type="number" id="mf_price_large" step="0.50" placeholder="Price for large" value="${sizeLarge}">
        </div>
    </div>
    <div class="modal-footer">
        <button class="ghost-btn" onclick="closeModal()">Cancel</button>
        <button class="gold-btn" onclick="saveMenuItem()"><i class="fa-solid fa-floppy-disk"></i> Save Item</button>
    </div>`;
}

function openAddItemModal() {
    editingItemId = null;
    currentImageData = null;
    openModal('Add Menu Item', menuItemForm());
}

function openEditItemModal(id) {
    editingItemId = id;
    currentImageData = null;
    const item = menuData.find(i => i.id === id);
    openModal('Edit: ' + item.name, menuItemForm(item));
    if (item.image) {
        setTimeout(() => {
            const preview = document.getElementById('imagePreview');
            const placeholder = document.getElementById('imageUploadPlaceholder');
            const removeBtn = document.getElementById('removeImageBtn');
            if (preview) {
                preview.src = item.image;
                preview.style.display = 'block';
                placeholder.style.display = 'none';
                removeBtn.style.display = 'block';
                currentImageData = item.image;
            }
        }, 50);
    }
}

function handleImageUpload(input) {
    const file = input.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        currentImageData = e.target.result;
        const preview = document.getElementById('imagePreview');
        const placeholder = document.getElementById('imageUploadPlaceholder');
        const removeBtn = document.getElementById('removeImageBtn');
        preview.src = currentImageData;
        preview.style.display = 'block';
        placeholder.style.display = 'none';
        removeBtn.style.display = 'block';
    };
    reader.readAsDataURL(file);
}

function removeImage() {
    currentImageData = null;
    const preview = document.getElementById('imagePreview');
    const placeholder = document.getElementById('imageUploadPlaceholder');
    const removeBtn = document.getElementById('removeImageBtn');
    const fileInput = document.getElementById('mf_image_file');
    preview.style.display = 'none';
    preview.src = '';
    placeholder.style.display = 'block';
    removeBtn.style.display = 'none';
    fileInput.value = '';
}

function toggleSizeFields() {
    const container = document.getElementById('sizeFieldsContainer');
    const checked = document.getElementById('mf_has_sizes').checked;
    container.style.display = checked ? 'block' : 'none';
}

function saveMenuItem() {
    const name = document.getElementById('mf_name').value.trim();
    const price = parseFloat(document.getElementById('mf_price').value);
    const category = document.getElementById('mf_category').value;
    const desc = document.getElementById('mf_desc').value.trim();
    const hasSizes = document.getElementById('mf_has_sizes').checked;
    const image = currentImageData || '';

    const ingredients = document.getElementById('mf_ingredients').value.split(',').map(s => s.trim()).filter(Boolean);
    const allergens = document.getElementById('mf_allergens').value.split(',').map(s => s.trim().toLowerCase()).filter(Boolean);

    if (!name || isNaN(price)) { showToast('Please fill all required fields', 'fa-triangle-exclamation'); return; }

    let sizes = {};
    if (hasSizes) {
        const smallPrice = parseFloat(document.getElementById('mf_price_small').value);
        const mediumPrice = parseFloat(document.getElementById('mf_price_medium').value);
        const largePrice = parseFloat(document.getElementById('mf_price_large').value);
        if (isNaN(smallPrice) || isNaN(mediumPrice) || isNaN(largePrice)) {
            showToast('Please fill all size prices', 'fa-triangle-exclamation'); return;
        }
        sizes = {
            small: { label: 'Small', price: smallPrice },
            medium: { label: 'Medium', price: mediumPrice },
            large: { label: 'Large', price: largePrice }
        };
    }

    if (editingItemId) {
        const item = menuData.find(i => i.id === editingItemId);
        Object.assign(item, { name, price, category, desc, image, sizes, ingredients, allergens, extraImages: item.extraImages || [] });
        showToast('Item updated successfully');
    } else {
        const newId = Math.max(...menuData.map(i => i.id), 0) + 1;
        menuData.push({ id: newId, name, price, category, desc, image, sizes, ingredients, allergens, extraImages: [] });
        showToast('Item added successfully');
    }
    saveData(); renderMenuAdmin(); closeModal();
    currentImageData = null;
}

// ===== EXTRA IMAGES =====
function getEditingItemExtraImages() {
    if (editingItemId) {
        const item = menuData.find(i => i.id === editingItemId);
        return item ? (item.extraImages || []) : [];
    }
    return [];
}

function addExtraImage() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = function () {
        const file = input.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = function (e) {
            if (editingItemId) {
                const item = menuData.find(i => i.id === editingItemId);
                if (!item.extraImages) item.extraImages = [];
                item.extraImages.push(e.target.result);
                saveData();
            }
            renderExtraImagesPreview();
            showToast('Extra image added');
        };
        reader.readAsDataURL(file);
    };
    input.click();
}

function removeExtraImage(index) {
    if (editingItemId) {
        const item = menuData.find(i => i.id === editingItemId);
        item.extraImages.splice(index, 1);
        saveData();
    }
    renderExtraImagesPreview();
    showToast('Image removed', 'fa-trash');
}

function renderExtraImagesPreview() {
    const images = getEditingItemExtraImages();
    const container = document.getElementById('extraImagesPreview');
    if (!container) return;
    container.innerHTML = images.map((img, i) => `
        <div style="position:relative;width:70px;height:70px;border-radius:8px;overflow:hidden">
            <img src="${img}" style="width:100%;height:100%;object-fit:cover">
            <button onclick="removeExtraImage(${i})" style="position:absolute;top:2px;right:2px;width:18px;height:18px;border-radius:50%;background:rgba(0,0,0,0.7);color:#ef4444;border:none;cursor:pointer;font-size:0.6rem;display:flex;align-items:center;justify-content:center">&times;</button>
        </div>
    `).join('');
}

// ===== ADD / EDIT RESERVATION =====
function reservationForm(r = {}) {
    return `
    <div class="modal-form-row">
        <div class="modal-form-group">
            <label>Guest Name</label>
            <input type="text" id="rf_guest" value="${r.guest || ''}" placeholder="Full name">
        </div>
        <div class="modal-form-group">
            <label>Number of Guests</label>
            <input type="number" id="rf_guests" value="${r.guests || 2}" min="1" max="20">
        </div>
    </div>
    <div class="modal-form-row">
        <div class="modal-form-group">
            <label>Date</label>
            <input type="date" id="rf_date" value="${r.date || ''}">
        </div>
        <div class="modal-form-group">
            <label>Time</label>
            <input type="text" id="rf_time" value="${r.time || ''}" placeholder="e.g. 7:30 PM">
        </div>
    </div>
    <div class="modal-form-row">
        <div class="modal-form-group">
            <label>Table</label>
            <input type="text" id="rf_table" value="${r.table || ''}" placeholder="e.g. T4">
        </div>
        <div class="modal-form-group">
            <label>Special Notes</label>
            <input type="text" id="rf_notes" value="${r.notes || ''}" placeholder="e.g. Anniversary">
        </div>
    </div>
    <div class="modal-footer">
        <button class="ghost-btn" onclick="closeModal()">Cancel</button>
        <button class="gold-btn" onclick="saveReservation()"><i class="fa-solid fa-floppy-disk"></i> Save</button>
    </div>`;
}

function openAddReservationModal() {
    editingReservationId = null;
    openModal('Add Reservation', reservationForm());
}

function openEditReservationModal(id) {
    editingReservationId = id;
    const r = reservationsData.find(r => r.id === id);
    openModal('Edit Reservation', reservationForm(r));
}

function saveReservation() {
    const guest = document.getElementById('rf_guest').value.trim();
    const guests = parseInt(document.getElementById('rf_guests').value);
    const date = document.getElementById('rf_date').value;
    const time = document.getElementById('rf_time').value.trim();
    const table = document.getElementById('rf_table').value.trim();
    const notes = document.getElementById('rf_notes').value.trim();

    if (!guest || !date || !time || !table) { showToast('Please fill all required fields', 'fa-triangle-exclamation'); return; }

    if (editingReservationId) {
        const r = reservationsData.find(r => r.id === editingReservationId);
        Object.assign(r, { guest, guests, date, time, table, notes });
        showToast('Reservation updated');
    } else {
        const newId = Math.max(...reservationsData.map(r => r.id), 0) + 1;
        reservationsData.push({ id: newId, guest, guests, date, time, table, notes });
        showToast('Reservation added');
    }
    saveData(); renderReservations(); closeModal();
}

// ===== HERO =====
function updateHeroPreview() {
    const heading = document.getElementById('heroHeading')?.value || '';
    const highlight = document.getElementById('heroHighlight')?.value || '';
    const desc = document.getElementById('heroDesc')?.value || '';
    const btnText = document.getElementById('heroBtnText')?.value || '';

    let displayHeading = heading;
    if (highlight && heading.includes(highlight)) {
        displayHeading = heading.replace(highlight, `<span>${highlight}</span>`);
    }
    const preview = document.getElementById('heroPreview');
    if (preview) {
        preview.querySelector('h2').innerHTML = displayHeading;
        preview.querySelector('p').textContent = desc;
        preview.querySelector('button').textContent = btnText;
    }
}

document.addEventListener('input', e => {
    if (['heroHeading','heroHighlight','heroDesc','heroBtnText'].includes(e.target.id)) {
        updateHeroPreview();
    }
});

function saveHero() {
    const hero = {
        heading: document.getElementById('heroHeading').value,
        highlight: document.getElementById('heroHighlight').value,
        desc: document.getElementById('heroDesc').value,
        btnText: document.getElementById('heroBtnText').value,
        btnLink: document.getElementById('heroBtnLink').value,
    };
    localStorage.setItem('gp_hero', JSON.stringify(hero));
    showToast('Hero section saved');
}

// ===== ABOUT =====
function renderTeamEditor() {
    document.getElementById('teamList').innerHTML = teamData.map((m, i) => `
        <div class="team-member-row">
            <input type="text" value="${m.name}" placeholder="Name" onchange="teamData[${i}].name=this.value">
            <input type="text" value="${m.role}" placeholder="Role / Title" onchange="teamData[${i}].role=this.value">
            <div class="team-img-mini" onclick="uploadTeamImage(${i})">
                ${m.img ? `<img src="${m.img}" alt="${m.name}">` : '<i class="fa-solid fa-camera"></i>'}
            </div>
            <button class="danger-btn" onclick="removeTeamMember(${i})"><i class="fa-solid fa-trash"></i></button>
        </div>
    `).join('');
}

function uploadTeamImage(i) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = function () {
        const file = input.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = function (e) {
            teamData[i].img = e.target.result;
            saveData();
            renderTeamEditor();
            showToast('Team image updated');
        };
        reader.readAsDataURL(file);
    };
    input.click();
}

function addTeamMember() {
    teamData.push({ name: '', role: '', img: '' });
    renderTeamEditor();
    saveData();
    showToast('Team member added');
}

function removeTeamMember(i) {
    teamData.splice(i, 1);
    saveData(); renderTeamEditor(); showToast('Removed', 'fa-trash');
}

function syncTeamData() {
    const rows = document.querySelectorAll('.team-member-row');
    rows.forEach((row, i) => {
        const inputs = row.querySelectorAll('input');
        if (inputs[0]) teamData[i].name = inputs[0].value;
        if (inputs[1]) teamData[i].role = inputs[1].value;
    });
}

function loadAboutData() {
    const saved = localStorage.getItem('gp_about');
    if (!saved) return;
    try {
        const about = JSON.parse(saved);
        if (about.title) document.getElementById('aboutTitle').value = about.title;
        if (about.story) document.getElementById('aboutStory').value = about.story;
        if (about.year) document.getElementById('aboutYear').value = about.year;
        if (about.guests) document.getElementById('aboutGuests').value = about.guests;
        if (about.awards) document.getElementById('aboutAwards').value = about.awards;
        if (about.satisfaction) document.getElementById('aboutSatisfaction').value = about.satisfaction;
    } catch(e) {}
}

function saveAbout() {
    syncTeamData();
    const about = {
        title: document.getElementById('aboutTitle').value,
        story: document.getElementById('aboutStory').value,
        year: document.getElementById('aboutYear').value,
        guests: document.getElementById('aboutGuests').value,
        awards: document.getElementById('aboutAwards').value,
        satisfaction: document.getElementById('aboutSatisfaction').value,
    };
    localStorage.setItem('gp_about', JSON.stringify(about));
    saveData();
    showToast('About page saved');
}

// ===== SOCIAL LINKS =====
function getSocialLinks() {
    const contact = GP.get('contact');
    return contact.socialLinks || [];
}

function detectSocialIcon(url) {
    if (!url) return 'fa-solid fa-link';
    const u = url.toLowerCase();
    if (u.includes('instagram.com') || u.includes('instagr.am')) return 'fa-brands fa-instagram';
    if (u.includes('facebook.com') || u.includes('fb.com') || u.includes('fb.me')) return 'fa-brands fa-facebook-f';
    if (u.includes('twitter.com') || u.includes('x.com')) return 'fa-brands fa-x-twitter';
    if (u.includes('tiktok.com')) return 'fa-brands fa-tiktok';
    if (u.includes('youtube.com') || u.includes('youtu.be')) return 'fa-brands fa-youtube';
    if (u.includes('snapchat.com')) return 'fa-brands fa-snapchat';
    if (u.includes('pinterest.com') || u.includes('pin.it')) return 'fa-brands fa-pinterest-p';
    if (u.includes('linkedin.com')) return 'fa-brands fa-linkedin-in';
    if (u.includes('wa.me') || u.includes('whatsapp.com')) return 'fa-brands fa-whatsapp';
    if (u.includes('threads.net')) return 'fa-brands fa-threads';
    if (u.includes('t.me') || u.includes('telegram.org')) return 'fa-brands fa-telegram';
    return 'fa-solid fa-link';
}

function renderSocialLinksEditor() {
    const links = getSocialLinks();
    document.getElementById('socialLinksEditor').innerHTML = links.length === 0
        ? '<p style="color:var(--muted);font-size:0.8rem;padding:0.8rem;background:var(--card2);border:1px solid var(--border2);border-radius:8px">No social links added yet.</p>'
        : links.map((link, i) => `
        <div class="social-link-row">
            <span class="social-link-icon"><i class="${detectSocialIcon(link.url)}"></i></span>
            <input type="url" value="${link.url}" placeholder="https://..." onchange="updateSocialLink(${i}, this.value)">
            <button class="danger-btn" onclick="removeSocialLink(${i})"><i class="fa-solid fa-trash"></i></button>
        </div>
    `).join('');
}

function addSocialLink() {
    const contact = GP.get('contact');
    if (!contact.socialLinks) contact.socialLinks = [];
    contact.socialLinks.push({ url: '' });
    GP.set('contact', contact);
    renderSocialLinksEditor();
    showToast('Link added');
}

function updateSocialLink(i, url) {
    const contact = GP.get('contact');
    contact.socialLinks[i].url = url;
    GP.set('contact', contact);
    renderSocialLinksEditor();
}

function removeSocialLink(i) {
    const contact = GP.get('contact');
    contact.socialLinks.splice(i, 1);
    GP.set('contact', contact);
    renderSocialLinksEditor();
    showToast('Link removed', 'fa-trash');
}

// ===== CONTACT =====
function saveContact() {
    const contact = {
        address: document.getElementById('contactAddress').value,
        phone: document.getElementById('contactPhone').value,
        email: document.getElementById('contactEmail').value,
        whatsapp: document.getElementById('contactWhatsapp').value,
        hoursWeek: document.getElementById('contactHoursWeek').value,
        hoursWeekend: document.getElementById('contactHoursWeekend').value,
        map: document.getElementById('contactMap').value,
        socialLinks: getSocialLinks(),
    };
    GP.set('contact', contact);
    showToast('Contact info saved');
}

// ===== SETTINGS =====
function saveSettings() {
    const settings = {
        name: document.getElementById('siteName').value,
        tagline: document.getElementById('siteTagline').value,
        currency: document.getElementById('siteCurrency').value,
        gold: document.getElementById('siteGold').value,
        ordering: document.getElementById('toggleOrdering').checked,
        reservations: document.getElementById('toggleReservations').checked,
        whatsapp: document.getElementById('toggleWhatsapp').checked,
        maintenance: document.getElementById('toggleMaintenance').checked,
    };
    localStorage.setItem('gp_settings', JSON.stringify(settings));
    document.documentElement.style.setProperty('--gold', settings.gold);
    showToast('Settings saved');
}

// Load saved gold color
const savedSettings = JSON.parse(localStorage.getItem('gp_settings') || '{}');
if (savedSettings.gold) document.documentElement.style.setProperty('--gold', savedSettings.gold);

// ===== FILTER TABS =====
document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', function () {
        const section = this.closest('section');
        section.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        const filter = this.dataset.filter;
        if (section.id === 'page-menu') renderMenuAdmin(filter);
        if (section.id === 'page-orders') renderOrders(filter);
    });
});

// ===== SITE IMAGES =====
const SITE_IMAGE_KEYS = [
    'hero-bg', 'about-story', 'about-chef',
    'testimonial-1', 'testimonial-2', 'testimonial-3',
    'gallery-1', 'gallery-2', 'gallery-3', 'gallery-4',
    'contact-hero'
];

function getSiteImage(key) {
    return localStorage.getItem('gp_site_img_' + key) || '';
}

function setSiteImage(key, dataUrl) {
    localStorage.setItem('gp_site_img_' + key, dataUrl);
}

function renderSiteImages() {
    SITE_IMAGE_KEYS.forEach(key => {
        const data = getSiteImage(key);
        const preview = document.getElementById('img-' + key + '-preview');
        const placeholder = document.getElementById('img-' + key + '-placeholder');
        if (preview) {
            if (data) {
                preview.src = data;
                preview.style.display = 'block';
                if (placeholder) placeholder.style.display = 'none';
            } else {
                preview.style.display = 'none';
                if (placeholder) placeholder.style.display = 'flex';
            }
        }
    });
}

function changeSiteImage(key) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = function () {
        const file = input.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = function (e) {
            setSiteImage(key, e.target.result);
            renderSiteImages();
            showToast('Image updated: ' + key.replace(/-/g, ' '));
        };
        reader.readAsDataURL(file);
    };
    input.click();
}

// ===== REVIEWS MODERATION =====
let currentReviewFilter = 'pending';

function getReviews() {
    return JSON.parse(localStorage.getItem('gp_reviews') || '[]');
}

function saveReviews(reviews) {
    localStorage.setItem('gp_reviews', JSON.stringify(reviews));
}

function updateReviewsBadge() {
    const reviews = getReviews();
    const pending = reviews.filter(r => r.status === 'pending').length;
    const badge = document.getElementById('reviewsBadge');
    if (badge) {
        badge.textContent = pending;
        badge.style.display = pending > 0 ? 'inline-block' : 'none';
    }
}

function renderReviewsModeration(filter) {
    if (filter) currentReviewFilter = filter;
    const reviews = getReviews();
    const filtered = reviews.filter(r => r.status === currentReviewFilter).sort((a, b) => new Date(b.date) - new Date(a.date));
    const menu = GP.get('menu');
    const container = document.getElementById('reviewsList');

    updateReviewsBadge();

    if (filtered.length === 0) {
        container.innerHTML = `<p style="color:var(--muted);text-align:center;padding:2.5rem">No ${currentReviewFilter} reviews.</p>`;
        return;
    }

    container.innerHTML = filtered.map((r, i) => {
        const item = menu.find(m => m.id === r.itemId);
        const stars = '★'.repeat(r.rating) + '☆'.repeat(5 - r.rating);
        const date = new Date(r.date + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
        return `
        <div style="background:var(--card2);border:1px solid var(--border2);border-radius:10px;padding:1.2rem;margin-bottom:0.75rem">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:0.6rem">
                <div>
                    <span style="font-weight:600;font-size:0.9rem;color:var(--text)">${r.name}</span>
                    <span style="color:var(--gold);font-size:0.75rem;margin-left:0.5rem">${stars}</span>
                    <span style="color:var(--muted);font-size:0.7rem;margin-left:0.5rem">${date}</span>
                </div>
                <span class="badge badge-${r.status === 'approved' ? 'done' : r.status === 'rejected' ? 'cancelled' : 'new'}">${r.status}</span>
            </div>
            ${item ? `<p style="font-size:0.75rem;color:var(--gold);margin-bottom:0.5rem">→ ${item.name}</p>` : ''}
            <p style="color:var(--text-muted);font-size:0.85rem;line-height:1.6;margin-bottom:0.8rem">${r.text}</p>
            <div style="display:flex;gap:0.4rem">
                ${r.status === 'pending' ? `
                    <button class="gold-btn" style="padding:0.4rem 0.9rem;font-size:0.78rem" onclick="approveReview(${r.id})"><i class="fa-solid fa-check"></i> Approve</button>
                    <button class="danger-btn" style="padding:0.4rem 0.9rem;font-size:0.78rem" onclick="rejectReview(${r.id})"><i class="fa-solid fa-xmark"></i> Reject</button>
                ` : `
                    <button class="ghost-btn" style="padding:0.4rem 0.9rem;font-size:0.78rem" onclick="unapproveReview(${r.id})">
                        ${r.status === 'approved' ? '<i class="fa-solid fa-rotate-left"></i> Revert' : '<i class="fa-solid fa-rotate-left"></i> Reconsider'}
                    </button>
                `}
                <button class="danger-btn" style="padding:0.4rem 0.9rem;font-size:0.78rem" onclick="deleteReview(${r.id})"><i class="fa-solid fa-trash"></i></button>
            </div>
        </div>`;
    }).join('');

    // Update filter tabs
    document.querySelectorAll('[data-review-filter]').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.reviewFilter === currentReviewFilter);
    });
}

function approveReview(id) {
    const reviews = getReviews();
    const r = reviews.find(r => r.id === id);
    if (r) { r.status = 'approved'; saveReviews(reviews); renderReviewsModeration(); showToast('Review approved'); }
}

function rejectReview(id) {
    const reviews = getReviews();
    const r = reviews.find(r => r.id === id);
    if (r) { r.status = 'rejected'; saveReviews(reviews); renderReviewsModeration(); showToast('Review rejected', 'fa-xmark'); }
}

function unapproveReview(id) {
    const reviews = getReviews();
    const r = reviews.find(r => r.id === id);
    if (r) { r.status = 'pending'; saveReviews(reviews); renderReviewsModeration(); showToast('Review reverted'); }
}

function deleteReview(id) {
    if (!confirm('Delete this review permanently?')) return;
    let reviews = getReviews().filter(r => r.id !== id);
    saveReviews(reviews);
    renderReviewsModeration();
    showToast('Review deleted', 'fa-trash');
}

function approveAllPending() {
    const reviews = getReviews();
    const pending = reviews.filter(r => r.status === 'pending');
    if (pending.length === 0) { showToast('No pending reviews', 'fa-triangle-exclamation'); return; }
    if (!confirm(`Approve ${pending.length} pending reviews?`)) return;
    pending.forEach(r => r.status = 'approved');
    saveReviews(reviews);
    renderReviewsModeration();
    showToast(`${pending.length} reviews approved`);
}

function rejectAllPending() {
    const reviews = getReviews();
    const pending = reviews.filter(r => r.status === 'pending');
    if (pending.length === 0) { showToast('No pending reviews', 'fa-triangle-exclamation'); return; }
    if (!confirm(`Reject ${pending.length} pending reviews?`)) return;
    pending.forEach(r => r.status = 'rejected');
    saveReviews(reviews);
    renderReviewsModeration();
    showToast(`${pending.length} reviews rejected`, 'fa-xmark');
}

// Review filter tabs
document.addEventListener('click', e => {
    if (e.target.matches('[data-review-filter]')) {
        renderReviewsModeration(e.target.dataset.reviewFilter);
    }
});

// ===== INIT =====
function init() {
    renderDashboard();
    renderOrders();
    renderMenuAdmin();
    renderReservations();
    renderTeamEditor();
    renderSiteImages();
    renderSocialLinksEditor();
    renderReviewsModeration();
    updateReviewsBadge();
}

if (checkAuth()) {
    init();
}
