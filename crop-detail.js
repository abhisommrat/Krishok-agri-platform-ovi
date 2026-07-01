/**
 * ============================================
 * ফসল ডিটেইলস পেজের JavaScript
 * ফাইল: js/crop-detail.js
 * ============================================
 */

// ============================================
// ফসল ডাটাবেস (শুধু ধানের জন্য)
// ============================================
var cropDetailsData = {
  5: {
    // ===== মৌলিক তথ্য =====
    name: 'ধান',
    emoji: '🌾',
    category: 'শস্য',
    season: 'আমন/বোরো',
    duration: '১৪০-১৫০ দিন',
    plowing: '৩-৪ বার',
    price: '৩২-৩৫ টাকা',
    district: 'সব জেলা',
    country: 'বাংলাদেশ',
    
    // ===== বিবরণ =====
    description: 'ধান বাংলাদেশের প্রধান খাদ্যশস্য। এটি দেশের প্রায় ৮০% কৃষক চাষ করে থাকেন। ধান থেকে ভাত ও চাল তৈরি হয় যা বাংলাদেশের মানুষের প্রধান খাদ্য।',
    
    // ===== পরিচর্যা =====
    care: 'জমি ভালোভাবে তৈরি করুন, বীজ শোধন করুন, নির্দিষ্ট মাত্রায় সার প্রয়োগ করুন। সময়মতো সেচ দিন এবং আগাছা পরিষ্কার রাখুন।',
    
    // ===== রোগ, নিরাময়, ঔষধ =====
    disease: 'ব্লাস্ট, লিফ স্পট, শীথ ব্লাইট, স্টেম বোরার',
    remedy: 'ছত্রাকনাশক ব্যবহার ও রোগ প্রতিরোধী জাত চাষ করুন। আক্রান্ত গাছ অপসারণ করুন।',
    medicine: 'ট্রাইসাইক্লাজল, কার্বেন্ডাজিম, থায়োমেথাজল',
    
    // ===== আগাছা =====
    weed: 'শ্যামা ঘাস, নলখাগড়া, চুই ঝাড়, পানিকচুরি',
    
    // ===== উপকারীতা ও অপকারীতা =====
    benefit: 'প্রধান খাদ্য, ভাত ও চাল উৎপাদন, আর্থিক উন্নয়ন, দেশের অর্থনীতিতে গুরুত্বপূর্ণ ভূমিকা',
    harm: 'অতিরিক্ত সেচে লবণাক্ততা ও মাটির উর্বরতা নষ্ট হয়। অতিরিক্ত কীটনাশক স্বাস্থ্যের জন্য ক্ষতিকর।',
    
    // ===== বাজারদর =====
    marketPrice: '৩৫-৪০ টাকা/কেজি (মোটা চাল), ৫০-৬০ টাকা/কেজি (পাতলা চাল)',
    
    // ===== জমি তৈরি ও চাষের তথ্য =====
    soilPrep: '৪-৫ বার চাষ দিয়ে জমি তৈরি করুন, জমি সমতল করুন, আগাছা পরিষ্কার করুন। জৈব সার প্রয়োগ করুন।',
    plowingCount: '৪-৫ বার',
    landCalc: 'প্রতি শতকে ৫-৬ কেজি বীজ (২৫-৩০ কেজি/বিঘা)',
    
    // ===== বেশি চাষ হয় =====
    highlight: 'সব জেলায় চাষ হয়, বিশেষ করে বগুড়া, রংপুর, কুমিল্লায় বেশি হয়।'
  }
};

// ============================================
// URL থেকে আইডি পাওয়া
// ============================================
function getCropId() {
  var params = new URLSearchParams(window.location.search);
  return params.get('id');
}

// ============================================
// ডিটেইলস রেন্ডার
// ============================================
function renderDetail() {
  var id = getCropId();
  var container = document.getElementById('detailContent');

  if (!container) {
    console.error('❌ detailContent এলিমেন্ট পাওয়া যায়নি!');
    return;
  }

  if (!id || !cropDetailsData[id]) {
    container.innerHTML = `
      <div class="not-found">
        <i class="fas fa-search"></i>
        <h2>ফসল খুঁজে পাওয়া যায়নি</h2>
        <p>আপনি যে ফসলটি খুঁজছেন তা আমাদের ডাটাবেসে নেই।</p>
        <a href="crops.html" class="btn btn-primary" style="margin-top:16px;">
          <i class="fas fa-arrow-left"></i> ফসলের তালিকায় ফিরে যান
        </a>
      </div>
    `;
    return;
  }

  var crop = cropDetailsData[id];

  // ============================================
  // হিরো সেকশন
  // ============================================
  var heroHtml = `
    <div class="detail-hero">
      <div class="emoji">${crop.emoji}</div>
      <div class="info">
        <h2>${crop.name}</h2>
        <div class="sub">
          <i class="fas fa-tag"></i> ${crop.category} &nbsp;|&nbsp; 
          <i class="fas fa-calendar-alt"></i> ${crop.season} &nbsp;|&nbsp;
          <i class="fas fa-map-marker-alt"></i> ${crop.district} &nbsp;|&nbsp;
          <i class="fas fa-globe"></i> ${crop.country}
        </div>
        ${crop.highlight ? <div class="highlight-badge"><i class="fas fa-star" style="color:#f5c542;"></i> ${crop.highlight}</div> : ''}
      </div>
    </div>
  `;

  // ============================================
  // ডিটেইলস গ্রিড
  // ============================================
  var detailsHtml = `
    <div class="detail-grid">
      <div class="detail-card"><div class="label">চাষের সময়</div><div class="value">${crop.duration}</div></div>
      <div class="detail-card"><div class="label">চাষের সংখ্যা</div><div class="value">${crop.plowing}</div></div>
      <div class="detail-card"><div class="label">বাজারদর</div><div class="value">${crop.marketPrice}</div></div>
      <div class="detail-card"><div class="label">জমির হিসাব</div><div class="value">${crop.landCalc}</div></div>
      <div class="detail-card"><div class="label">জমি তৈরি</div><div class="value">${crop.soilPrep}</div></div>
      <div class="detail-card"><div class="label">পরিচর্যা</div><div class="value">${crop.care}</div></div>
    </div>
  `;

  // ============================================
  // রোগ, নিরাময়, ঔষধ
  // ============================================
  var diseaseHtml = `
    <div class="detail-section" style="background:#f8f9fa; padding:20px; border-radius:var(--radius); margin-top:20px; border-left:4px solid #dc3545;">
      <h4 style="color:#dc3545;"><i class="fas fa-heartbeat"></i> রোগ, নিরাময় ও ঔষধ</h4>
      <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:15px; margin-top:10px;">
        <div><strong>রোগ:</strong> ${crop.disease}</div>
        <div><strong>নিরাময়:</strong> ${crop.remedy}</div>
        <div><strong>ঔষধ:</strong> ${crop.medicine}</div>
      </div>
    </div>
  `;

  // ============================================
  // আগাছা, উপকারীতা, অপকারীতা
  // ============================================
  var weedBenefitHtml = `
    <div class="detail-section" style="background:#e8f5e9; padding:20px; border-radius:var(--radius); margin-top:20px; border-left:4px solid #28a745;">
      <h4 style="color:#28a745;"><i class="fas fa-leaf"></i> আগাছা, উপকারীতা ও অপকারীতা</h4>
      <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:15px; margin-top:10px;">
        <div><strong>আগাছা:</strong> ${crop.weed}</div>
        <div><strong>উপকারীতা:</strong> ${crop.benefit}</div>
        <div><strong>অপকারীতা:</strong> ${crop.harm}</div>
      </div>
    </div>
  `;

  // ============================================
  // বিবরণ
  // ============================================
  var descHtml = `
    <div style="background:var(--white); padding:20px; border-radius:var(--radius); box-shadow:var(--shadow); margin-top:20px;">
      <h4 style="color:var(--primary);"><i class="fas fa-info-circle"></i> বিবরণ</h4>
      <p style="color:var(--text-light); font-size:1.05rem; line-height:1.8;">${crop.description}</p>
    </div>
  `;

  // ============================================
  // ব্যাক বাটন
  // ============================================
  var backHtml = `
    <div style="margin-top:25px;">
      <a href="crops.html" class="back-btn">
        <i class="fas fa-arrow-left"></i> ফসলের তালিকায় ফিরে যান
      </a>
    </div>
  `;

  // ============================================
  // পুরো HTML
  // ============================================
  container.innerHTML = heroHtml + detailsHtml + diseaseHtml + weedBenefitHtml + descHtml + backHtml;

  // ============================================
  // স্টাইল যোগ
  // ============================================
  var style = document.createElement('style');
  style.textContent = `
    .detail-hero {
      background: linear-gradient(135deg, var(--primary-dark), var(--primary), var(--primary-light));
      color: var(--white);
      padding: clamp(25px, 4vw, 40px);
      border-radius: var(--radius);
      margin-bottom: 30px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 20px;
    }
    .detail-hero .emoji { font-size: clamp(3.5rem, 8vw, 5rem); }
    .detail-hero .info { flex: 1; }
    .detail-hero .info h2 { font-size: clamp(1.8rem, 3.5vw, 2.6rem); margin-bottom: 4px; }
    .detail-hero .info .sub { opacity: 0.85; font-size: 1.05rem; }
    .detail-hero .info .highlight-badge { background: rgba(255,255,255,0.15); padding: 4px 16px; border-radius: 30px; display: inline-block; margin-top: 8px; font-size: 0.9rem; }
    .detail-grid { display: grid; gap: 15px; grid-template-columns: 1fr; }
    @media (min-width: 600px) { .detail-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (min-width: 992px) { .detail-grid { grid-template-columns: repeat(3, 1fr); } }
    .detail-card { background: var(--white); padding: 15px 18px; border-radius: var(--radius-sm); box-shadow: var(--shadow); border-left: 3px solid var(--secondary); }
    .detail-card .label { font-size: 0.75rem; color: var(--gray); font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }
    .detail-card .value { font-size: clamp(0.95rem, 1.2vw, 1.05rem); font-weight: 600; color: var(--primary); margin-top: 2px; }
    .back-btn { display: inline-flex; align-items: center; gap: 8px; background: var(--bg); color: var(--primary); padding: 10px 24px; border-radius: 50px; text-decoration: none; font-weight: 600; transition: var(--transition); }
    .back-btn:hover { background: var(--primary); color: var(--white); transform: scale(1.04); }
    .not-found { text-align: center; padding: 60px 20px; }
    .not-found i { font-size: 4rem; color: #ccc; display: block; margin-bottom: 12px; }
    .not-found h2 { color: var(--text-light); margin-bottom: 8px; }
    .not-found p { color: var(--gray); }
    .detail-section { background: var(--white) !important; }
    body.dark .detail-card { background: var(--white); }
    body.dark .detail-section { background: var(--white) !important; }
  `;
  document.head.appendChild(style);
}

// ============================================
// পেজ লোড হলে রেন্ডার
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  renderDetail();
  console.log('✅ ফসল ডিটেইলস পেজ লোড হয়েছে!');
});


/**
 * ============================================
 * ফসল ডিটেইলস পেজের JavaScript
 * ফাইল: js/crop-detail.js
 * ============================================
 */

// ============================================
// ফসল ডাটাবেস (ধান + গম)
// ============================================
var cropDetailsData = {
  5: {
    // ===== ধান =====
    name: 'ধান',
    emoji: '🌾',
    category: 'শস্য',
    season: 'আমন/বোরো',
    duration: '১৪০-১৫০ দিন',
    plowing: '৩-৪ বার',
    price: '৩২-৩৫ টাকা',
    district: 'সব জেলা',
    country: 'বাংলাদেশ',
    description: 'ধান বাংলাদেশের প্রধান খাদ্যশস্য। এটি দেশের প্রায় ৮০% কৃষক চাষ করে থাকেন। ধান থেকে ভাত ও চাল তৈরি হয় যা বাংলাদেশের মানুষের প্রধান খাদ্য।',
    care: 'জমি ভালোভাবে তৈরি করুন, বীজ শোধন করুন, নির্দিষ্ট মাত্রায় সার প্রয়োগ করুন। সময়মতো সেচ দিন এবং আগাছা পরিষ্কার রাখুন।',
    disease: 'ব্লাস্ট, লিফ স্পট, শীথ ব্লাইট, স্টেম বোরার',
    remedy: 'ছত্রাকনাশক ব্যবহার ও রোগ প্রতিরোধী জাত চাষ করুন। আক্রান্ত গাছ অপসারণ করুন।',
    medicine: 'ট্রাইসাইক্লাজল, কার্বেন্ডাজিম, থায়োমেথাজল',
    weed: 'শ্যামা ঘাস, নলখাগড়া, চুই ঝাড়, পানিকচুরি',
    benefit: 'প্রধান খাদ্য, ভাত ও চাল উৎপাদন, আর্থিক উন্নয়ন, দেশের অর্থনীতিতে গুরুত্বপূর্ণ ভূমিকা',
    harm: 'অতিরিক্ত সেচে লবণাক্ততা ও মাটির উর্বরতা নষ্ট হয়। অতিরিক্ত কীটনাশক স্বাস্থ্যের জন্য ক্ষতিকর।',
    marketPrice: '৩৫-৪০ টাকা/কেজি (মোটা চাল), ৫০-৬০ টাকা/কেজি (পাতলা চাল)',
    soilPrep: '৪-৫ বার চাষ দিয়ে জমি তৈরি করুন, জমি সমতল করুন, আগাছা পরিষ্কার করুন। জৈব সার প্রয়োগ করুন।',
    plowingCount: '৪-৫ বার',
    landCalc: 'প্রতি শতকে ৫-৬ কেজি বীজ (২৫-৩০ কেজি/বিঘা)',
    highlight: 'সব জেলায় চাষ হয়, বিশেষ করে বগুড়া, রংপুর, কুমিল্লায় বেশি হয়।'
  },

  7: {
    // ===== গম =====
    name: 'গম',
    emoji: '🌾',
    category: 'শস্য',
    season: 'রবি (শীতকাল)',
    duration: '১১০-১২০ দিন',
    plowing: '৩-৪ বার',
    price: '৩৮-৪২ টাকা',
    district: 'পাবনা, কুষ্টিয়া, যশোর, রাজশাহী, চুয়াডাঙ্গা',
    country: 'বাংলাদেশ',
    description: 'গম রুটির প্রধান উপাদান। শীতকালে বেশি চাষ হয়। গমের আটা দিয়ে রুটি, পরোটা ও নানা খাবার তৈরি হয়। বাংলাদেশে গমের চাষ দিন দিন বাড়ছে।',
    care: 'সঠিক সময়ে বীজ বপন করুন, সেচ নিয়ন্ত্রণ করুন। অতিরিক্ত সেচ দিলে গমের ফলন কমে যায়। জমিতে আগাছা পরিষ্কার রাখুন।',
    disease: 'রাস্ট, স্মাট, লিফ ব্লাইট, ফুসারিয়াম হেড ব্লাইট',
    remedy: 'ছত্রাকনাশক ব্যবহার করুন, রোগ প্রতিরোধী জাত চাষ করুন, ফসল আবর্তন করুন। আক্রান্ত গাছ অপসারণ করুন।',
    medicine: 'প্রপিকোনাজল, টিবুকোনাজল, কার্বেন্ডাজিম, ম্যানকোজেব',
    weed: 'শালগম, নলখাগড়া, চুই ঝাড়, যবনিকা',
    benefit: 'প্রধান খাদ্য, রুটি ও পরোটা তৈরি, আটা উৎপাদন, পশুখাদ্য, দেশের খাদ্য নিরাপত্তায় গুরুত্বপূর্ণ ভূমিকা',
    harm: 'অতিরিক্ত চাষে মাটি ক্ষয় হয়। অতিরিক্ত কীটনাশক পরিবেশের জন্য ক্ষতিকর। গমের প্রতি অতিরিক্ত নির্ভরতা দেশীয় ফসলের ক্ষতি করে।',
    marketPrice: '৩৮-৪২ টাকা/কেজি (আটা), ৪৫-৫০ টাকা/কেজি (গমের দানা)',
    soilPrep: 'গমের জন্য ৩-৪ বার চাষ দিয়ে জমি তৈরি করুন। জমি ভালোভাবে তৈরি করে বীজ বপন করুন। জৈব সার প্রয়োগ করুন। মাটি যেন জল-নিষ্কাশনের উপযুক্ত হয়।',
    plowingCount: '৩-৪ বার',
    landCalc: 'প্রতি শতকে ৪-৫ কেজি বীজ (২০-২৫ কেজি/বিঘা)',
    highlight: 'পাবনা, কুষ্টিয়া, যশোরে বেশি চাষ হয়।'
  }
};

// ============================================
// URL থেকে আইডি পাওয়া
// ============================================
function getCropId() {
  var params = new URLSearchParams(window.location.search);
  return params.get('id');
}

// ============================================
// ডিটেইলস রেন্ডার
// ============================================
function renderDetail() {
  var id = getCropId();
  var container = document.getElementById('detailContent');

  if (!container) {
    console.error('❌ detailContent এলিমেন্ট পাওয়া যায়নি!');
    return;
  }

  if (!id || !cropDetailsData[id]) {
    container.innerHTML = `
      <div class="not-found">
        <i class="fas fa-search"></i>
        <h2>ফসল খুঁজে পাওয়া যায়নি</h2>
        <p>আপনি যে ফসলটি খুঁজছেন তা আমাদের ডাটাবেসে নেই।</p>
        <a href="crops.html" class="btn btn-primary" style="margin-top:16px;">
          <i class="fas fa-arrow-left"></i> ফসলের তালিকায় ফিরে যান
        </a>
      </div>
    `;
    return;
  }

  var crop = cropDetailsData[id];

  // ============================================
  // হিরো সেকশন
  // ============================================
  var heroHtml = `
    <div class="detail-hero">
      <div class="emoji">${crop.emoji}</div>
      <div class="info">
        <h2>${crop.name}</h2>
        <div class="sub">
          <i class="fas fa-tag"></i> ${crop.category} &nbsp;|&nbsp; 
          <i class="fas fa-calendar-alt"></i> ${crop.season} &nbsp;|&nbsp;
          <i class="fas fa-map-marker-alt"></i> ${crop.district} &nbsp;|&nbsp;
          <i class="fas fa-globe"></i> ${crop.country}
        </div>
        ${crop.highlight ? <div class="highlight-badge"><i class="fas fa-star" style="color:#f5c542;"></i> ${crop.highlight}</div> : ''}
      </div>
    </div>
  `;

  // ============================================
  // ডিটেইলস গ্রিড
  // ============================================
  var detailsHtml = `
    <div class="detail-grid">
      <div class="detail-card"><div class="label">চাষের সময়</div><div class="value">${crop.duration}</div></div>
      <div class="detail-card"><div class="label">চাষের সংখ্যা</div><div class="value">${crop.plowing}</div></div>
      <div class="detail-card"><div class="label">বাজারদর</div><div class="value">${crop.marketPrice}</div></div>
      <div class="detail-card"><div class="label">জমির হিসাব</div><div class="value">${crop.landCalc}</div></div>
      <div class="detail-card"><div class="label">জমি তৈরি</div><div class="value">${crop.soilPrep}</div></div>
      <div class="detail-card"><div class="label">পরিচর্যা</div><div class="value">${crop.care}</div></div>
    </div>
  `;

  // ============================================
  // রোগ, নিরাময়, ঔষধ
  // ============================================
  var diseaseHtml = `
    <div class="detail-section" style="background:#f8f9fa; padding:20px; border-radius:var(--radius); margin-top:20px; border-left:4px solid #dc3545;">
      <h4 style="color:#dc3545;"><i class="fas fa-heartbeat"></i> রোগ, নিরাময় ও ঔষধ</h4>
      <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:15px; margin-top:10px;">
        <div><strong>রোগ:</strong> ${crop.disease}</div>
        <div><strong>নিরাময়:</strong> ${crop.remedy}</div>
        <div><strong>ঔষধ:</strong> ${crop.medicine}</div>
      </div>
    </div>
  `;

  // ============================================
  // আগাছা, উপকারীতা, অপকারীতা
  // ============================================
  var weedBenefitHtml = `
    <div class="detail-section" style="background:#e8f5e9; padding:20px; border-radius:var(--radius); margin-top:20px; border-left:4px solid #28a745;">
      <h4 style="color:#28a745;"><i class="fas fa-leaf"></i> আগাছা, উপকারীতা ও অপকারীতা</h4>
      <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:15px; margin-top:10px;">
        <div><strong>আগাছা:</strong> ${crop.weed}</div>
        <div><strong>উপকারীতা:</strong> ${crop.benefit}</div>
        <div><strong>অপকারীতা:</strong> ${crop.harm}</div>
      </div>
    </div>
  `;

  // ============================================
  // বিবরণ
  // ============================================
  var descHtml = `
    <div style="background:var(--white); padding:20px; border-radius:var(--radius); box-shadow:var(--shadow); margin-top:20px;">
      <h4 style="color:var(--primary);"><i class="fas fa-info-circle"></i> বিবরণ</h4>
      <p style="color:var(--text-light); font-size:1.05rem; line-height:1.8;">${crop.description}</p>
    </div>
  `;

  // ============================================
  // ব্যাক বাটন
  // ============================================
  var backHtml = `
    <div style="margin-top:25px;">
      <a href="crops.html" class="back-btn">
        <i class="fas fa-arrow-left"></i> ফসলের তালিকায় ফিরে যান
      </a>
    </div>
  `;

  // ============================================
  // পুরো HTML
  // ============================================
  container.innerHTML = heroHtml + detailsHtml + diseaseHtml + weedBenefitHtml + descHtml + backHtml;

  // ============================================
  // স্টাইল যোগ
  // ============================================
  var style = document.createElement('style');
  style.textContent = `
    .detail-hero {
      background: linear-gradient(135deg, var(--primary-dark), var(--primary), var(--primary-light));
      color: var(--white);
      padding: clamp(25px, 4vw, 40px);
      border-radius: var(--radius);
      margin-bottom: 30px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 20px;
    }
    .detail-hero .emoji { font-size: clamp(3.5rem, 8vw, 5rem); }
    .detail-hero .info { flex: 1; }
    .detail-hero .info h2 { font-size: clamp(1.8rem, 3.5vw, 2.6rem); margin-bottom: 4px; }
    .detail-hero .info .sub { opacity: 0.85; font-size: 1.05rem; }
    .detail-hero .info .highlight-badge { background: rgba(255,255,255,0.15); padding: 4px 16px; border-radius: 30px; display: inline-block; margin-top: 8px; font-size: 0.9rem; }
    .detail-grid { display: grid; gap: 15px; grid-template-columns: 1fr; }
    @media (min-width: 600px) { .detail-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (min-width: 992px) { .detail-grid { grid-template-columns: repeat(3, 1fr); } }
    .detail-card { background: var(--white); padding: 15px 18px; border-radius: var(--radius-sm); box-shadow: var(--shadow); border-left: 3px solid var(--secondary); }
    .detail-card .label { font-size: 0.75rem; color: var(--gray); font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }
    .detail-card .value { font-size: clamp(0.95rem, 1.2vw, 1.05rem); font-weight: 600; color: var(--primary); margin-top: 2px; }
    .back-btn { display: inline-flex; align-items: center; gap: 8px; background: var(--bg); color: var(--primary); padding: 10px 24px; border-radius: 50px; text-decoration: none; font-weight: 600; transition: var(--transition); }
    .back-btn:hover { background: var(--primary); color: var(--white); transform: scale(1.04); }
    .not-found { text-align: center; padding: 60px 20px; }
    .not-found i { font-size: 4rem; color: #ccc; display: block; margin-bottom: 12px; }
    .not-found h2 { color: var(--text-light); margin-bottom: 8px; }
    .not-found p { color: var(--gray); }
    .detail-section { background: var(--white) !important; }
    body.dark .detail-card { background: var(--white); }
    body.dark .detail-section { background: var(--white) !important; }
  `;
  document.head.appendChild(style);
}

// ============================================
// পেজ লোড হলে রেন্ডার
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  renderDetail();
  console.log('✅ ফসল ডিটেইলস পেজ লোড হয়েছে!');
});