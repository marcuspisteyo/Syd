(function () {
  'use strict';

  // Inject styles
  const style = document.createElement('style');
  style.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&display=swap');

    html, body {
      height: 100%;
      margin: 0;
    }

    #bp-embedded-webchat {
      width: 100vw;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      position: relative;
    }

    #syd-opening-card {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      box-sizing: border-box;
      background: #f8f8f9;
      z-index: 9999;
      font-family: 'DM Sans', sans-serif;
      transition: opacity 0.3s ease, transform 0.3s ease;
    }

    #syd-opening-card.syd-hidden {
      opacity: 0;
      pointer-events: none;
      transform: translateY(12px);
    }

    .syd-logo {
      width: 52px;
      height: 52px;
      margin-bottom: 1.25rem;
    }

    .syd-headline {
      font-size: 1rem;
      font-weight: 600;
      color: #2E333D;
      text-align: center;
      margin: 0 0 0.5rem 0;
      line-height: 1.4;
      max-width: 280px;
    }

    .syd-subline {
      font-size: 0.8rem;
      font-weight: 400;
      color: #696d83;
      text-align: center;
      margin: 0 0 2rem 0;
      line-height: 1.5;
      max-width: 260px;
    }

    .syd-paths {
      display: flex;
      flex-direction: column;
      gap: 0.65rem;
      width: 100%;
      max-width: 300px;
    }

    .syd-path-btn {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.85rem 1rem;
      background: #ffffff;
      border: 1.5px solid #dadbe0;
      border-radius: 10px;
      cursor: pointer;
      font-family: 'DM Sans', sans-serif;
      font-size: 0.82rem;
      font-weight: 500;
      color: #2E333D;
      text-align: left;
      transition: border-color 0.2s ease, background 0.2s ease, transform 0.15s ease;
      line-height: 1.3;
    }

    .syd-path-btn:hover {
      border-color: #FF5758;
      background: #fff5f5;
      transform: translateY(-1px);
    }

    .syd-path-btn:active {
      transform: translateY(0);
    }

    .syd-path-icon {
      font-size: 1.1rem;
      flex-shrink: 0;
    }

    .syd-path-label {
      flex: 1;
    }

    .syd-path-arrow {
      color: #c3c5cd;
      font-size: 0.9rem;
      flex-shrink: 0;
    }
  `;
  document.head.appendChild(style);

  // Create webchat container
  const webchatDiv = document.createElement('div');
  webchatDiv.id = 'bp-embedded-webchat';
  document.body.appendChild(webchatDiv);

  // Create opening card
  const card = document.createElement('div');
  card.id = 'syd-opening-card';
  card.innerHTML = `
    <img
      class="syd-logo"
      src="https://files.bpcontent.cloud/2025/04/08/21/20250408213406-XSILIIY6.jpeg"
      alt="Syd from Pisteyo"
      style="border-radius: 50%; object-fit: cover;"
    />
    <p class="syd-headline">Get a custom consulting asset built around your business.</p>
    <p class="syd-subline">Tell us where you are. We'll show you what's possible.</p>
    <div class="syd-paths">
      <button class="syd-path-btn" data-message="I'd like an AI Industry Intelligence Brief">
        <span class="syd-path-icon">🧠</span>
        <span class="syd-path-label">AI Industry Intelligence Brief</span>
        <span class="syd-path-arrow">›</span>
      </button>
      <button class="syd-path-btn" data-message="I'd like to see an AI App Prototype for my business">
        <span class="syd-path-icon">⚡</span>
        <span class="syd-path-label">AI App Prototype</span>
        <span class="syd-path-arrow">›</span>
      </button>
      <button class="syd-path-btn" data-message="I'd like an Organizational ROI Analysis">
        <span class="syd-path-icon">📊</span>
        <span class="syd-path-label">Organizational ROI Analysis</span>
        <span class="syd-path-arrow">›</span>
      </button>
    </div>
  `;
  webchatDiv.appendChild(card);

  // Handle button clicks — send message into Botpress and hide card
  card.querySelectorAll('.syd-path-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const message = btn.getAttribute('data-message');

      // Hide the opening card
      card.classList.add('syd-hidden');
      setTimeout(() => card.remove(), 350);

      // Wait for Botpress to be ready then send the message
      const trySend = setInterval(() => {
        if (window.botpress && typeof window.botpress.sendMessage === 'function') {
          clearInterval(trySend);
          window.botpress.sendMessage({ type: 'text', text: message });
        }
      }, 200);
    });
  });

  console.log('Syd opening card injected');
})();
