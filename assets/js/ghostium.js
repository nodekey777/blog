(() => {
  const body = document.body;
  const drawer = document.getElementById('site-drawer');
  const opener = document.querySelector('[data-open-drawer]');
  const closeButtons = document.querySelectorAll('[data-close-drawer]');
  if (drawer && opener) {
    const closeDrawer = () => {
      body.classList.remove('drawer-open');
      opener.setAttribute('aria-expanded', 'false');
      drawer.setAttribute('aria-hidden', 'true');
      opener.focus();
    };
    opener.addEventListener('click', () => {
      body.classList.add('drawer-open');
      opener.setAttribute('aria-expanded', 'true');
      drawer.setAttribute('aria-hidden', 'false');
      drawer.querySelector('a, button')?.focus();
    });
    closeButtons.forEach(button => button.addEventListener('click', closeDrawer));
    drawer.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      body.classList.remove('drawer-open');
      opener.setAttribute('aria-expanded', 'false');
      drawer.setAttribute('aria-hidden', 'true');
    }));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && body.classList.contains('drawer-open')) closeDrawer();
      if (event.key === 'Tab' && body.classList.contains('drawer-open')) {
        const items = [...drawer.querySelectorAll('a, button')];
        const first = items[0];
        const last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    });
  }
  document.querySelectorAll('[data-share]').forEach(button => {
    button.addEventListener('click', async () => {
      const url = location.href;
      if (button.dataset.share === 'native' && navigator.share) {
        try { await navigator.share({title: document.title, url}); } catch (_) {}
        return;
      }
      if (navigator.clipboard?.writeText) {
        try {
          await navigator.clipboard.writeText(url);
          const oldText = button.textContent;
          button.textContent = 'Copied';
          setTimeout(() => { button.textContent = oldText; }, 1800);
        } catch (_) {
          window.prompt('Copy this link:', url);
        }
      } else {
        window.prompt('Copy this link:', url);
      }
    });
  });
})();
