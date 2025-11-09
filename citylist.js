// عناصر البوب اب
const cityLink = document.querySelector('.header-left .city');
const cityPopup = document.getElementById('city-popup');
const overlay = document.getElementById('popup-overlay');
const cityOptions = document.querySelectorAll('.city-option');

// عند النقر على اسم المدينة في الهيدر
cityLink.addEventListener('click', function(e) {
  e.preventDefault();
  cityPopup.style.display = 'block';
  overlay.style.display = 'block';
});

// عند اختيار أي مدينة
cityOptions.forEach(option => {
  option.addEventListener('click', () => {
    cityPopup.style.display = 'none';
    overlay.style.display = 'none';
    cityLink.textContent = '📍 ' + option.textContent;
  });
});

// عند النقر على الخلفية لإغلاق البوب اب
overlay.addEventListener('click', () => {
  cityPopup.style.display = 'none';
  overlay.style.display = 'none';
});


// عناصر البوب أب للغة
const languageLink = document.querySelector('.language-selector');
const languagePopup = document.getElementById('language-popup');
const languageOverlay = document.getElementById('language-overlay');
const languageOptions = document.querySelectorAll('.language-option');

// عند النقر على "تغيير اللغة" في الهيدر
languageLink.addEventListener('click', function(e) {
  e.preventDefault();
  languagePopup.style.display = 'block';
  languageOverlay.style.display = 'block';
});

// عند اختيار أي لغة
languageOptions.forEach(option => {
  option.addEventListener('click', () => {
    languagePopup.style.display = 'none';
    languageOverlay.style.display = 'none';
    languageLink.textContent = '🌐 ' + option.textContent;
  });
});

// عند النقر على الخلفية لإغلاق البوب أب
languageOverlay.addEventListener('click', () => {
  languagePopup.style.display = 'none';
  languageOverlay.style.display = 'none';
});
