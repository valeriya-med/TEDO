document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("#contactForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.querySelector('input[type="text"]').value.trim();
  const phone = form.querySelector('input[type="tel"]').value.trim();
  const message = form.querySelector("textarea").value.trim();

  if (!name || !phone) {
    alert("Заповніть ім’я та телефон");
    return;
  }

  // ТВОЙ номер WhatsApp (в международном формате без +)
  const phoneNumber = "380953978287";

 const text = `👋 Новая заявка:
Имя: ${name}
Телефон: ${phone}
Сообщение: ${message}`;

const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

window.open(url, "_blank");
});

  const overlay = document.querySelector(".overlay");
  const closeBtn = document.querySelector(".close");
  const openButtons = document.querySelectorAll(".open-modal");

  openButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault(); // щоб не скролило
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

    const counters = document.querySelectorAll(".stats__value");

  const animateCounter = (el) => {
    const target = parseInt(el.dataset.target);
    let current = 0;
    const duration = 1500; // 1.5 сек
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

        // финальные значения
        if (el.dataset.target === "45") el.textContent = "45M+";
        if (el.dataset.target === "120") el.textContent = "120+";
        if (el.dataset.target === "87") el.textContent = "87%";
      }
    }, stepTime);
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        counters.forEach(counter => animateCounter(counter));
        obs.disconnect(); // запускаем один раз
      }
    });
  }, { threshold: 0.5 });

  observer.observe(document.querySelector(".stats"));


document.querySelectorAll('.service-card').forEach(card => {
  const header = card.querySelector('.service-header');

  header.addEventListener('click', (e) => {
    e.stopPropagation();
    card.classList.toggle('active');
  });
});

const animatedSections = document.querySelectorAll('.process, .cases');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('_visible');
    }
  });
}, { threshold: 0.2 });

animatedSections.forEach(section => sectionObserver.observe(section));

const moreSections = document.querySelectorAll('.transition, .benefits, .contact');

const moreObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('_visible');
    }
  });
}, { threshold: 0.2 });

moreSections.forEach(section => moreObserver.observe(section));

// === services reveal ===
const serviceCards = document.querySelectorAll('.service-card');

const servicesObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('_visible');
      obs.unobserve(entry.target); // щоб не повторювалось
    }
  });
}, { threshold: 0.2 });

serviceCards.forEach(card => servicesObserver.observe(card));

// === HEADER reveal + scroll ===
const header = document.querySelector("header");

// появлення при загрузці
setTimeout(() => {
  header.classList.add("_visible");
}, 100);

// shrink при скролі
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("_scrolled");
  } else {
    header.classList.remove("_scrolled");
  }
});

const heroItems = document.querySelectorAll('.hero__text, .hero__image');

const heroObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('_visible');
      obs.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

heroItems.forEach(el => {
  heroObserver.observe(el);
});
});