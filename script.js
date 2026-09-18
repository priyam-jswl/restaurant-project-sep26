        /* =====================================================================

           CENTRAL CONFIGURATION — edit everything about the business right here

           ===================================================================== */

        const restaurantData = {

            name: "Arpan Restaurant & Catering",

            altName: "Arpan Smart Dining",

            phone: "+917762084857",

            phoneDisplay: "+91 XXXXXXXX",

            whatsapp: "917762084857", // country code + number, no + or spaces

            address: {

                line2: " Ranchi",

                line3: "Jharkhand, India"

            },

            mapsSearchUrl: "https://www.google.com/maps/search/?api=1&query=Galaxia+Mall+Ratu+Road+Ranchi+Jharkhand",

            hours: { open: "10:00", close: "23:00" }, // 24h format, IST

            social: [

                { name: "Instagram", url: "https://instagram.com/", icon: "instagram" },

                { name: "Facebook", url: "https://facebook.com/", icon: "facebook" },

                { name: "WhatsApp", url: "#", icon: "whatsapp" }

            ],

            whatsappDefaultMessage: "Hello Arpan Restaurant & Catering, I would like to know more.",

            whatsappCateringMessage: "Hello Arpan Restaurant & Catering, I'd like to enquire about catering for an upcoming event."

        };

        /* =====================================================================

           MENU DATA — add/edit/remove dishes here. Each category becomes a tab.

           ===================================================================== */

        const menuData = [

            {

                id: "veg", label: "Vegetarian", icon: "leaf", items: [

                    { name: "Paneer Butter Masala", desc: "Paneer in a rich buttery tomato gravy", price: 260, veg: true },

                    { name: "Dal Makhani", desc: "Slow-cooked black lentils, finished with cream", price: 210, veg: true },

                    { name: "Veg Kolhapuri", desc: "Mixed vegetables in a spiced Kolhapuri gravy", price: 230, veg: true },

                    { name: "Mix Veg Handi", desc: "Seasonal vegetables in a light onion-tomato base", price: 220, veg: true }

                ]

            },

            {

                id: "nonveg", label: "Non-Vegetarian", icon: "drumstick", items: [

                    { name: "Butter Chicken", desc: "Tandoor-roasted chicken in a creamy tomato gravy", price: 320, veg: false },

                    { name: "Mutton Rogan Josh", desc: "Slow-braised mutton in an aromatic Kashmiri gravy", price: 380, veg: false },

                    { name: "Chicken Chettinad", desc: "South-spiced chicken curry with curry leaf and pepper", price: 310, veg: false },

                    { name: "Fish Curry", desc: "Fresh fish simmered in a tangy, spiced gravy", price: 340, veg: false }

                ]

            },

            {

                id: "northindian", label: "North Indian", icon: "flame", items: [

                    { name: "Dal Tadka", desc: "Yellow lentils tempered with cumin and garlic", price: 190, veg: true },

                    { name: "Shahi Paneer", desc: "Paneer in a mildly sweet, cashew-based gravy", price: 270, veg: true },

                    { name: "Tandoori Chicken (Half)", desc: "Charcoal-tandoor roasted, marinated overnight", price: 330, veg: false }

                ]

            },

            {

                id: "chinese", label: "Chinese", icon: "wok", items: [

                    { name: "Veg Manchurian", desc: "Vegetable dumplings in a tangy Indo-Chinese sauce", price: 220, veg: true },

                    { name: "Chilli Chicken", desc: "Wok-tossed chicken with peppers and green chilli", price: 300, veg: false },

                    { name: "Hakka Noodles", desc: "Stir-fried noodles with fresh vegetables", price: 210, veg: true }

                ]

            },

            {

                id: "southindian", label: "South Indian", icon: "leaf", items: [

                    { name: "Masala Dosa", desc: "Crisp rice crepe with spiced potato filling", price: 150, veg: true },

                    { name: "Idli Sambar (4pc)", desc: "Steamed rice cakes with lentil sambar and chutney", price: 130, veg: true },

                    { name: "Uttapam", desc: "Thick savoury pancake topped with onion and chilli", price: 160, veg: true }

                ]

            },

            {

                id: "mughlai", label: "Mughlai", icon: "flame", items: [

                    { name: "Mutton Biryani", desc: "Dum-cooked basmati layered with slow-braised mutton", price: 380, veg: false },

                    { name: "Chicken Seekh Kebab", desc: "Minced chicken skewers, char-grilled", price: 280, veg: false },

                    { name: "Veg Biryani", desc: "Basmati layered with vegetables and whole spices", price: 240, veg: true }

                ]

            },

            {

                id: "fastfood", label: "Fast Food", icon: "burger", items: [

                    { name: "Veg Cheese Burger", desc: "Crisp veg patty with melted cheese", price: 150, veg: true },

                    { name: "Chicken Burger", desc: "Grilled chicken patty with house sauce", price: 180, veg: false },

                    { name: "French Fries", desc: "Golden and crisp, salted to order", price: 120, veg: true }

                ]

            },

            {

                id: "beverages", label: "Beverages", icon: "cup", items: [

                    { name: "Masala Chaas", desc: "Spiced buttermilk, served chilled", price: 70, veg: true },

                    { name: "Fresh Lime Soda", desc: "Sweet, salt or mixed", price: 80, veg: true },

                    { name: "Cold Coffee", desc: "Blended with ice cream", price: 130, veg: true }

                ]

            }

        ];

        /* =====================================================================

           GALLERY DATA

           ===================================================================== */

        const galleryData = [

            { cat: "food", src: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=600&q=80", alt: "Mughlai curry dish" },

            { cat: "restaurant", src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80", alt: "Restaurant seating area" },

            { cat: "food", src: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80", alt: "North Indian thali" },

            { cat: "ambience", src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=600&q=80", alt: "Warm restaurant ambience" },

            { cat: "food", src: "./Images/biryani.avif" , alt: "Biryani served with raita" },

            { cat: "celebrations", src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=600&q=80", alt: "Table set for a celebration" },

            { cat: "food", src: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80", alt: "Indo-Chinese noodles" },

            { cat: "catering", src: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&q=80", alt: "Catering spread for an event" },

            { cat: "restaurant", src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80", alt: "Restaurant interior seating" },

            { cat: "ambience", src: "https://images.unsplash.com/photo-1592861956120-e524fc739696?auto=format&fit=crop&w=600&q=80", alt: "Elegant table setting" }

        ];

        /* =====================================================================

           REVIEWS DATA — clearly sample/placeholder content, replace with verified reviews

           ===================================================================== */

        const reviewsData = [

            { name: "Sample Guest — R. Sharma", detail: "Family Dinner", quote: "Sample review: great variety on the menu, and the staff made sure our kids were comfortable too. Would come back for a birthday." },

            { name: "Sample Guest — P. Kumar", detail: "Catering — Birthday", quote: "Sample review: booked catering for a birthday and the food arrived on time and hot. Guests especially liked the biryani." },

            { name: "Sample Guest — A. Verma", detail: "Dine In", quote: "Sample review: cosy place inside Mall. Good for a relaxed weekend meal with family." },

            { name: "Sample Guest — S. Das", detail: "Corporate Event", quote: "Sample review: catering team was professional and the spread covered vegetarian and non-vegetarian well." },

            { name: "Sample Guest — N. Roy", detail: "Takeaway", quote: "Sample review: ordered takeaway and it was packed well and still hot by the time we got home." },

            { name: "Sample Guest — M. Iqbal", detail: "Dine In", quote: "Sample review: liked that the restaurant wasn't too loud — could actually have a conversation over dinner." }

        ];

        /* =====================================================================

           ICONS for menu tabs

           ===================================================================== */

        const tabIcons = {

            leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M11 20A7 7 0 0 1 4 13c0-5 4-9 13-9 0 9-4 13-9 13Z"/><path d="M4 20l7-7"/></svg>',

            drumstick: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M8.5 15.5c-3 3-6 3.5-6 3.5s.5-3 3.5-6c1-1 2-3 1-5 1-1 3-1.5 4.5-.5"/><circle cx="15" cy="9" r="5.5"/></svg>',

            flame: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2c1 4-4 5-4 10a4 4 0 0 0 8 0c0-1-1-2-1-2s2 1 2 4a6 6 0 1 1-12 0c0-5 3-6 5-9 1-1.5 1.5-2 2-3Z"/></svg>',

            wok: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 12h20a8 8 0 0 1-16 0Z"/><path d="M4 12 2 8M20 12l2-4M12 12V5"/></svg>',

            burger: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 10h18M3 14h18M4 10a8 4 0 0 1 16 0M4 14h16a2 3 0 0 1-2 3H6a2 3 0 0 1-2-3Z"/></svg>',

            cup: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 3h13l-1 13a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3Z"/><path d="M17 6h2a2.5 2.5 0 0 1 0 5h-1.5"/></svg>'

        };

        const socialIcons = {

            instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>',

            facebook: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M15 8h-2a2 2 0 0 0-2 2v10M8 12h6"/><path d="M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Z"/></svg>',

            whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12.001 2c-5.514 0-9.999 4.485-9.999 10 0 1.762.462 3.489 1.34 5.007L2 22l5.116-1.32A9.94 9.94 0 0 0 12 22c5.514 0 10-4.486 10-10S17.514 2 12.001 2Zm0 18.2c-1.6 0-3.152-.43-4.507-1.245l-.323-.192-3.037.783.812-2.96-.211-.305A8.19 8.19 0 0 1 3.79 12c0-4.529 3.68-8.209 8.211-8.209 4.529 0 8.207 3.68 8.207 8.209 0 4.528-3.678 8.2-8.207 8.2Z"/></svg>'

        };

        /* ===================================================================== INIT ===================================================================== */

        document.addEventListener("DOMContentLoaded", () => {

            applyBusinessInfo();

            buildOpenStatus();

            buildMenu();

            buildGallery();

            buildReviews();

            buildFooterSocial();

            initNav();

            initReveal();

            initGallery();

            initReviewsCarousel();

            initForms();

            initScrollProgress();

            document.getElementById("footer-year").textContent = new Date().getFullYear();

        });

        /* Wire config-driven links/numbers */

        function applyBusinessInfo() {

            const waLink = (msg) => `https://wa.me/${restaurantData.whatsapp}?text=${encodeURIComponent(msg)}`;

            document.getElementById("wa-float").href = waLink(restaurantData.whatsappDefaultMessage);

            document.getElementById("cater-wa-btn").href = waLink(restaurantData.whatsappCateringMessage);

            document.getElementById("loc-wa-btn").href = waLink(restaurantData.whatsappDefaultMessage);

            document.getElementById("mbar-whatsapp").href = waLink(restaurantData.whatsappDefaultMessage);

            document.getElementById("loc-directions-btn").href = restaurantData.mapsSearchUrl;

            document.getElementById("mbar-directions").href = restaurantData.mapsSearchUrl;

            document.getElementById("share-review-link").href = "https://search.google.com/local/writereview";

        }

        /* Live IST open/closed status */

        function buildOpenStatus() {

            function render() {

                const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));

                const mins = now.getHours() * 60 + now.getMinutes();

                const [oh, om] = restaurantData.hours.open.split(":").map(Number);

                const [ch, cm] = restaurantData.hours.close.split(":").map(Number);

                const openMins = oh * 60 + om;

                const closeMins = ch * 60 + cm;

                const isOpen = mins >= openMins && mins < closeMins;

                const dot = document.getElementById("status-dot");

                const text = document.getElementById("status-text");

                const fmt = (h, m) => {

                    const d = new Date(); d.setHours(h, m, 0, 0);

                    return d.toLocaleTimeString("en-IN", { hour: "numeric", minute: "2-digit", hour12: true });

                };

                if (isOpen) {

                    dot.classList.remove("closed");

                    text.textContent = `Open Now — Closes at ${fmt(ch, cm)}`;

                } else {

                    dot.classList.add("closed");

                    text.textContent = `Currently Closed — Opens at ${fmt(oh, om)}`;

                }

            }

            render();

            setInterval(render, 60000);

        }

        /* Build menu tabs + panels */

        function buildMenu() {

            const tabsEl = document.getElementById("menu-tabs");

            const panelsEl = document.getElementById("menu-panels");

            menuData.forEach((cat, i) => {

                const tab = document.createElement("button");

                tab.className = "menu-tab" + (i === 0 ? " active" : "");

                tab.dataset.target = cat.id;

                tab.innerHTML = `${tabIcons[cat.icon] || ""}<span>${cat.label}</span>`;

                tab.addEventListener("click", () => switchMenuTab(cat.id));

                tabsEl.appendChild(tab);

                const panel = document.createElement("div");

                panel.className = "menu-panel" + (i === 0 ? " active" : "");

                panel.id = "panel-" + cat.id;

                const list = document.createElement("div");

                list.className = "menu-list";

                cat.items.forEach(item => {

                    const row = document.createElement("div");

                    row.className = "menu-item";

                    row.innerHTML = `

        <div class="left">

          <span class="veg-dot ${item.veg ? "" : "nonveg"}"></span>

          <div>

            <h4>${item.name}</h4>

            <p class="desc">${item.desc}</p>

          </div>

        </div>

        <span class="price">₹${item.price}</span>`;

                    list.appendChild(row);

                });

                panel.appendChild(list);

                panelsEl.appendChild(panel);

            });

            document.getElementById("view-full-menu").addEventListener("click", () => {

                alert("The full menu PDF can be linked here — add your menu file path in the config and this button will open or download it.");

            });

        }

        function switchMenuTab(id) {

            document.querySelectorAll(".menu-tab").forEach(t => t.classList.toggle("active", t.dataset.target === id));

            document.querySelectorAll(".menu-panel").forEach(p => p.classList.toggle("active", p.id === "panel-" + id));

        }

        /* Build gallery */

        let currentGalleryFilter = "all";

        function buildGallery() {

            const grid = document.getElementById("gal-grid");

            grid.innerHTML = "";

            galleryData

                .filter(g => currentGalleryFilter === "all" || g.cat === currentGalleryFilter)

                .forEach((g) => {

                    const item = document.createElement("div");

                    item.className = "gal-item";

                    item.dataset.src = g.src.replace("w=600", "w=1400");

                    item.dataset.alt = g.alt;

                    item.innerHTML = `<img src="${g.src}" alt="${g.alt}" loading="lazy">

        <div class="zoom-hint"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3M11 8v6M8 11h6"/></svg></div>`;

                    grid.appendChild(item);

                });

            attachGalleryClicks();

        }

        let lightboxIndex = 0;

        let visibleGalleryItems = [];

        function attachGalleryClicks() {

            visibleGalleryItems = Array.from(document.querySelectorAll(".gal-item"));

            visibleGalleryItems.forEach((item, i) => {

                item.addEventListener("click", () => openLightbox(i));

            });

        }

        function openLightbox(i) {

            lightboxIndex = i;

            const item = visibleGalleryItems[i];

            document.getElementById("lb-img").src = item.dataset.src;

            document.getElementById("lb-img").alt = item.dataset.alt;

            document.getElementById("lightbox").classList.add("open");

        }

        function initGallery() {

            document.querySelectorAll(".gal-filter").forEach(btn => {

                btn.addEventListener("click", () => {

                    document.querySelectorAll(".gal-filter").forEach(b => b.classList.remove("active"));

                    btn.classList.add("active");

                    currentGalleryFilter = btn.dataset.filter;

                    buildGallery();

                });

            });

            document.getElementById("lb-close").addEventListener("click", closeLightbox);

            document.getElementById("lightbox").addEventListener("click", (e) => { if (e.target.id === "lightbox") closeLightbox(); });

            document.getElementById("lb-prev").addEventListener("click", () => navLightbox(-1));

            document.getElementById("lb-next").addEventListener("click", () => navLightbox(1));

            document.addEventListener("keydown", (e) => {

                if (!document.getElementById("lightbox").classList.contains("open")) return;

                if (e.key === "Escape") closeLightbox();

                if (e.key === "ArrowLeft") navLightbox(-1);

                if (e.key === "ArrowRight") navLightbox(1);

            });

        }

        function navLightbox(dir) {

            lightboxIndex = (lightboxIndex + dir + visibleGalleryItems.length) % visibleGalleryItems.length;

            openLightbox(lightboxIndex);

        }

        function closeLightbox() { document.getElementById("lightbox").classList.remove("open"); }

        /* Build reviews carousel */

        let reviewPage = 0;

        let reviewsPerPage = 3;

        function buildReviews() {

            const track = document.getElementById("rev-track");

            track.innerHTML = "";

            reviewsData.forEach(r => {

                const card = document.createElement("div");

                card.className = "rev-card";

                const initials = r.name.split("—")[1] ? r.name.split("—")[1].trim().split(" ").map(w => w[0]).join("") : "G";

                card.innerHTML = `

      <span class="sample-tag">Sample review</span>

      <div class="rev-stars">${"★★★★★".split("").map(() => '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg>').join("")}</div>

      <p class="quote">"${r.quote}"</p>

      <div class="rev-who">

        <div class="rev-avatar">${initials}</div>

        <div><div class="n">${r.name}</div><div class="d">${r.detail}</div></div>

      </div>`;

                track.appendChild(card);

            });

        }

        function initReviewsCarousel() {

            function computePerPage() {

                reviewsPerPage = window.innerWidth <= 600 ? 1 : window.innerWidth <= 900 ? 2 : 3;

            }

            computePerPage();

            const totalPages = () => Math.ceil(reviewsData.length / reviewsPerPage);

            const dotsEl = document.getElementById("rev-dots");

            function buildDots() {

                dotsEl.innerHTML = "";

                for (let i = 0; i < totalPages(); i++) {

                    const d = document.createElement("span");

                    d.className = "rev-dot" + (i === reviewPage ? " active" : "");

                    d.addEventListener("click", () => { reviewPage = i; updateCarousel(); });

                    dotsEl.appendChild(d);

                }

            }

            function updateCarousel() {

                const card = document.querySelector(".rev-card");

                if (!card) return;

                const cardWidth = card.getBoundingClientRect().width + 24;

                const track = document.getElementById("rev-track");

                track.style.transform = `translateX(-${reviewPage * reviewsPerPage * cardWidth}px)`;

                document.querySelectorAll(".rev-dot").forEach((d, i) => d.classList.toggle("active", i === reviewPage));

            }

            document.getElementById("rev-prev").addEventListener("click", () => {

                reviewPage = Math.max(0, reviewPage - 1); updateCarousel();

            });

            document.getElementById("rev-next").addEventListener("click", () => {

                reviewPage = Math.min(totalPages() - 1, reviewPage + 1); updateCarousel();

            });

            buildDots();

            window.addEventListener("resize", () => { computePerPage(); reviewPage = 0; buildDots(); updateCarousel(); });

            setTimeout(updateCarousel, 200);

        }

        /* Footer socials */

        function buildFooterSocial() {

            const el = document.getElementById("footer-social");

            restaurantData.social.forEach(s => {

                const a = document.createElement("a");

                a.href = s.url; a.setAttribute("aria-label", s.name); a.target = "_blank"; a.rel = "noopener";

                a.innerHTML = socialIcons[s.icon] || "";

                el.appendChild(a);

            });

        }

        /* Nav: scroll bg, active link, mobile menu, smooth scroll offset */

        function initNav() {

            const navbar = document.getElementById("navbar");

            window.addEventListener("scroll", () => {

                navbar.classList.toggle("scrolled", window.scrollY > 60);

            });

            const hamburger = document.getElementById("hamburger");

            const mobileMenu = document.getElementById("mobile-menu");

            function closeMobile() {

                hamburger.classList.remove("open");

                hamburger.setAttribute("aria-expanded", "false");

                mobileMenu.classList.remove("open");

                document.body.style.overflow = "";

            }

            hamburger.addEventListener("click", () => {

                const isOpen = mobileMenu.classList.toggle("open");

                hamburger.classList.toggle("open", isOpen);

                hamburger.setAttribute("aria-expanded", String(isOpen));

                document.body.style.overflow = isOpen ? "hidden" : "";

            });

            document.querySelectorAll(".mnav-link").forEach(a => a.addEventListener("click", closeMobile));

            // active section highlight

            const sections = ["hero", "about", "specialities", "menu", "catering", "gallery", "contact"].map(id => document.getElementById(id) || document.getElementById(id + "-wrap")).filter(Boolean);

            const navLinks = document.querySelectorAll(".nav-link");

            const obs = new IntersectionObserver((entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        const id = entry.target.id.replace("-wrap", "");

                        navLinks.forEach(l => l.classList.toggle("active", l.dataset.target === id));

                    }

                });

            }, { rootMargin: "-45% 0px -50% 0px" });

            sections.forEach(s => obs.observe(s));

        }

        /* Scroll-reveal animations */

        function initReveal() {

            const els = document.querySelectorAll(".reveal");

            const obs = new IntersectionObserver((entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("in-view");

                        obs.unobserve(entry.target);

                    }

                });

            }, { threshold: 0.15 });

            els.forEach(el => obs.observe(el));

        }

        /* Scroll progress bar */

        function initScrollProgress() {

            const bar = document.getElementById("scroll-progress");

            window.addEventListener("scroll", () => {

                const h = document.documentElement;

                const pct = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;

                bar.style.width = pct + "%";

            });

        }

        /* ===================================================================== FORMS ===================================================================== */

        function validateField(field, value, rules) {

            const wrap = field.closest(".field");

            let valid = true;

            if (rules.required && !value.trim()) valid = false;

            if (rules.phone && value.trim() && !/^[6-9]\d{9}$/.test(value.replace(/\D/g, ""))) valid = false;

            if (rules.email && value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) valid = false;

            wrap.classList.toggle("error", !valid);

            return valid;

        }

        function initForms() {

            setupForm("catering-form", "cater-status", {

                name: { required: true }, phone: { required: true, phone: true }, email: { email: true },

                eventType: { required: true }, guests: { required: true }, date: { required: true }, location: { required: true }

            });

            setupForm("contact-form", "contact-status", {

                name: { required: true }, phone: { required: true, phone: true }, email: { email: true }, message: { required: true }

            });

        }

        function setupForm(formId, statusId, fieldRules) {

            const form = document.getElementById(formId);

            const status = document.getElementById(statusId);

            form.addEventListener("submit", (e) => {

                e.preventDefault();

                let allValid = true;

                Object.keys(fieldRules).forEach(name => {

                    const input = form.querySelector(`[name="${name}"]`);

                    if (!input) return;

                    const ok = validateField(input, input.value, fieldRules[name]);

                    if (!ok) allValid = false;

                });

                if (!allValid) {

                    status.className = "form-status show";

                    status.style.color = "#E38A80";

                    status.textContent = "Please fix the highlighted fields.";

                    return;

                }

                // No backend connected yet — this simulates submission.

                // To go live: point this fetch() at your email/CRM/Sheets endpoint

                // (e.g. Formspree, EmailJS, or a custom API route) using the same field names.

                const submitBtn = form.querySelector(".form-submit");

                submitBtn.disabled = true;

                status.className = "form-status show";

                status.style.color = "var(--text-muted)";

                status.innerHTML = `<span class="spinner"></span> Sending your request…`;

                setTimeout(() => {

                    submitBtn.disabled = false;

                    status.className = "form-status show success";

                    status.textContent = formId === "catering-form"

                        ? "Thank you — we've received your catering request and will call you shortly."

                        : "Thank you — your message has been sent. We'll be in touch soon.";

                    form.reset();

                    form.querySelectorAll(".field").forEach(f => f.classList.remove("error"));

                }, 1100);

            });

            // live re-validate on blur

            Object.keys(fieldRules).forEach(name => {

                const input = form.querySelector(`[name="${name}"]`);

                if (!input) return;

                input.addEventListener("blur", () => validateField(input, input.value, fieldRules[name]));

            });

        }

    
