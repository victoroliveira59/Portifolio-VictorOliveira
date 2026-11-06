import { projetos } from "./projetos.js";

const navigation = document.querySelector("#navigation");
const backToTopButton = document.querySelector("#backToTopButton");
const toggle = document.querySelector("#sw-checkbox");
const projectsSection = document.querySelector("#projects .wrapper");

function init() {
  initTheme();

  if (projectsSection) {
    projetos(projectsSection);
  }

  initMobileMenu();
  initScrollReveal();

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

// Controle de Tema (Dark / Light) com localStorage e detecção de preferência do SO
function initTheme() {
  if (!toggle) return;

  const savedTheme = localStorage.getItem("theme");
  const prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;

  // Aplica tema: se salvo 'light' ou se sem preferência salva e SO é 'light'
  if (savedTheme === "light" || (!savedTheme && prefersLight)) {
    document.body.classList.add("light-mode");
    toggle.checked = true;
  } else {
    document.body.classList.remove("light-mode");
    toggle.checked = false;
  }

  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      document.body.classList.add("light-mode");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.remove("light-mode");
      localStorage.setItem("theme", "dark");
    }
  });

  // Escuta mudanças em tempo real na preferência do sistema operacional
  if (window.matchMedia) {
    window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", (e) => {
      if (!localStorage.getItem("theme")) {
        if (e.matches) {
          document.body.classList.add("light-mode");
          toggle.checked = true;
        } else {
          document.body.classList.remove("light-mode");
          toggle.checked = false;
        }
      }
    });
  }
}

function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();

  // Detecta se chegou ao fim da página (para ativar Contato com precisão)
  const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60;
  if (isBottom) {
    document.querySelectorAll(".menu a").forEach((el) => el.classList.remove("active"));
    const contactLinks = document.querySelectorAll('.menu a[href*="#contact"]');
    contactLinks.forEach((el) => el.classList.add("active"));
    return;
  }

  const sections = ["home", "about", "projects", "knowledge", "contact"];
  sections.forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      activateMenuAtCurrentSection(el);
    }
  });
}

function activateMenuAtCurrentSection(section) {
  const targetLine = window.scrollY + window.innerHeight / 2;
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;

  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;
  const sectionEndsAt = sectionTop + sectionHeight;
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;

  const sectionId = section.getAttribute("id");
  const menuElements = document.querySelectorAll(`.menu a[href*="#${sectionId}"]`);

  menuElements.forEach((el) => {
    if (sectionBoundaries) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}

function showNavOnScroll() {
  if (!navigation) return;
  if (window.scrollY > 20) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
}

function showBackToTopButtonOnScroll() {
  if (!backToTopButton) return;
  if (window.scrollY > 400) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

function initMobileMenu() {
  const openBtn = document.querySelector(".open-menu");
  const closeBtns = document.querySelectorAll(".close-menu, .close, .menu a");

  function openMenu() {
    document.body.classList.add("menu-expanded");
    if (openBtn) openBtn.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    document.body.classList.remove("menu-expanded");
    if (openBtn) openBtn.setAttribute("aria-expanded", "false");
  }

  if (openBtn) {
    openBtn.addEventListener("click", openMenu);
  }

  closeBtns.forEach((btn) => {
    btn.addEventListener("click", closeMenu);
  });

  // Fechar menu ao pressionar Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && document.body.classList.contains("menu-expanded")) {
      closeMenu();
    }
  });
}

function initScrollReveal() {
  if (typeof ScrollReveal === "undefined") return;

  // Respeita preferência por movimento reduzido
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const sr = ScrollReveal({
    origin: "bottom",
    distance: "25px",
    duration: 750,
    easing: "ease-out",
    reset: false
  });

  sr.reveal(
    `#home .col-a,
     #home .col-b,
     #about .col-a,
     #about .col-b,
     #about .highlight-card,
     #projects .section-header,
     #projects .project-card,
     #knowledge .section-header,
     #knowledge .card,
     #contact .col-a,
     #contact .col-b`,
    { interval: 70 }
  );
}
