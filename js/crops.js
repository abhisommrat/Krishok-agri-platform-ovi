/**
 * ============================================
 * ফসল পেজের JavaScript (জেলা ভিত্তিক)
 * ফাইল: js/crops.js
 * ============================================
 */

// ============================================
// ১. ফসল ডাটাবেস (জেলা + ফসল)
// ============================================
var cropData = [
  // ===== ঢাকা বিভাগ =====
  { id: 1, name: 'ধান', category: 'ধান', emoji: '🌾', season: 'আমন/বোরো', duration: '১৪০-১৫০ দিন', plowing: '৩-৪ বার', price: '৩২-৩৫ টাকা/কেজি', district: 'ঢাকা', description: 'ধান বাংলাদেশের প্রধান খাদ্যশস্য।' },
  { id: 2, name: 'টমেটো', category: 'শাকসবজি', emoji: '🍅', season: 'শীতকাল', duration: '৭০-৮০ দিন', plowing: '২-৩ বার', price: '৮০-১০০ টাকা/কেজি', district: 'ঢাকা', description: 'টমেটো ভিটামিন সি এর ভালো উৎস।' },
  { id: 3, name: 'গম', category: 'ধান', emoji: '🌾', season: 'শীতকালীন', duration: '১১০-১২০ দিন', plowing: '৩ বার', price: '৩৮-৪২ টাকা/কেজি', district: 'ঢাকা', description: 'গম রুটির প্রধান উপাদান।' },
  
  // ===== চট্টগ্রাম বিভাগ =====
  { id: 4, name: 'আলু', category: 'শাকসবজি', emoji: '🥔', season: 'শীতকাল', duration: '৮০-৯০ দিন', plowing: '৩-৪ বার', price: '২৮-৩৫ টাকা/কেজি', district: 'চট্টগ্রাম', description: 'আলু বাংলাদেশের অন্যতম প্রধান সবজি।' },
  { id: 5, name: 'কাঁচামরিচ', category: 'মসলা', emoji: '🌶️', season: 'গ্রীষ্মকাল', duration: '৬০-৭০ দিন', plowing: '২-৩ বার', price: '১২০-১৫০ টাকা/কেজি', district: 'চট্টগ্রাম', description: 'কাঁচামরিচ ঝালের জন্য বিখ্যাত।' },
  
  // ===== রাজশাহী বিভাগ =====
  { id: 6, name: 'পেঁয়াজ', category: 'মসলা', emoji: '🧅', season: 'শুষ্ক মৌসুম', duration: '১৫০-১৭০ দিন', plowing: '৪-৫ বার', price: '৫৫-৬৫ টাকা/কেজি', district: 'রাজশাহী', description: 'পেঁয়াজ রান্নার অপরিহার্য উপাদান।' },
  { id: 7, name: 'গম', category: 'ধান', emoji: '🌾', season: 'শীতকালীন', duration: '১১০-১২০ দিন', plowing: '৩ বার', price: '৩৮-৪২ টাকা/কেজি', district: 'রাজশাহী', description: 'রাজশাহীর গম অত্যন্ত উন্নত মানের।' },
  
  // ===== খুলনা বিভাগ =====
  { id: 8, name: 'ধান', category: 'ধান', emoji: '🌾', season: 'আমন/বোরো', duration: '১৪০-১৫০ দিন', plowing: '৩-৪ বার', price: '৩২-৩৫ টাকা/কেজি', district: 'খুলনা', description: 'খুলনার ধান অত্যন্ত উন্নত মানের।' },
  { id: 9, name: 'টমেটো', category: 'শাকসবজি', emoji: '🍅', season: 'শীতকাল', duration: '৭০-৮০ দিন', plowing: '২-৩ বার', price: '৮০-১০০ টাকা/কেজি', district: 'খুলনা', description: 'খুলনার টমেটো বিখ্যাত।' },
  
  // ===== বরিশাল বিভাগ =====
  { id: 10, name: 'কাঁচামরিচ', category: 'মসলা', emoji: '🌶️', season: 'গ্রীষ্মকাল', duration: '৬০-৭০ দিন', plowing: '২-৩ বার', price: '১২০-১৫০ টাকা/কেজি', district: 'বরিশাল', description: 'বরিশালের কাঁচামরিচ অত্যন্ত ঝাল।' },
  
  // ===== সিলেট বিভাগ =====
  { id: 11, name: 'চা', category: 'শাকসবজি', emoji: '🍃', season: 'সারা বছর', duration: 'সারা বছর', plowing: 'প্রয়োজন নেই', price: '৩০০-৫০০ টাকা/কেজি', district: 'সিলেট', description: 'সিলেটের চা বিশ্ববিখ্যাত।' },
  
  // ===== রংপুর বিভাগ =====
  { id: 12, name: 'আলু', category: 'শাকসবজি', emoji: '🥔', season: 'শীতকাল', duration: '৮০-৯০ দিন', plowing: '৩-৪ বার', price: '২৮-৩৫ টাকা/কেজি', district: 'রংপুর', description: 'রংপুরের আলু অত্যন্ত উন্নত মানের।' },
  
  // ===== ময়মনসিংহ বিভাগ =====
  { id: 13, name: 'ধান', category: 'ধান', emoji: '🌾', season: 'আমন/বোরো', duration: '১৪০-১৫০ দিন', plowing: '৩-৪ বার', price: '৩২-৩৫ টাকা/কেজি', district: 'ময়মনসিংহ', description: 'ময়মনসিংহের ধান অত্যন্ত উন্নত।' }
];

// ============================================
// ২. বাংলাদেশের ৬৪ জেলার তালিকা
// ============================================
var districts = [
  'ঢাকা', 'ফরিদপুর', 'গাজীপুর', 'গোপালগঞ্জ', 'কিশোরগঞ্জ', 'মাদারীপুর', 'মানিকগঞ্জ', 'মুন্সীগঞ্জ',
  'নারায়ণগঞ্জ', 'নরসিংদী', 'রাজবাড়ী', 'শরীয়তপুর', 'টাঙ্গাইল',
  'চট্টগ্রাম', 'বান্দরবান', 'ব্রাহ্মণবাড়িয়া', 'কক্সবাজার', 'কুমিল্লা', 'ফেনী', 'খাগড়াছড়ি',
  'লক্ষ্মীপুর', 'নোয়াখালী', 'রাঙ্গামাটি',
  'রাজশাহী', 'বগুড়া', 'চাঁপাইনবাবগঞ্জ', 'জয়পুরহাট', 'নওগাঁ', 'নাটোর', 'পাবনা', 'সিরাজগঞ্জ',
  'খুলনা', 'বাগেরহাট', 'চুয়াডাঙ্গা', 'যশোর', 'ঝিনাইদহ', 'কুষ্টিয়া', 'মাগুরা', 'মেহেরপুর',
  'নড়াইল', 'সাতক্ষীরা',
  'বরিশাল', 'বরগুনা', 'ভোলা', 'ঝালকাঠি', 'পটুয়াখালী', 'পিরোজপুর',
  'সিলেট', 'হবিগঞ্জ', 'মৌলভীবাজার', 'সুনামগঞ্জ',
  'রংপুর', 'দিনাজপুর', 'গাইবান্ধা', 'কুড়িগ্রাম', 'লালমনিরহাট', 'নীলফামারী', 'পঞ্চগড়', 'ঠাকুরগাঁও',
  'ময়মনসিংহ', 'জামালপুর', 'নেত্রকোণা', 'শেরপুর'
];

// ============================================
// ৩. ডিভিশন অনুযায়ী জেলা গ্রুপ
// ============================================
var districtGroups = {
  'ঢাকা': ['ঢাকা', 'ফরিদপুর', 'গাজীপুর', 'গোপালগঞ্জ', 'কিশোরগঞ্জ', 'মাদারীপুর', 'মানিকগঞ্জ', 'মুন্সীগঞ্জ', 'নারায়ণগঞ্জ', 'নরসিংদী', 'রাজবাড়ী', 'শরীয়তপুর', 'টাঙ্গাইল'],
  'চট্টগ্রাম': ['চট্টগ্রাম', 'বান্দরবান', 'ব্রাহ্মণবাড়িয়া', 'কক্সবাজার', 'কুমিল্লা', 'ফেনী', 'খাগড়াছড়ি', 'লক্ষ্মীপুর', 'নোয়াখালী', 'রাঙ্গামাটি'],
  'রাজশাহী': ['রাজশাহী', 'বগুড়া', 'চাঁপাইনবাবগঞ্জ', 'জয়পুরহাট', 'নওগাঁ', 'নাটোর', 'পাবনা', 'সিরাজগঞ্জ'],
  'খুলনা': ['খুলনা', 'বাগেরহাট', 'চুয়াডাঙ্গা', 'যশোর', 'ঝিনাইদহ', 'কুষ্টিয়া', 'মাগুরা', 'মেহেরপুর', 'নড়াইল', 'সাতক্ষীরা'],
  'বরিশাল': ['বরিশাল', 'বরগুনা', 'ভোলা', 'ঝালকাঠি', 'পটুয়াখালী', 'পিরোজপুর'],
  'সিলেট': ['সিলেট', 'হবিগঞ্জ', 'মৌলভীবাজার', 'সুনামগঞ্জ'],
  'রংপুর': ['রংপুর', 'দিনাজপুর', 'গাইবান্ধা', 'কুড়িগ্রাম', 'লালমনিরহাট', 'নীলফামারী', 'পঞ্চগড়', 'ঠাকুরগাঁও'],
  'ময়মনসিংহ': ['ময়মনসিংহ', 'জামালপুর', 'নেত্রকোণা', 'শেরপুর']
};

// ============================================
// ৪. DOM এলিমেন্ট
// ============================================
var cropGrid = document.getElementById('cropGrid');
var searchInput = document.getElementById('searchInput');
var districtFilter = document.getElementById('districtFilter');
var noResult = document.getElementById('noResult');
var searchTerm = document.getElementById('searchTerm');

// ============================================
// ৫. জেলা লোড
// ============================================
function loadDistricts() {
  if (!districtFilter) return;
  
  // অপশন যোগ
  districts.forEach(function(district) {
    var opt = document.createElement('option');
    opt.value = district;
    opt.textContent = district;
    districtFilter.appendChild(opt);
  });
}
loadDistricts();

// ============================================
// ৬. ফসল রেন্ডার
// ============================================
function renderCrops(crops) {
  if (!cropGrid) return;
  
  if (crops.length === 0) {
    cropGrid.innerHTML = '';
    if (noResult) noResult.style.display = 'block';
    return;
  }
  if (noResult) noResult.style.display = 'none';

  var html = '';
  for (var i = 0; i < crops.length; i++) {
    var crop = crops[i];
    html += `
      <div class="card crop-card">
        <div class="crop-image">${crop.emoji}</div>
        <h3 class="crop-name">${crop.name}</h3>
        <div class="crop-district"><i class="fas fa-map-marker-alt"></i> ${crop.district}</div>
        <div class="crop-tags">
          <span class="tag"><i class="fas fa-tag"></i> ${crop.category}</span>
          <span class="tag"><i class="fas fa-calendar-alt"></i> ${crop.season}</span>
        </div>
        <div class="crop-info">
          <span class="label">চাষের সময়:</span>
          <span class="value">${crop.duration}</span>
          <span class="label">চাষের সংখ্যা:</span>
          <span class="value">${crop.plowing}</span>
          <span class="label">দাম (প্রতি কেজি):</span>
          <span class="value">${crop.price}</span>
        </div>
        <p class="crop-description">${crop.description}</p>
        <div style="margin-top: auto; padding-top: 12px;">
          <a href="crop-detail.html?id=${crop.id}" class="btn btn-primary btn-sm">
            <i class="fas fa-eye"></i> বিস্তারিত
          </a>
        </div>
      </div>
    `;
  }
  cropGrid.innerHTML = html;
}

// ============================================
// ৭. ফিল্টার ফাংশন
// ============================================
function filterCrops() {
  if (!searchInput || !districtFilter) return;

  var query = searchInput.value.toLowerCase().trim();
  var district = districtFilter.value;

  var filtered = cropData;

  // নাম দিয়ে সার্চ
  if (query !== '') {
    filtered = [];
    for (var i = 0; i < cropData.length; i++) {
      var crop = cropData[i];
      if (crop.name.toLowerCase().indexOf(query) !== -1 || 
          crop.category.indexOf(query) !== -1 ||
          crop.description.indexOf(query) !== -1 ||
          crop.district.indexOf(query) !== -1) {
        filtered.push(crop);
      }
    }
  }

  // জেলা ফিল্টার
  if (district !== 'all') {
    var districtFiltered = [];
    for (var j = 0; j < filtered.length; j++) {
      if (filtered[j].district === district) {
        districtFiltered.push(filtered[j]);
      }
    }
    filtered = districtFiltered;
  }

  if (filtered.length === 0) {
    if (searchTerm) searchTerm.textContent = query || district;
    if (noResult) noResult.style.display = 'block';
    if (cropGrid) cropGrid.innerHTML = '';
  } else {
    if (noResult) noResult.style.display = 'none';
    renderCrops(filtered);
  }
}

// ============================================
// ৮. ইভেন্ট লিসেনার
// ============================================
if (searchInput) {
  searchInput.addEventListener('keyup', filterCrops);
  searchInput.addEventListener('search', function() {
    if (this.value === '') filterCrops();
  });
}

if (districtFilter) {
  districtFilter.addEventListener('change', filterCrops);
}

// ============================================
// ৯. ইনিশিয়াল রেন্ডার
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  renderCrops(cropData);
  console.log('✅ ফসল পেজ লোড হয়েছে!');
  console.log('🌾 মোট ফসল:', cropData.length);
  console.log('🗺️ মোট জেলা:', districts.length);
});