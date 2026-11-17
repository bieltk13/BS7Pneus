/* BS7 — links do WhatsApp e menu móvel. Sem dependências externas. */
(() => {
  'use strict';
  const whatsapp = '5545999847448';
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  // Garante que os botões de cada serviço encaminhem uma mensagem específica.
  document.querySelectorAll('[data-service]').forEach((anchor) => {
    const service = anchor.dataset.service;
    const message = `Olá! Gostaria de consultar o serviço de ${service} para meu veículo.`;
    anchor.href = `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';
  });

  if (mobileToggle && mobileNav) {
    const closeMenu = () => {
      mobileToggle.setAttribute('aria-expanded', 'false');
      mobileToggle.setAttribute('aria-label', 'Abrir menu');
      mobileNav.hidden = true;
    };
    mobileToggle.addEventListener('click', () => {
      const opening = mobileNav.hidden;
      mobileNav.hidden = !opening;
      mobileToggle.setAttribute('aria-expanded', String(opening));
      mobileToggle.setAttribute('aria-label', opening ? 'Fechar menu' : 'Abrir menu');
    });
    mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
    document.addEventListener('click', e => {
      if (!mobileNav.hidden && !mobileNav.contains(e.target) && !mobileToggle.contains(e.target)) closeMenu();
    });
  }
})();
