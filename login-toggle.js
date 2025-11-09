document.addEventListener('DOMContentLoaded', () => {

  const loginBtn = document.getElementById('login-btn');
  const userButtons = document.getElementById('user-buttons');

  const loginPopup = document.getElementById('login-popup');
  const loginOverlay = document.getElementById('login-overlay');
  const loginSubmit = document.getElementById('login-submit');
  const loginEmail = document.getElementById('login-email');

  const logoutPopup = document.getElementById('logout-popup');
  const logoutOverlay = document.getElementById('logout-overlay');
  const logoutYes = document.getElementById('logout-yes');
  const logoutNo = document.getElementById('logout-no');

  // ===== تسجيل الدخول =====
  loginBtn.addEventListener('click', e => {
    e.preventDefault();
    loginPopup.style.display = loginOverlay.style.display = 'block';
  });

  loginSubmit.addEventListener('click', () => {
    if(!loginEmail.value.trim()) return alert('يرجى إدخال بريدك الإلكتروني');
    loginPopup.style.display = loginOverlay.style.display = 'none';
    loginBtn.style.display = 'none';
    userButtons.style.display = 'flex';
  });

  loginOverlay.addEventListener('click', () => {
    loginPopup.style.display = loginOverlay.style.display = 'none';
  });

  // ===== تسجيل الخروج =====
  // هنا نستخدم delegation لأي زر داخل userButtons
  userButtons.addEventListener('click', e => {
    if(e.target && e.target.getAttribute('title') === 'تسجيل خروج') {
      e.preventDefault(); // يمنع إعادة تحميل الصفحة
      logoutPopup.style.display = logoutOverlay.style.display = 'block';
    }
  });

  logoutYes.addEventListener('click', () => {
    // مثال: إعادة توجيه بعد تسجيل الخروج
    window.location.href = 'index.html';
  });

  logoutNo.addEventListener('click', () => {
    logoutPopup.style.display = logoutOverlay.style.display = 'none';
  });

  logoutOverlay.addEventListener('click', () => {
    logoutPopup.style.display = logoutOverlay.style.display = 'none';
  });

});
