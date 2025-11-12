document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('header-container');
  if (!container) return console.error('header-container غير موجود.');

  const inlineHeaderTemplate = `
  <header>
    <div class="header-left">
        <a href="#" id="login-btn" style="color:#fff; text-decoration:none; display:none;">تسجيل دخول</a>
        <a href="#" id="logout-btn" class="action-icon logout" title="تسجيل خروج" style="display:none; color:#000;"> <i class="fas fa-sign-out-alt"></i></a>
        <a href="mystore.html" id="mystore-btn" style="text-decoration:none; color:#000; display:flex; align-items:center; gap:5px;">
          <img src="images/avatar.jpg" class="mystore-avatar" />
          دخول لمتجري
        </a>
        <a href="index.html" id="home-btn" class="username" style="text-decoration:none; color:#000; display: none;">العودة للرئيسية</a>
        <a href="#" class="city" style="display: flex; align-items: center; gap: 5px; font-weight: 600;">
          <i class="fas fa-map-marker-alt" style="color: #800000;"></i>
          <span>مكة المكرمة</span>
        </a>
    </div>
<div class="search-box-v4" style="display:flex; align-items:center; border:1px solid #ccc; border-radius:12px; background:#fff; overflow:hidden; min-width:450px;">
  <input type="text" id="search-input-v4" placeholder="ابحث عن عروض، متاجر، منتجات..." style="border:none; outline:none; flex-grow:1; padding:10px 10px 10px 15px; background:none; border-radius:0;" />
  <button id="search-button-v4" style="background:#fafafa; border:none; border-radius:11 0px 0px 11; cursor:pointer; padding:10px 18px; margin:0; transition:background 0.3s; font-weight:bold; color:#800000; white-space:nowrap; flex-shrink:0;" title="بحث" onmouseover="this.style.background='#e0e0e0';" onmouseout="this.style.background='#fafafa';">ابحث الآن</button>
</div>


    <div class="header-right">
      <a href="favorites.html" class="action-icon favorites" title="المفضلة"><i class="fas fa-bookmark" style="font-size:20px;"></i></a>
      <a href="price.html" class="action-icon prices" title="الأسعار"><i class="fas fa-dollar-sign" style="font-size:20px;"></i></a>
      <a href="notifications.html" class="action-icon notifications" style="position:relative;" title="الإشعارات">
          <i class="fas fa-bell" style="font-size:20px;"></i>
          <span class="badge red-badge" style="position:absolute; top:-8px; right:-8px; background-color: #dc3545; color:white; border-radius:50%; padding:2px 5px; font-size:10px; font-weight:bold; line-height:1; min-width:18px; text-align:center;">10</span>
      </a>
      <a href="messages.html" class="action-icon messages" title="الرسائل"><i class="fas fa-envelope" style="font-size:20px;"></i></a>
      <div class="language-selector" style="cursor:pointer;" title="اللغة"><i class="fas fa-globe" style="font-size:20px;"></i> En</div>
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
  let accountType = localStorage.getItem('accountType') || 'business';

  function formatLangButton(langText) {
    const langCode = langText === 'العربية' ? 'ع' : 'En';
    return `<i class="fas fa-globe" style="font-size:20px;"></i> ${langCode}`;
  }

  function updateHeaderButtons() {
    const path = location.pathname;

    if (isLoggedIn) {
      logoutBtn.style.display = 'inline-block';
      loginBtn.style.display = 'none';
      if(accountType === 'business') {
        if(path.includes('mystore.html')) mystoreBtn.style.display = 'none';
        else {
          mystoreBtn.style.display = 'inline-flex';
          mystoreBtn.href = 'mystore.html';
          mystoreBtn.innerHTML = `<img src="images/avatar.jpg" class="mystore-avatar" /> دخول لمتجري`;
        }
      } else {
        if(path.includes('myaccount.html')) mystoreBtn.style.display = 'none';
        else {
          mystoreBtn.style.display = 'inline-flex';
          mystoreBtn.href = 'myaccount.html';
          mystoreBtn.innerHTML = `<img src="images/avatar.jpg" class="mystore-avatar" /> دخول لحسابي`;
        }
      }
    } else {
      logoutBtn.style.display = 'none';
      loginBtn.style.display = 'inline-block';
      loginBtn.textContent = 'تسجيل دخول';
      mystoreBtn.style.display = 'none';
    }

    homeBtn.style.display = (path.endsWith('index.html') || path === '/' || path.endsWith('/')) ? 'none' : 'inline-block';
  }
  updateHeaderButtons();

  const cities = ["مكة المكرمة", "المدينة النبوية", "الرياض", "جدة", "الدمام", "الخبر", "القصيم"];
  const cityModal = document.createElement('div');
  cityModal.style.cssText = 'display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5); justify-content:center; align-items:center; z-index:9999;';
  cityModal.innerHTML = `
    <div style="background:#fff; padding:20px; border-radius:10px; min-width:300px; text-align:center; position:relative; box-shadow:0 4px 12px rgba(0,0,0,0.2);">
      <span class="city-modal-close" style="position:absolute; top:10px; right:15px; cursor:pointer; font-size:20px;">&times;</span>
      <h2>المملكة العربية السعودية</h2>
      <div style="margin-top:15px;">
        ${cities.map(city => `<div class="city-option" style="padding:10px 0; cursor:pointer; font-weight:bold;">${city}</div>`).join('')}
      </div>
    </div>
  `;
  document.body.appendChild(cityModal);

  const cityClose = cityModal.querySelector('.city-modal-close');
  const cityOptions = cityModal.querySelectorAll('.city-option');

  cityBtn.addEventListener('click', e => { e.preventDefault(); cityModal.style.display = 'flex'; });
  cityClose.addEventListener('click', () => cityModal.style.display = 'none');
  cityOptions.forEach(option => {
    option.addEventListener('click', () => {
      const span = cityBtn.querySelector('span');
      if (span) span.textContent = option.textContent;
      cityModal.style.display = 'none';
      localStorage.setItem('selectedCity', option.textContent);
    });
  });
  cityModal.addEventListener('click', e => { if(e.target === cityModal) cityModal.style.display='none'; });
  const savedCity = localStorage.getItem('selectedCity');
  if(savedCity) {
    const span = cityBtn.querySelector('span');
    if (span) span.textContent = savedCity;
  }

  const languages = ["العربية", "English"];
  const langModal = document.createElement('div');
  langModal.style.cssText = 'display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5); justify-content:center; align-items:center; z-index:9999;';
  langModal.innerHTML = `
    <div style="background:#fff; padding:20px; border-radius:10px; min-width:200px; text-align:center; position:relative; box-shadow:0 4px 12px rgba(0,0,0,0.2);">
      <span class="lang-modal-close" style="position:absolute; top:10px; right:15px; cursor:pointer; font-size:20px;">&times;</span>
      <h2>تغيير اللغة</h2>
      <div style="margin-top:15px;">
        ${languages.map(lang => `<div class="lang-option" style="padding:10px 0; cursor:pointer; font-weight:bold;">${lang}</div>`).join('')}
      </div>
    </div>
  `;
  document.body.appendChild(langModal);

  const langClose = langModal.querySelector('.lang-modal-close');
  const langOptions = langModal.querySelectorAll('.lang-option');

  langBtn.addEventListener('click', () => { langModal.style.display = 'flex'; });
  langClose.addEventListener('click', () => langModal.style.display = 'none');
  langOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      langBtn.innerHTML = formatLangButton(opt.textContent);
      langModal.style.display = 'none';
      localStorage.setItem('selectedLang', opt.textContent);
    });
  });
  langModal.addEventListener('click', e => { if(e.target === langModal) langModal.style.display='none'; });
  const savedLang = localStorage.getItem('selectedLang');
  if(savedLang) langBtn.innerHTML = formatLangButton(savedLang);
  else langBtn.innerHTML = formatLangButton('English');

  const loginModal = document.createElement('div');
  loginModal.style.cssText = `display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5); justify-content:center; align-items:center; z-index:9999;`;
  loginModal.innerHTML = `
    <div style="background:#fff; padding:30px; border-radius:10px; min-width:300px; max-width:350px; text-align:center; position:relative; box-shadow:0 4px 12px rgba(0,0,0,0.2); word-wrap: break-word;">
      <span class="close-login" style="position:absolute; top:10px; right:15px; cursor:pointer; font-size:20px;">&times;</span>
      <p style="margin-bottom:20px; line-height:1.5;">
        هذه النافذة الخاصة بتسجيل الدخول او إنشاء حساب وتحتوي على حقل البريد الإلكتروني وحقل كلمة المرور
      </p>
      <p style="margin-bottom:10px; line-height:1.5;">اختر نوع الحساب:</p>
      <select id="account-type-select" style="width:90%; padding:8px; margin-bottom:20px; font-size:16px;">
        <option value="business">حساب تجاري</option>
        <option value="personal">حساب شخصي</option>
      </select>
      <button id="confirm-login" style="padding:8px 0; width:90%; background-color:#800000; color:#fff; border:none; border-radius:5px; font-size:16px; cursor:pointer;">تسجيل دخول</button>
    </div>
  `;
  document.body.appendChild(loginModal);

  loginBtn.addEventListener('click', e => { e.preventDefault(); loginModal.style.display = 'flex'; });
  loginModal.querySelector('.close-login').addEventListener('click', () => loginModal.style.display = 'none');
  loginModal.addEventListener('click', e => { if(e.target===loginModal) loginModal.style.display='none'; });
  loginModal.querySelector('#confirm-login').addEventListener('click', () => {
    const select = document.getElementById('account-type-select');
    accountType = select.value;
    localStorage.setItem('accountType', accountType);
    isLoggedIn = true;
    localStorage.setItem('isLoggedIn', 'true');
    updateHeaderButtons();
    loginModal.style.display = 'none';
  });

  const logoutModal = document.createElement('div');
  logoutModal.style.cssText = `display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5); justify-content:center; align-items:center; z-index:9999;`;
  logoutModal.innerHTML = `
    <div style="background:#fff; padding:20px; border-radius:10px; min-width:250px; text-align:center; position:relative; box-shadow:0 4px 12px rgba(0,0,0,0.2);">
      <span class="close-logout" style="position:absolute; top:10px; right:15px; cursor:pointer; font-size:20px;">&times;</span>
      <p>هل أنت متأكد من تسجيل الخروج؟</p>
      <button class="confirm-logout" style="padding:8px 0; width:40%; margin:5px; background-color:#800000; color:#fff; border:none; border-radius:5px; cursor:pointer;">نعم</button>
      <button class="cancel-logout" style="padding:10px 0; width:40%; margin:5px; background-color:#ccc; color:#000; border:none; border-radius:5px; cursor:pointer;">لا</button>
    </div>
  `;
  document.body.appendChild(logoutModal);

  logoutBtn.addEventListener('click', e => { e.preventDefault(); logoutModal.style.display = 'flex'; });
  logoutModal.querySelector('.close-logout').addEventListener('click', () => logoutModal.style.display='none');
  logoutModal.querySelector('.cancel-logout').addEventListener('click', () => logoutModal.style.display='none');
  logoutModal.querySelector('.confirm-logout').addEventListener('click', () => {
    isLoggedIn = false;
    localStorage.setItem('isLoggedIn', 'false');
    updateHeaderButtons();
    logoutModal.style.display = 'none';
    window.location.href = 'index.html';
  });

  const restrictedIcons = container.querySelectorAll('.notifications, .messages, .favorites');
  restrictedIcons.forEach(icon => {
    icon.addEventListener('click', e => {
      if (!isLoggedIn) {
        e.preventDefault();
        loginModal.style.display = 'flex';
      }
    });
  });

  const searchInput = container.querySelector('#search-input');
  const searchButton = container.querySelector('#search-button');

  function performSearchDemo() {
    const searchTerm = searchInput.value.trim() || 'نتائج البحث'; 
    const encodedSearchTerm = encodeURIComponent(searchTerm);
    window.location.href = `search.html?q=${encodedSearchTerm}`;
  }

  if (searchButton) {
    searchButton.addEventListener('click', performSearchDemo);
  }

  if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        performSearchDemo();
        e.preventDefault();
      }
    });
  }
});

// ==========================================================
// منطق قراءة كلمة البحث من الـ URL (يجب وضعه أيضاً في load-header.js أو ملف منفصل يتم تحميله)
// ==========================================================

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('search.html')) {
        function getQueryParam(param) {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(param);
        }

        const searchTerm = getQueryParam('q');
        const displayElement = document.getElementById('search-term-display');

        if (searchTerm && displayElement) {
            displayElement.innerHTML = `
                <h2 style="font-size: 26px; color: #333; margin: 0; display:flex; align-items:center;">
                    <i class="fas fa-search" style="font-size: 20px; color: #800000; margin-left: 10px;"></i>
                    نتائج البحث عن: <strong style="color: #800000; margin-right: 5px;">"${decodeURIComponent(searchTerm)}"</strong>
                </h2>
            `;
        } else if (displayElement) {
            displayElement.innerHTML = `
                <h2 style="font-size: 26px; color: #333; margin: 0;">عرض كل العروض والمنتجات</h2>
            `;
        }
    }
});