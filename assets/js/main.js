/**
* Template Name: Axis
* Template URL: https://bootstrapmade.com/axis-bootstrap-corporate-template/
* Updated: Sep 13 2025 with Bootstrap v5.3.8
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  if (!document.querySelector('#header')) return;

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();

/* Bakpia Wingko 505 interactions */
(() => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#primary-navigation");
  const navigationLinks = [...document.querySelectorAll(".navigation a")];
  const siteHeader = document.querySelector(".site-header");
  const productFilters = [...document.querySelectorAll(".product-filter")];
  const productCards = [...document.querySelectorAll(".product-card[data-category]")];
  const productDetailsToggles = [...document.querySelectorAll(".product-details-toggle")];
  const footerProductLinks = [...document.querySelectorAll(".footer-column a[data-filter]")];
  const faqToggles = [...document.querySelectorAll(".faq-question")];
  const testimonialTrack = document.querySelector("#testimonial-track");
  const testimonialControls = [...document.querySelectorAll(".testimonial-arrow")];
  const contactForm = document.querySelector("#contact-form");
  const formStatus = document.querySelector("#form-status");
  let openProductDetails = null;
  const sections = navigationLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const closeMenu = () => {
    navigation.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Buka menu navigasi");
    menuToggle.innerHTML = '<i class="bi bi-list" aria-hidden="true"></i>';
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") !== "true";
    navigation.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Tutup menu navigasi" : "Buka menu navigasi");
    menuToggle.innerHTML = isOpen
      ? '<i class="bi bi-x-lg" aria-hidden="true"></i>'
      : '<i class="bi bi-list" aria-hidden="true"></i>';
  });

  navigationLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  faqToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const answer = document.querySelector(`#${toggle.getAttribute("aria-controls")}`);
      if (!answer) return;

      const isExpanded = toggle.getAttribute("aria-expanded") !== "true";
      toggle.setAttribute("aria-expanded", String(isExpanded));
      answer.setAttribute("aria-hidden", String(!isExpanded));
      answer.inert = !isExpanded;
      toggle.closest(".faq-item").classList.toggle("is-open", isExpanded);
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      closeProductDetails();
    }
  });

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navigationLinks.forEach((link) => {
        const isCurrent = link.getAttribute("href") === `#${entry.target.id}`;
        link.classList.toggle("active", isCurrent);
        if (isCurrent) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-30% 0px -60% 0px" });

  sections.forEach((section) => sectionObserver.observe(section));

  const applyProductFilter = (selectedCategory) => {
    productFilters.forEach((button) => {
      const isActive = button.dataset.filter === selectedCategory;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    productCards.forEach((card) => {
      const matchesCategory = selectedCategory === "all" || card.dataset.category === selectedCategory;
      card.classList.toggle("is-filtered-out", !matchesCategory);
      card.classList.remove("is-highlighted");
    });
  };

  productFilters.forEach((filter) => {
    filter.addEventListener("click", () => applyProductFilter(filter.dataset.filter));
  });

  const closeProductDetails = () => {
    if (!openProductDetails) return;
    openProductDetails.popup.hidden = true;
    openProductDetails.toggle.setAttribute("aria-expanded", "false");
    openProductDetails.card.classList.remove("has-open-details");
    openProductDetails = null;
  };

  productDetailsToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const popup = document.querySelector(`#${toggle.getAttribute("aria-controls")}`);
      const card = toggle.closest(".product-card");
      if (!popup || !card) return;

      if (openProductDetails?.toggle === toggle) {
        closeProductDetails();
        return;
      }

      closeProductDetails();
      popup.hidden = false;
      toggle.setAttribute("aria-expanded", "true");
      card.classList.add("has-open-details");
      openProductDetails = { toggle, popup, card };
    });
  });

  document.addEventListener("click", (event) => {
    if (!openProductDetails) return;
    if (openProductDetails.popup.contains(event.target) || openProductDetails.toggle.contains(event.target)) return;
    closeProductDetails();
  });

  window.addEventListener("scroll", closeProductDetails, { passive: true });

  footerProductLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const selectedCategory = link.dataset.filter;
      const selectedFilter = productFilters.find((filter) => filter.dataset.filter === selectedCategory);
      if (!selectedFilter) return;

      event.preventDefault();
      applyProductFilter(selectedCategory);
      document.querySelector("#produk").scrollIntoView({ behavior: "smooth" });

      window.setTimeout(() => {
        productCards
          .filter((card) => card.dataset.category === selectedCategory)
          .forEach((card) => {
            card.classList.remove("is-highlighted");
            void card.offsetWidth;
            card.classList.add("is-highlighted");
          });
      }, 500);
    });
  });

  productCards.forEach((card) => {
    card.addEventListener("animationend", (event) => {
      if (event.animationName === "product-highlight") card.classList.remove("is-highlighted");
    });
  });

  if (testimonialTrack && testimonialControls.length) {
    const updateTestimonialControls = () => {
      const isAtStart = testimonialTrack.scrollLeft <= 5;
      const isAtEnd = testimonialTrack.scrollLeft + testimonialTrack.clientWidth >= testimonialTrack.scrollWidth - 5;

      testimonialControls.forEach((button) => {
        const isHidden = button.dataset.direction === "previous" ? isAtStart : isAtEnd;
        button.classList.toggle("is-hidden", isHidden);
        button.setAttribute("aria-hidden", String(isHidden));
        button.disabled = isHidden;
      });
    };

    testimonialControls.forEach((button) => {
      button.addEventListener("click", () => {
        const firstCard = testimonialTrack.querySelector(".review-card");
        const trackStyles = getComputedStyle(testimonialTrack);
        const gap = Number.parseFloat(trackStyles.columnGap) || 0;
        const distance = firstCard.getBoundingClientRect().width + gap;
        testimonialTrack.scrollBy({
          left: button.dataset.direction === "next" ? distance : -distance,
          behavior: "smooth",
        });
        updateTestimonialControls();
      });
    });

    testimonialTrack.addEventListener("scroll", updateTestimonialControls, { passive: true });
    window.addEventListener("resize", updateTestimonialControls);
    updateTestimonialControls();
  }

  let lastScrollTop = window.scrollY;
  window.addEventListener("scroll", () => {
    const currentScrollTop = window.scrollY;

    if (currentScrollTop <= 10 || currentScrollTop < lastScrollTop) {
      siteHeader.classList.remove("is-compact");
    } else if (currentScrollTop > lastScrollTop) {
      siteHeader.classList.add("is-compact");
    }

    lastScrollTop = currentScrollTop;
  }, { passive: true });

  const setFormStatus = (message, status) => {
    formStatus.textContent = message;
    formStatus.classList.toggle("is-success", status === "success");
    formStatus.classList.toggle("is-error", status === "error");
    formStatus.hidden = false;
  };

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) {
      setFormStatus("❌ Gagal mengirim pesan. Pastikan semua kolom terisi dengan benar dan coba lagi.", "error");
      return;
    }

    const submitButton = contactForm.querySelector('[type="submit"]');
    submitButton.disabled = true;
    formStatus.hidden = true;

    try {
      const response = await fetch(contactForm.action, {
        method: contactForm.method,
        body: new FormData(contactForm),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        setFormStatus("❌ Gagal mengirim pesan. Pastikan semua kolom terisi dengan benar dan coba lagi.", "error");
        return;
      }

      contactForm.reset();
      setFormStatus("✅ Pesan Anda berhasil terkirim! Tim Bakpia Wingko 505 akan segera merespons email Anda.", "success");
    } catch (error) {
      setFormStatus("❌ Gagal mengirim pesan. Pastikan semua kolom terisi dengan benar dan coba lagi.", "error");
    } finally {
      submitButton.disabled = false;
    }
  });
})();
