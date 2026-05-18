document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // CONTACT FORM (SAFE)
  // =========================
  const form = document.querySelector("#contactForm");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = form.querySelector('input[type="text"]')?.value.trim();
      const phone = form.querySelector('input[type="tel"]')?.value.trim();
      const message = form.querySelector("textarea")?.value.trim() || "";

      if (!name || !phone) {
        alert("Заповніть ім’я та телефон");
        return;
      }

      const phoneNumber = "380953978287";

      const text = `👋 Новая заявка:
Имя: ${name}
Телефон: ${phone}
Сообщение: ${message}`;

      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

      window.open(url, "_blank");
    });
  }

  // =========================
  // MODAL
  // =========================
  const overlay = document.querySelector(".overlay");
  const closeBtn = document.querySelector(".close");
  const openButtons = document.querySelectorAll(".open-modal");

  if (overlay && closeBtn) {

    openButtons.forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        overlay.classList.add("active");
      });
    });

    closeBtn.addEventListener("click", () => {
      overlay.classList.remove("active");
    });

    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.classList.remove("active");
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        overlay.classList.remove("active");
      }
    });
  }

  // =========================
  // STATS COUNTER (SAFE)
  // =========================
  const counters = document.querySelectorAll(".stats__value");

  const animateCounter = (el) => {
    if (!el) return;

    const target = parseInt(el.dataset.target);
    if (isNaN(target)) return;

    let current = 0;
    const duration = 1500;
    const stepTime = Math.max(Math.floor(duration / target), 10);

    const timer = setInterval(() => {
      current++;

      if (el.textContent.includes("M")) {
        el.textContent = current + "M+";
      } else if (el.textContent.includes("%")) {
        el.textContent = current + "%";
      } else {
        el.textContent = current + "+";
      }

      if (current >= target) {
        clearInterval(timer);

        if (el.dataset.target === "45") el.textContent = "45M+";
        if (el.dataset.target === "120") el.textContent = "120+";
        if (el.dataset.target === "87") el.textContent = "87%";
      }
    }, stepTime);
  };

  const statsSection = document.querySelector(".stats");

  if (statsSection && counters.length) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          counters.forEach(counter => animateCounter(counter));
          obs.disconnect();
        }
      });
    }, { threshold: 0.5 });

    observer.observe(statsSection);
  }

  // =========================
  // SERVICE CARDS
  // =========================
  const serviceCards = document.querySelectorAll('.service-card');

  serviceCards.forEach(card => {
    const header = card.querySelector('.service-header');

    if (header) {
      header.addEventListener('click', (e) => {
        e.stopPropagation();
        card.classList.toggle('active');
      });
    }
  });

  // =========================
  // SCROLL ANIMATION (CASES + PROCESS)
  // =========================
  const animatedSections = document.querySelectorAll('.process, .cases');

  if (animatedSections.length) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('_visible');
        }
      });
    }, { threshold: 0.2 });

    animatedSections.forEach(section => {
      sectionObserver.observe(section);
    });
  }

  // =========================
  // MORE SECTIONS
  // =========================
  const moreSections = document.querySelectorAll('.transition, .benefits, .contact');

  if (moreSections.length) {
    const moreObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('_visible');
        }
      });
    }, { threshold: 0.2 });

    moreSections.forEach(section => {
      moreObserver.observe(section);
    });
  }

  // =========================
  // SERVICE REVEAL
  // =========================
  const serviceCards2 = document.querySelectorAll('.service-card');

  if (serviceCards2.length) {
    const servicesObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('_visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    serviceCards2.forEach(card => servicesObserver.observe(card));
  }

  // =========================
  // HEADER ANIMATION
  // =========================
  const header = document.querySelector("header");

  if (header) {
    setTimeout(() => {
      header.classList.add("_visible");
    }, 100);

    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("_scrolled");
      } else {
        header.classList.remove("_scrolled");
      }
    });
  }

  // =========================
  // HERO ANIMATION
  // =========================
  const heroItems = document.querySelectorAll('.hero__text, .hero__image');

  if (heroItems.length) {
    const heroObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('_visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    heroItems.forEach(el => heroObserver.observe(el));
  }

  // =========================
  // BURGER MENU
  // =========================
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');

  if (burger && nav) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('active');
      nav.classList.toggle('active');
    });
  }

});