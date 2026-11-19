// Stand-ins for Squarespace built-ins: mobile header menu (closes after a tap), and the demo (Accordion block + images).
const b = document.querySelector('.burger'), n = document.getElementById('nv');
if (b && n) {
  b.onclick = () => {
    const o = n.classList.toggle('open');
    b.setAttribute('aria-expanded', o);
  };
  n.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    n.classList.remove('open');
    b.setAttribute('aria-expanded', 'false');
  }));
}

document.querySelectorAll('.qi > button').forEach(btn => btn.addEventListener('click', () => {
  const qi = btn.parentElement, wide = matchMedia('(min-width:901px)').matches, was = qi.classList.contains('on');
  document.querySelectorAll('.qi').forEach(x => {
    x.classList.remove('on');
    x.firstElementChild.setAttribute('aria-expanded', 'false');
  });
  if (wide || !was) {
    qi.classList.add('on');
    btn.setAttribute('aria-expanded', 'true');
  }
}));

// Offer buttons preselect the form's "I'm interested in" field
const sel = document.getElementById('ft');
document.querySelectorAll('[data-interest]').forEach(a => a.addEventListener('click', () => {
  if (sel) sel.value = a.dataset.interest;
}));

// ==========================================================================
// FLOATING BACKDROP PREVIEW SWITCHER (Warm Beige, Soft Gray, Crisp White)
// ==========================================================================
(function() {
  const defaultTheme = 'warm-beige';
  const validThemes = ['warm-beige', 'soft-gray', 'crisp-white'];

  function getStoredTheme() {
    try {
      const stored = localStorage.getItem('bfd-backdrop-theme');
      return validThemes.includes(stored) ? stored : defaultTheme;
    } catch (e) {
      return defaultTheme;
    }
  }

  function setBackdropTheme(theme) {
    if (!validThemes.includes(theme)) theme = defaultTheme;
    document.documentElement.setAttribute('data-theme', theme);
    if (document.body) {
      document.body.setAttribute('data-theme', theme);
    }
    try {
      localStorage.setItem('bfd-backdrop-theme', theme);
    } catch (e) {}

    // Update active button state
    document.querySelectorAll('.tsp-btn').forEach(btn => {
      const isMatch = btn.getAttribute('data-theme-target') === theme;
      btn.classList.toggle('active', isMatch);
      btn.setAttribute('aria-checked', isMatch ? 'true' : 'false');
    });
  }

  // Apply initially as early as possible
  const currentTheme = getStoredTheme();
  setBackdropTheme(currentTheme);

  // Setup click listeners when DOM is loaded
  function initSwitcher() {
    document.querySelectorAll('.tsp-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTheme = btn.getAttribute('data-theme-target');
        if (targetTheme) {
          setBackdropTheme(targetTheme);
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSwitcher);
  } else {
    initSwitcher();
  }
})();
