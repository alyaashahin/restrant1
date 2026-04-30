
document.addEventListener('DOMContentLoaded', () => {
    const contactHero = GP.getSiteImage('contact-hero');
    if (contactHero) document.querySelector('.hero.hero-sm').style.backgroundImage = `url('${contactHero}')`;

    const contact = GP.get('contact');

    document.getElementById('contactAddress').textContent = contact.address;

    const phoneLink = document.getElementById('contactPhoneLink');
    phoneLink.textContent = contact.phone;
    phoneLink.href = 'tel:' + contact.phone.replace(/\D/g,'');

    const emailLink = document.getElementById('contactEmailLink');
    emailLink.textContent = contact.email;
    emailLink.href = 'mailto:' + contact.email;

    const waLink = document.getElementById('contactWaLink');
    waLink.href = 'https://wa.me/' + (contact.whatsapp || '1234567890');

    document.getElementById('hoursWeek').textContent = contact.hoursWeek;
    document.getElementById('hoursWeekend').textContent = contact.hoursWeekend;

    // Map
    if (contact.map) {
        const mapFrame = document.getElementById('mapFrame');
        if (mapFrame) mapFrame.src = contact.map;
    }

    // Footer socials
    renderFooterSocials(contact.socialLinks || []);

    // Min date for reservation
    const today = new Date().toISOString().split('T')[0];
    const resDate = document.getElementById('resDate');
    if (resDate) resDate.min = today;
});

function submitForm(e) {
    e.preventDefault();
    const btn = e.target.querySelector('.submit-btn');
    btn.textContent = 'Processing...';
    btn.disabled = true;
    setTimeout(() => {
        btn.innerHTML = 'Confirm Reservation <i class="fa-solid fa-arrow-right" style="margin-left:0.4rem"></i>';
        btn.disabled = false;
        e.target.reset();
        const success = document.getElementById('formSuccess');
        success.classList.add('show');
        setTimeout(() => success.classList.remove('show'), 4000);
    }, 1200);
}