(function() {
    'use strict';
    
    // Create and inject styles
    const style = document.createElement('style');
    style.textContent = `
      html, body {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      background: #ffffff;
    }

    #bp-embedded-webchat {
      width: 100%;
      height: 100%;
      min-height: 600px;
      display: flex;
      align-items: stretch;
      justify-content: stretch;
      box-sizing: border-box;
      background: #ffffff;
    }
  `;
    document.head.appendChild(style);
    
    // Create webchat container
    const webchatDiv = document.createElement('div');
    webchatDiv.id = 'bp-embedded-webchat';
    document.body.appendChild(webchatDiv);
    
    console.log('Webchat container and styles injected');
})();
