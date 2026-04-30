
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const itemId = parseInt(params.get('id'));
    const menu = GP.get('menu');
    const item = menu.find(i => i.id === itemId);

    if (!item) {
        document.querySelector('.detail-layout').innerHTML = '<div style="text-align:center;padding:4rem"><h2 style="color:var(--text)">Item not found</h2><a href="menu.html" style="color:var(--gold)">Back to Menu</a></div>';
        return;
    }

    document.title = item.name + ' | The Golden Plate';
    document.getElementById('detailName').textContent = item.name;
    document.getElementById('detailCat').textContent = item.category;
    document.getElementById('detailDesc').textContent = item.desc || '';
    document.getElementById('pageTitle').textContent = item.name;

    const settings = GP.get('settings');
    const currency = settings.currency || '$';

    // Price
    const hasSizes = item.sizes && Object.keys(item.sizes).length > 0;
    if (hasSizes) {
        document.getElementById('detailPriceRange').textContent = `${currency}${Number(item.sizes.small.price).toFixed(2)} – ${currency}${Number(item.sizes.large.price).toFixed(2)}`;
        document.getElementById('detailPrice').textContent = 'Select size at checkout';
        document.getElementById('detailAddBtn').onclick = () => window.location.href = `menu.html?item=${item.id}`;
    } else {
        document.getElementById('detailPrice').textContent = `${currency}${Number(item.price).toFixed(2)}`;
        document.getElementById('detailPriceRange').textContent = '';
        document.getElementById('detailAddBtn').onclick = () => addToCart(item.id);
    }

    // Gallery
    const gallery = document.getElementById('detailGallery');
    const images = [item.image, ...(item.extraImages || [])];
    if (images.length === 1) {
        gallery.innerHTML = `<div class="detail-gallery-main"><img src="${images[0]}" alt="${item.name}" loading="lazy"></div>`;
    } else {
        gallery.innerHTML = `
            <div class="detail-gallery-main"><img id="mainGalleryImg" src="${images[0]}" alt="${item.name}" loading="lazy"></div>
            ${images.slice(1).map((img, i) => `<div class="detail-gallery-thumb" onclick="document.getElementById('mainGalleryImg').src='${img}'"><img src="${img}" alt="View ${i+1}" loading="lazy"></div>`).join('')}
        `;
    }

    // Ingredients
    const ingEl = document.getElementById('detailIngredients');
    if (item.ingredients && item.ingredients.length > 0) {
        ingEl.innerHTML = item.ingredients.map(ing => `<span class="ingredient-tag">${ing}</span>`).join('');
    } else {
        ingEl.innerHTML = '<span style="color:var(--text-muted);font-size:0.85rem">No ingredients listed</span>';
    }

    // Allergens
    const allEl = document.getElementById('detailAllergens');
    const allergenLabels = {dairy:'Dairy',gluten:'Gluten',egg:'Egg',nuts:'Nuts',seafood:'Seafood',soy:'Soy',sesame:'Sesame',alcohol:'Contains Alcohol'};
    if (item.allergens && item.allergens.length > 0) {
        allEl.innerHTML = item.allergens.map(a => `<span class="allergen-tag">${allergenLabels[a] || a}</span>`).join('');
    } else {
        allEl.innerHTML = '<span style="color:var(--text-muted);font-size:0.85rem">No known allergens</span>';
    }

    // Reviews
    renderItemReviews(item.id);

    // Socials
    const contact = GP.get('contact');
    renderFooterSocials(contact.socialLinks || []);
});

function submitReview() {
    const params = new URLSearchParams(window.location.search);
    const itemId = parseInt(params.get('id'));
    const name = document.getElementById('reviewName').value.trim();
    const rating = parseInt(document.getElementById('reviewRating').value);
    const text = document.getElementById('reviewText').value.trim();

    if (!name || !text) { alert('Please fill in your name and review.'); return; }

    const reviews = JSON.parse(localStorage.getItem('gp_reviews') || '[]');
    reviews.push({ id: Date.now(), itemId, name, rating, text, date: new Date().toISOString().split('T')[0], status: 'pending' });
    localStorage.setItem('gp_reviews', JSON.stringify(reviews));

    document.getElementById('reviewName').value = '';
    document.getElementById('reviewText').value = '';
    document.getElementById('reviewForm').style.display = 'none';
    document.querySelector('.write-review-link').style.display = '';
    alert('Thank you! Your review will be visible after admin approval.');
}

function renderItemReviews(itemId) {
    const reviews = JSON.parse(localStorage.getItem('gp_reviews') || '[]');
    const approved = reviews.filter(r => r.itemId === itemId && r.status === 'approved').sort((a, b) => new Date(b.date) - new Date(a.date));

    const countEl = document.getElementById('detailReviewCount');
    const listEl = document.getElementById('detailReviews');

    if (approved.length === 0) {
        countEl.textContent = '';
        listEl.innerHTML = '<div class="no-reviews">No reviews yet. Be the first!</div>';
    } else {
        countEl.textContent = `(${approved.length})`;
        listEl.innerHTML = approved.map(r => {
            const stars = '★'.repeat(r.rating) + '☆'.repeat(5 - r.rating);
            const date = new Date(r.date + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
            return `
            <div class="detail-review">
                <div class="detail-review-header">
                    <div class="detail-review-name">${r.name}</div>
                    <div class="detail-review-stars">${stars}</div>
                    <div class="detail-review-date">${date}</div>
                </div>
                <div class="detail-review-text">${r.text}</div>
            </div>`;
        }).join('');
    }
}
