(function () {
  const style = document.createElement('style');
  style.textContent = `
    html, body, #bp-embedded-webchat {
      margin: 0;
      width: 100%;
      height: 100%;
      background: #ffffff !important;
      opacity: 1 !important;
    }
  `;
  document.head.appendChild(style);

  let el = document.getElementById('bp-embedded-webchat');
  if (!el) {
    el = document.createElement('div');
    el.id = 'bp-embedded-webchat';
    document.body.appendChild(el);
  }

  // Override fullscreen script background changes
  setTimeout(() => {
    document.body.style.background = '#ffffff';
    el.style.background = '#ffffff';
  }, 0);
})();
