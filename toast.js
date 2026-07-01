/**
 * ============================================
 * টোস্ট নোটিফিকেশন - প্রোফেশনাল
 * ফাইল: js/toast.js
 * ============================================
 */

(function() {
  'use strict';

  var toast = document.getElementById('toast');

  function showToast(msg, type) {
    if (!toast) {
      console.log('📢', msg);
      return;
    }
    type = type || 'success';
    
    // পুরনো ক্লাস রিমুভ
    toast.className = 'toast';
    
    // টেক্সট সেট
    toast.textContent = msg;
    
    // ফোর্স রিফ্লো
    void toast.offsetWidth;
    
    // শো ক্লাস যোগ
    toast.classList.add('show', type);
    
    // অটো হাইড
    clearTimeout(toast._timer);
    toast._timer = setTimeout(function() {
      toast.classList.remove('show');
    }, 3500);
  }

  window.showToast = showToast;
  console.log('✅ টোস্ট সিস্টেম রেডি!');
})();