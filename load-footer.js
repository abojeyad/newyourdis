document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('footer-container');
  if (!container) return console.error('footer-container غير موجود في الصفحة.');

  const inlineFooterTemplate = `
  <style>
    footer {
      background-color: #f7f7f7; 
      padding: 20px 0;
      color: #333;
      box-sizing: border-box;
      width: 100%;
    }
    .footer-content { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
    .footer-top-row { display: flex; justify-content: space-between; align-items: center; padding: 20px 0; }
    .footer-links { display: flex; gap: 20px; font-size: 14px; color: #333; }
    .footer-links a { text-decoration: none; color: #333; transition: color 0.3s; white-space: nowrap; }
    .footer-links a:hover { color: #ff9800; }
    .footer-divider { border: none; border-top: 1px solid #ddd; margin: 0; }
    .footer-bottom-row { display: flex; justify-content: space-between; align-items: center; padding-top: 20px; font-size: 13px; flex-wrap: wrap; }
    .footer-copyright { color: #666; order: 1; }
    .footer-app-stores { display: flex; gap: 10px; order: 2; }
    .footer-app-stores .app-store-img { height: 35px; vertical-align: middle; }
    .footer-social-media { display: flex; gap: 15px; font-size: 18px; order: 3; }
    .footer-social-media a { color: #555; transition: color 0.3s; }
    .footer-social-media a:hover { color: #ff9800; }
    @media (max-width: 768px) {
      .footer-top-row { flex-direction: column; align-items: center; gap: 15px; }
      .footer-links { flex-wrap: wrap; justify-content: center; width: 100%; }
      .footer-bottom-row { flex-direction: column; align-items: center; text-align: center; gap: 15px; }
    }
  </style>

  <footer>
    <div class="footer-content">
      <div class="footer-top-row">
        <div class="footer-logo">
          <div class="logo"><img src="logo.png" alt="شعار المنصة" /></div>
        </div>
        <nav class="footer-links">
          <a href="#">من نحن</a>
          <a href="#">الخصوصية والأمان</a>
          <a href="#">مدونة يوردس</a>
          <a href="#">مركز المساعدة</a>
          <a href="#">تواصل معنا</a>
          <a href="#">وثائق API</a>
        </nav>
      </div>

      <hr class="footer-divider">

      <div class="footer-bottom-row">
        <div class="footer-copyright">
          © Yourdis 2025. All rights reserved.
        </div>
        <div class="footer-app-stores">
          <a href="#" class="app-store-link">
            <img src="images/app-store.png" alt="Download on the App Store" class="app-store-img">
          </a>
          <a href="#" class="app-store-link">
            <img src="images/google-play.png" alt="Get it on Google Play" class="app-store-img">
          </a>
        </div>
        <div class="footer-social-media">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-tiktok"></i></a>
        </div>
      </div>
    </div>
  </footer>
  `;

  container.innerHTML = inlineFooterTemplate;
});
