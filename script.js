// Mobile Navigation
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
    });
});


// Typing Animation
const typingElement = document.getElementById("typing");

const words = [
    "Freelancer.",
    "Web Developer.",
    "SEO Optimizer.",
    "Digital Marketer.",
    "Computer Science Student."
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {
        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1300);
            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeEffect, deleting ? 55 : 100);
}

typeEffect();


// Scroll Reveal Animation
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(".reveal").forEach(element => {
    observer.observe(element);
});


// Active Navigation Link
const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

const sectionObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            navItems.forEach(link => {
                link.classList.remove("active");

                if (link.getAttribute("href") ===
                    "#" + entry.target.id) {
                    link.classList.add("active");
                }
            });

        }

    });

}, {
    rootMargin: "-30% 0px -60% 0px"
});

sections.forEach(section => {
    sectionObserver.observe(section);
});


// Automatic Copyright Year
document.getElementById("year").textContent =
    new Date().getFullYear();



// ===================================
// CONTACT FORM - FORMSPREE
// ===================================

// Contact form ko HTML mein Formspree endpoint
// aur method="POST" ke saath configure karein.
// JavaScript se preventDefault() nahi karna.
// Formspree automatically form submission handle karega.


// ===================================
// PROJECT DETAILS MODAL
// ===================================

const detailsBtn = document.getElementById("detailsBtn");
const projectModal = document.getElementById("projectModal");
const closeModal = document.getElementById("closeModal");

// Open Project Details
if (detailsBtn && projectModal) {
    detailsBtn.addEventListener("click", function(e) {
        e.preventDefault();
        projectModal.classList.add("active");
    });
}

// Close Modal Button
if (closeModal && projectModal) {
    closeModal.addEventListener("click", function() {
        projectModal.classList.remove("active");
    });
}

// Close Modal by Clicking Outside
if (projectModal) {
    projectModal.addEventListener("click", function(e) {
        if (e.target === projectModal) {
            projectModal.classList.remove("active");
        }
    });
}

// Close Modal with Escape Key
document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" && projectModal) {
        projectModal.classList.remove("active");
    }
});

// SERVICE DETAILS DATA

const serviceDetails = {
    "Web Design": {
        description: "I create clean, modern and responsive website designs that provide a better user experience on all devices.",
        tasks: [
            "Modern website layouts",
            "Landing page design",
            "Personal portfolio design",
            "Responsive mobile-friendly designs",
            "Clean navigation and user interface"
        ]
    },

    "Web Development": {
        description: "I develop functional and responsive websites using modern front-end technologies.",
        tasks: [
            "HTML, CSS and JavaScript websites",
            "Website page development",
            "Responsive website development",
            "Contact forms and interactive elements",
            "Basic website updates and improvements"
        ]
    },

    "SEO Optimization": {
        description: "I help improve website content, Google Bussiness and structure to make it more search-engine friendly.",
        tasks: [
            "Keyword research",
            "On-page SEO",
            "Off-page SEO",
            "Basic website SEO audit",
            "Meta title and description optimization",
            "Heading and content optimization",
        ]
    },

    "Digital Marketing": {
        description: "I help businesses plan their online presence and promote their products or services.",
        tasks: [
            "Basic digital marketing strategy",
            "Audience research",
            "Marketing campaign planning",
            "Online brand promotion",
            "Content marketing ideas"
        ]
    },

    "Graphic Design": {
        description: "I create attractive visual designs for brands, businesses and social media platforms.",
        tasks: [
            "Social media post designs",
            "Promotional banners",
            "Basic logo concepts",
            "Canva designs",
            "Photoshop editing"
        ]
    },

    "Social Media Marketing": {
        description: "I help businesses organize and improve their social media presence.",
        tasks: [
            "Social media content planning",
            "Post and caption preparation",
            "Page optimization",
            "Content ideas",
            "Basic audience engagement strategies"
        ]
    },

    "Video Editing": {
        description: "I edit videos for social media and online content with clean cuts and engaging visuals.",
        tasks: [
            "Video cutting and trimming",
            "Text and captions",
            "Reels and short video editing",
            "Basic transitions",
            "Simple video enhancements"
        ]
    }
};


// GET POPUP ELEMENTS

const serviceModal = document.getElementById("serviceModal");
const serviceTitle = document.getElementById("serviceTitle");
const serviceDescription = document.getElementById("serviceDescription");
const serviceList = document.getElementById("serviceList");
const closeServiceModal = document.getElementById("closeServiceModal");


// MAKE SERVICE CARDS CLICKABLE

document.querySelectorAll(".service-card").forEach(card => {

    card.style.cursor = "pointer";

    card.addEventListener("click", () => {

        const titleElement = card.querySelector("h3");

        if (!titleElement) return;

        const title = titleElement.textContent.trim();
        const details = serviceDetails[title];

        if (!details) return;

        serviceTitle.textContent = title;
        serviceDescription.textContent = details.description;

        serviceList.innerHTML = "";

        details.tasks.forEach(task => {
            const li = document.createElement("li");
            li.textContent = task;
            serviceList.appendChild(li);
        });

        serviceModal.classList.add("active");
        document.body.style.overflow = "hidden";
    });

});


// CLOSE POPUP

function closeServicePopup() {
    serviceModal.classList.remove("active");
    document.body.style.overflow = "";
}

closeServiceModal.addEventListener("click", closeServicePopup);

serviceModal.addEventListener("click", function(e) {
    if (e.target === serviceModal) {
        closeServicePopup();
    }
});

document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        closeServicePopup();
    }
});

// FORCE CLEAR CONTACT FORM

const contactForm = document.getElementById("contactForm");

function clearContactForm() {
    if (!contactForm) return;

    contactForm.reset();

    contactForm.querySelectorAll("input, textarea").forEach(field => {
        field.value = "";
        field.defaultValue = "";
    });
}

// Clear when page opens or browser Back button is used
window.addEventListener("pageshow", function() {
    setTimeout(clearContactForm, 100);
});

// Clear when page is restored from browser cache
window.addEventListener("load", function() {
    clearContactForm();
});
