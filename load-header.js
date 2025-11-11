document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('header-container');
  if (!container) return console.error('header-container غير موجود.');

  const inlineHeaderTemplate = `
  <header>
    <div class="header-left">
        <a href="#" id="login-btn" style="color:#fff; text-decoration:none; display:none;">تسجيل دخول</a>
		<a href="#" id="logout-btn" class="action-icon logout" title="تسجيل خروج" style="display:none; color:#000;"> <i class="fas fa-sign-out-alt"></i></a>
        <a href="mystore.html" id="mystore-btn" style="text-decoration:none; color:#000; display:flex; align-items:center; gap:5px;">
          <img src="images/avatar.jpg" alt="Avatar" style="width:24px; height:24px; border-radius:50%;" />
          دخول لمتجري
        </a>
        <a href="index.html" id="home-btn" class="username" style="text-decoration:none; color:#000; display: none;">العودة للرئيسية</a>
        <a href="#" class="city" style="display: flex; align-items: center; gap: 5px; font-weight: 600;">
          <i class="fas fa-map-marker-alt" style="color: #800000;"></i>
          <span>مكة المكرمة</span>
        </a>
        <div class="menu-toggle"><i class="fas fa-bars"></i></div>
    </div>
    <div class="search-box">
      <input type="text" placeholder="ابحث عن عروض، متاجر، منتجات..." />
    </div>
    <div class="header-right">
      <a href="favorites.html" class="action-icon favorites" title="المفضلة"><i class="fas fa-bookmark"></i></a>
      <a href="price.html" class="action-icon prices" title="الأسعار"><i class="fas fa-dollar-sign"></i></a>
      <a href="notifications.html" class="action-icon notifications" style="position:relative;" title="الإشعارات">
          <i class="fas fa-bell"></i>
          <span class="badge red-badge" style="position:absolute; top:-8px; right:-8px; background-color: #dc3545; color:white; border-radius:50%; padding:2px 5px; font-size:10px; font-weight:bold; line-height:1; min-width:18px; text-align:center;">10</span>
      </a>
      <a href="messages.html" class="action-icon messages" title="الرسائل"><i class="fas fa-envelope"></i></a>
      <div class="language-selector" style="cursor:pointer;" title="اللغة"><i class="fas fa-globe"></i> En</div>
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
    return `<i class="fas fa-globe"></i> ${langCode}`;
  }

  if (location.pathname.includes('mystore.html')) mystoreBtn.style.display = 'none';
  if (location.pathname.endsWith('index.html') || location.pathname === '/' || location.pathname.endsWith('/')) homeBtn.style.display = 'none';

  function updateHeaderButtons() {
    if (isLoggedIn) {
      logoutBtn.style.display = 'inline-block';
      loginBtn.style.display = 'none';
      if(accountType === 'business') {
        mystoreBtn.style.display = location.pathname.includes('mystore.html') ? 'none' : 'inline-flex';
        mystoreBtn.href = 'mystore.html';
        mystoreBtn.textContent = 'دخول لمتجري';
      } else {
        mystoreBtn.style.display = 'inline-flex';
        mystoreBtn.href = 'myaccount.html';
        mystoreBtn.textContent = 'دخول لحسابي';
      }
    } else {
      logoutBtn.style.display = 'none';
      loginBtn.style.display = 'inline-block';
      mystoreBtn.style.display = 'none';
    }
    homeBtn.style.display = (location.pathname.endsWith('index.html') || location.pathname === '/' || location.pathname.endsWith('/')) ? 'none' : 'inline-block';
  }
  updateHeaderButtons();

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
});
