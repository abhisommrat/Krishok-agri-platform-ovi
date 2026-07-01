/**
 * ============================================
 * পেজ ট্রানজিশন - প্রোফেশনাল
 * ফাইল: js/page-transition.js
 * ============================================
 */

(function() {
  'use strict';

  // ওভারলে তৈরি
  var overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--primary);
    z-index: 99999;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.5s ease;
  `;
  document.body.appendChild(overlay);

  // লোডিং স্পিনার যোগ
  var spinner = document.createElement('div');
  spinner.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100000;
    opacity: 0;
    transition: opacity 0.5s ease;
    pointer-events: none;
  `;
  spinner.innerHTML = `
    <div style="
      width: 50px;
      height: 50px;
      border: 4px solid rgba(255,255,255,0.1);
      border-top: 4px solid var(--secondary);
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    "></div>
    <style>
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    </style>
  `;
  document.body.appendChild(spinner);

  // পেজ লোড হলে
  window.addEventListener('load', function() {
    // লোডিং শেষ
    spinner.style.opacity = '0';
    overlay.style.opacity = '0';
    
    setTimeout(function() {
      overlay.style.display = 'none';
      spinner.style.display = 'none';
    }, 500);
  });

  // নেভিগেশন লিংকে ক্লিক
  document.querySelectorAll('nav a, .logo, .btn').forEach(function(link) {
    link.addEventListener('click', function(e) {
      var href = this.getAttribute('href');
      if (href && href.startsWith('http')) return;
      
      // শুধু অভ্যন্তরীণ লিংক
      var isInternal = href && !href.startsWith('#') && !href.startsWith('http') && href !== 'javascript:void(0)';
      
      if (isInternal && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        
        overlay.style.display = 'block';
        spinner.style.display = 'block';
        overlay.style.opacity = '0.6';
        spinner.style.opacity = '1';
        
        setTimeout(function() {
          window.location.href = href;
        }, 400);
      }
    });
  });

  console.log('✅ পেজ ট্রানজিশন রেডি!');
})();