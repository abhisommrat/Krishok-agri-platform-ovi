/**
 * ============================================
 * ডার্ক মোড - প্রোফেশনাল
 * ফাইল: js/dark-mode.js
 * ============================================
 */

(function() {
  'use strict';

  var toggleBtn = document.getElementById('darkToggle');
  var body = document.body;

  function toggleDark() {
    body.classList.toggle('dark');
    var isDark = body.classList.contains('dark');
    localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
    updateBtnUI(isDark);
    
    // অ্যানিমেশন ইফেক্ট
    if (isDark) {
      document.dispatchEvent(new CustomEvent('darkModeOn'));
    } else {
      document.dispatchEvent(new CustomEvent('darkModeOff'));
    }
    
    console.log(isDark ? '🌙 ডার্ক মোড চালু' : '☀️ ডার্ক মোড বন্ধ');
  }

  function updateBtnUI(isDark) {
    if (!toggleBtn) return;
    if (isDark) {
      toggleBtn.innerHTML = '<i class="fas fa-sun"></i> <span>লাইট</span>';
    } else {
      toggleBtn.innerHTML = '<i class="fas fa-moon"></i> <span>ডার্ক</span>';
    }
  }

  function loadDark() {
    try {
      var saved = localStorage.getItem('darkMode');
      if (saved === 'enabled') {
        body.classList.add('dark');
        updateBtnUI(true);
      } else {
        body.classList.remove('dark');
        updateBtnUI(false);
      }
    } catch (e) {}
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleDark);
  }

  document.addEventListener('DOMContentLoaded', loadDark);

  window.toggleDark = toggleDark;
  window.loadDark = loadDark;

  console.log('✅ ডার্ক মোড সিস্টেম রেডি!');
})();