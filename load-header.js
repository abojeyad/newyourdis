document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('header-container');
  if (!container) return console.error('header-container غير موجود.');

  const inlineHeaderTemplate = `
  <header>
    <div class="header-right">
      <a href="#" id="logout-btn" style="color:#000; margin-left: 10px; text-decoration:none;">تسجيل خروج</a>
      <a href="#" id="login-btn" style="color:#fff; margin-left: 10px; text-decoration:none; display:none;">تسجيل دخول</a>
      <a href="index.html" id="home-btn" class="username" style="text-decoration:none; color:#000;">العودة للصفحة الرئيسية</a>
      <a href="mystore.html" id="mystore-btn" style="text-decoration:none; color:#000; margin-left:10px;">دخول متجري</a>
    </div>

    <div class="menu-toggle"><i class="fas fa-bars"></i></div>
    <div class="search-box"><input type="text" placeholder="استكشف أفضل العروض.." /></div>

    <div class="header-left">
      <a href="#" class="city">📍 مكة المكرمة</a>
      <a href="favorites.html" class="favorites">❤️ المفضلة</a>
      <div class="language-selector" style="cursor:pointer;">🌐 English</div>
      <a href="notifications.html" class="notifications">🔔 الإشعارات (10)</a>
      <a href="messages.html" class="messages">✉️ الرسائل (0)</a>
      <a href="price.html" class="messages">💰 الأسعار</a>
      <a href="index.html" class="logo"><img src="logo.png" alt="شعار المنصة" /></a>
    </div>
  </header>
  `;

  container.innerHTML = inlineHeaderTemplate;

  const logoutBtn = document.getElementById('logout-btn');
  const loginBtn = document.getElementById('login-btn');
  const mystoreBtn = document.getElementById('mystore-btn');
  const homeBtn = document.getElementById('home-btn');
  const cityBtn = container.querySelector('.city');
  const langBtn = container.querySelector('.language-selector');

  let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  if (location.pathname.includes('mystore.html')) mystoreBtn.style.display = 'none';
  if (location.pathname.endsWith('index.html') || location.pathname === '/') homeBtn.style.display = 'none';

  function updateHeaderButtons() {
    if (isLoggedIn) {
      logoutBtn.style.display = 'inline-block';
      loginBtn.style.display = 'none';
      mystoreBtn.style.display = location.pathname.includes('mystore.html') ? 'none' : 'inline-block';
    } else {
      logoutBtn.style.display = 'none';
      loginBtn.style.display = 'inline-block';
      mystoreBtn.style.display = 'none';
    }
    homeBtn.style.display = (location.pathname.endsWith('index.html') || location.pathname === '/') ? 'none' : 'inline-block';
  }
  updateHeaderButtons();

  logoutBtn.addEventListener('click', e => {
    e.preventDefault();
    isLoggedIn = false;
    localStorage.setItem('isLoggedIn', 'false');
    updateHeaderButtons();
    window.location.href = 'index.html';
  });

  loginBtn.addEventListener('click', e => {
    e.preventDefault();
    isLoggedIn = true;
    localStorage.setItem('isLoggedIn', 'true');
    updateHeaderButtons();
  });

  // --- نافذة اختيار المدينة ---
  const cities = ["مكة المكرمة", "المدينة النبوية", "الرياض", "جدة", "الدمام", "الخبر", "القصيم"];
  const cityModal = document.createElement('div');
  cityModal.className = 'city-modal';
  cityModal.style.cssText = `
    display:none;
    position:fixed;
    top:0; left:0; width:100%; height:100%;
    background:rgba(0,0,0,0.5);
    justify-content:center; align-items:center; z-index:9999;
  `;
  cityModal.innerHTML = `
    <div class="city-modal-content" style="
      background:#fff; padding:20px; border-radius:10px; min-width:300px;
      text-align:center; position:relative; box-shadow:0 4px 12px rgba(0,0,0,0.2);
    ">
      <span class="city-modal-close" style="position:absolute; top:10px; right:15px; cursor:pointer; font-size:20px;">&times;</span>
      <h2>المملكة العربية السعودية</h2>
      <div class="city-options" style="margin-top:15px;">
        ${cities.map(city => `<div class="city-option" style="padding:10px 0; cursor:pointer; font-weight:bold;">${city}</div>`).join('')}
      </div>
    </div>
  `;
  document.body.appendChild(cityModal);

  const cityClose = cityModal.querySelector('.city-modal-close');
  const cityOptions = cityModal.querySelectorAll('.city-option');

  cityBtn.addEventListener('click', e => {
    e.preventDefault();
    cityModal.style.display = 'flex';
  });

  cityClose.addEventListener('click', () => cityModal.style.display = 'none');
  cityOptions.forEach(option => {
    option.addEventListener('click', () => {
      cityBtn.textContent = `📍 ${option.textContent}`;
      cityModal.style.display = 'none';
      localStorage.setItem('selectedCity', option.textContent);
    });
  });
  cityModal.addEventListener('click', e => { if(e.target===cityModal) cityModal.style.display='none'; });
  const savedCity = localStorage.getItem('selectedCity');
  if(savedCity) cityBtn.textContent = `📍 ${savedCity}`;

  // --- نافذة اختيار اللغة ---
  const languages = ["العربية", "English"];
  const langModal = document.createElement('div');
  langModal.className = 'lang-modal';
  langModal.style.cssText = cityModal.style.cssText;
  langModal.innerHTML = `
    <div class="lang-modal-content" style="
      background:#fff; padding:20px; border-radius:10px; min-width:200px;
      text-align:center; position:relative; box-shadow:0 4px 12px rgba(0,0,0,0.2);
    ">
      <span class="lang-modal-close" style="position:absolute; top:10px; right:15px; cursor:pointer; font-size:20px;">&times;</span>
      <h2>اختر اللغة</h2>
      <div class="lang-options" style="margin-top:15px;">
        ${languages.map(lang => `<div class="lang-option" style="padding:10px 0; cursor:pointer; font-weight:bold;">${lang}</div>`).join('')}
      </div>
    </div>
  `;
  document.body.appendChild(langModal);

  const langClose = langModal.querySelector('.lang-modal-close');
  const langOptions = langModal.querySelectorAll('.lang-option');

  langBtn.addEventListener('click', () => langModal.style.display='flex');
  langClose.addEventListener('click', () => langModal.style.display='none');
  langOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      langBtn.textContent = `🌐 ${opt.textContent}`;
      langModal.style.display = 'none';
      localStorage.setItem('selectedLang', opt.textContent);
    });
  });
  langModal.addEventListener('click', e => { if(e.target===langModal) langModal.style.display='none'; });
  const savedLang = localStorage.getItem('selectedLang');
  if(savedLang) langBtn.textContent = `🌐 ${savedLang}`;
});
