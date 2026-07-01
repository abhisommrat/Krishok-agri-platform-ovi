/**
 * ============================================
 * ব্যাক টু টপ - প্রোফেশনাল
 * ফাইল: js/back-to-top.js
 * ============================================
 */

(function() {
  'use strict';

  // বাটন তৈরি
  var btn = document.createElement('button');
  btn.className = 'back-to-top';
  btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  btn.setAttribute('aria-label', 'শীর্ষে যান');
  document.body.appendChild(btn);

  // স্ক্রল ইভেন্ট
  var lastScrollY = 0;
  var ticking = false;

  function updateButton() {
    var scrollY = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollY > 300) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
    
    ticking = false;
  }

  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        updateButton();
      });
      ticking = true;
    }
  });

  // ক্লিক ইভেন্ট
  btn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  console.log('✅ ব্যাক টু টপ বাটন রেডি!');
})();