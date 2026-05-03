// ===== THE GOLDEN PLATE — Shared Data Layer =====
// All pages read from this. Admin writes to this. Everything stays in sync.

const GP = {
    defaults: {
        hero: {
            heading: "Where Flavor Meets Elegance",
            highlight: "Flavor",
            desc: "An exquisite culinary journey crafted with passion, precision, and the finest ingredients. Taste the artistry in every bite.",
            btnText: "Explore the Menu",
            btnLink: "menu.html"
        },
        about: {
            title: "A Legacy of Flavor, Crafted with Soul",
            story: "Founded in 2018, The Golden Plate was born from a simple belief: dining should be an experience, not just a meal. What began as a modest kitchen driven by a relentless pursuit of authentic flavors has evolved into a space where artistry and hospitality intertwine.",
            story2: "Our founder, inspired by decades of travel across Mediterranean and Asian culinary heartlands, gathered a team of artisans who share one vision: to serve food that honors its roots while embracing modern refinement.",
            year: "2018",
            guests: "14",
            awards: "3",
            satisfaction: "98"
        },
        contact: {
            address: "123 Golden Avenue, Luxury District, New York, NY 10001",
            phone: "+201090994182",
            email: "reservations@goldenplate.com",
            whatsapp: "+201090994182",
            hoursWeek: "Mon–Fri: 12:00 PM – 11:00 PM",
            hoursWeekend: "Sat–Sun: 11:00 AM – 12:00 AM",
            socialLinks: [
                { url: "https://instagram.com/goldenplate" },
                { url: "https://facebook.com/goldenplate" }
            ],
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304603!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1734567890123"
        },
        settings: {
            name: "The Golden Plate",
            tagline: "Crafted for the discerning palate.",
            currency: "$",
            gold: "#FFFFFF",
            ordering: true,
            reservations: true,
            whatsapp: true,
            maintenance: false
        },
        team: [
            { name: "Alessandro Rossi", role: "Executive Chef & Founder", img: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=400&q=80" },
            { name: "Elena Marquez", role: "Pastry Director", img: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=400&q=80" },
            { name: "Julian Vance", role: "Head Sommelier", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80" }
        ],
        menu: [
            { id: 1, name: "Truffle Burrata", price: 16.00, category: "starters", image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80", extraImages: [], desc: "Creamy burrata, black truffle shavings, heirloom tomatoes, basil oil.", ingredients: ["Burrata cheese", "Black truffle", "Heirloom tomatoes", "Basil oil", "Sea salt", "Cracked pepper"], allergens: ["dairy"] },
            { id: 2, name: "Golden Calamari", price: 14.50, category: "starters", image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600&q=80", extraImages: [], desc: "Lightly dusted, saffron aioli, micro herbs, chili flakes.", ingredients: ["Fresh calamari", "Saffron aioli", "Micro herbs", "Chili flakes", "Flour dusting", "Lemon"], allergens: ["seafood", "gluten", "egg"] },
            { id: 3, name: "Wagyu Carpaccio", price: 19.00, category: "starters", image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80", extraImages: [], desc: "Thinly sliced wagyu, arugula, capers, truffle vinaigrette.", ingredients: ["Wagyu beef", "Arugula", "Capers", "Truffle vinaigrette", "Parmesan shavings", "Olive oil"], allergens: ["dairy"] },
            { id: 4, name: "Pan-Seared Scallops", price: 17.50, category: "starters", image: "https://images.unsplash.com/photo-1565680018450-e3b092343732?auto=format&fit=crop&w=600&q=80", extraImages: [], desc: "Caramelized crust, cauliflower purée, brown butter, lemon zest.", ingredients: ["Sea scallops", "Cauliflower purée", "Brown butter", "Lemon zest", "Chives", "Sea salt"], allergens: ["seafood", "dairy"] },
            { id: 5, name: "Wagyu Classic Burger", price: 18.50, category: "mains", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80", extraImages: [], desc: "Premium wagyu, aged cheddar, truffle aioli, brioche bun.", ingredients: ["Wagyu beef patty", "Aged cheddar", "Truffle aioli", "Brioche bun", "Lettuce", "Tomato", "Pickles", "Caramelized onions"], allergens: ["gluten", "dairy", "egg"] },
            { id: 6, name: "Black Truffle Risotto", price: 22.00, category: "mains", image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&h=400&fit=crop", extraImages: [], desc: "Arborio rice, porcini mushrooms, parmesan, shaved black truffle.", ingredients: ["Arborio rice", "Porcini mushrooms", "Black truffle", "Parmesan", "White wine", "Shallots", "Chicken stock", "Butter"], allergens: ["dairy"] },
            { id: 7, name: "Miso Glazed Salmon", price: 24.50, category: "mains", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a3a2749?auto=format&fit=crop&w=600&q=80", extraImages: [], desc: "Wild-caught salmon, sweet miso glaze, bok choy, sesame crisp.", ingredients: ["Wild salmon", "White miso", "Mirin", "Bok choy", "Sesame seeds", "Ginger", "Soy glaze"], allergens: ["seafood", "soy", "sesame"] },
            { id: 8, name: "Herb-Crusted Lamb", price: 28.00, category: "mains", image: "https://images.unsplash.com/photo-1558030006-4506719b7453?auto=format&fit=crop&w=600&q=80", extraImages: [], desc: "New Zealand lamb, rosemary crust, mint pea purée.", ingredients: ["NZ lamb rack", "Rosemary", "Thyme", "Mint pea purée", "Garlic", "Dijon mustard", "Breadcrumbs"], allergens: ["gluten"] },
            { id: 9, name: "Lobster Thermidor", price: 34.00, category: "mains", image: "https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&w=600&q=80", extraImages: [], desc: "Whole lobster, brandy cream, gruyère gratin, seasonal greens.", ingredients: ["Whole lobster", "Brandy", "Heavy cream", "Gruyère cheese", "Dijon mustard", "Egg yolk", "Seasonal greens"], allergens: ["seafood", "dairy", "egg", "alcohol"] },
            { id: 10, name: "Velvet Berry Tart", price: 12.50, category: "desserts", image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80", extraImages: [], desc: "Shortcrust pastry, vanilla custard, seasonal berries, gold leaf.", ingredients: ["Shortcrust pastry", "Vanilla custard", "Mixed berries", "Gold leaf", "Powdered sugar", "Mint garnish"], allergens: ["gluten", "dairy", "egg"] },
            { id: 11, name: "Dark Chocolate Fondant", price: 13.00, category: "desserts", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80", extraImages: [], desc: "Molten center, sea salt ice cream, raspberry coulis.", ingredients: ["Dark chocolate 70%", "Butter", "Eggs", "Sea salt ice cream", "Raspberry coulis", "Cocoa powder"], allergens: ["dairy", "egg", "gluten"] },
            { id: 12, name: "Tiramisu Classico", price: 11.50, category: "desserts", image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80", extraImages: [], desc: "Espresso ladyfingers, mascarpone cream, cocoa dust.", ingredients: ["Ladyfingers", "Espresso", "Mascarpone", "Eggs", "Sugar", "Cocoa powder", "Marsala wine"], allergens: ["gluten", "dairy", "egg", "alcohol"] },
            { id: 13, name: "Crème Brûlée", price: 10.00, category: "desserts", image: "https://images.unsplash.com/photo-1588647001133-29884489e44c?auto=format&fit=crop&w=600&q=80", extraImages: [], desc: "Madagascar vanilla, caramelized sugar crust, fresh berries.", ingredients: ["Heavy cream", "Madagascar vanilla", "Egg yolks", "Sugar", "Fresh berries"], allergens: ["dairy", "egg"] },
            { id: 14, name: "Espresso Affogato", price: 8.00, category: "drinks", image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=600&q=80", extraImages: [], desc: "Double shot espresso, vanilla gelato, dark chocolate shavings.", ingredients: ["Double espresso", "Vanilla gelato", "Dark chocolate shavings", "Amaretti biscuit"], allergens: ["dairy", "gluten"] },
            { id: 15, name: "Signature Old Fashioned", price: 15.00, category: "drinks", image: "https://images.unsplash.com/photo-1551024709-8f2704684235?auto=format&fit=crop&w=600&q=80", extraImages: [], desc: "Bourbon, angostura bitters, orange zest, luxardo cherry.", ingredients: ["Bourbon whiskey", "Angostura bitters", "Orange zest", "Luxardo cherry", "Simple syrup", "Ice"], allergens: ["alcohol"] },
            { id: 16, name: "Rose Lychee Spritz", price: 12.00, category: "drinks", image: "https://images.unsplash.com/photo-1544145947-160989e08326?auto=format&fit=crop&w=600&q=80", extraImages: [], desc: "Sparkling rosé, lychee purée, fresh mint, citrus twist.", ingredients: ["Sparkling rosé", "Lychee purée", "Fresh mint", "Citrus twist", "Soda water", "Rose syrup"], allergens: ["alcohol"] },
            { id: 17, name: "Matcha Zen Tonic", price: 10.50, category: "drinks", image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=600&q=80", extraImages: [], desc: "Ceremonial matcha, yuzu, sparkling water, agave syrup.", ingredients: ["Ceremonial matcha", "Yuzu juice", "Sparkling water", "Agave syrup", "Ice", "Lemongrass"], allergens: [] }
        ],
        siteImages: {
            'hero-bg': '',
            'about-story': '',
            'about-chef': '',
            'testimonial-1': '',
            'testimonial-2': '',
            'testimonial-3': '',
            'gallery-1': '',
            'gallery-2': '',
            'gallery-3': '',
            'gallery-4': '',
            'contact-hero': ''
        }
    },

    get(key) {
        const raw = localStorage.getItem('gp_' + key);
        return raw ? JSON.parse(raw) : this.defaults[key];
    },

    getSiteImage(key) {
        const stored = localStorage.getItem('gp_site_img_' + key);
        if (stored) return stored;
        const all = this.defaults.siteImages || {};
        return all[key] || '';
    },

    set(key, val) {
        localStorage.setItem('gp_' + key, JSON.stringify(val));
    },

    applyGold() {
        const s = this.get('settings');
        document.documentElement.style.setProperty('--gold', s.gold || '#D4AF37');
    },

    detectSocialIcon(url) {
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
};

// Apply gold color immediately on every page load
document.addEventListener('DOMContentLoaded', () => GP.applyGold());
