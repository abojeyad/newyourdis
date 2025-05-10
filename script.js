// مصفوفة صور المنتجات
const images = [
  'images/products/image1.jpg',
  'images/products/image2.jpg',
  'images/products/image3.jpg',
  'images/products/image4.jpg',
  'images/products/image5.jpg',
  'images/products/image6.jpg',
  'images/products/image7.jpg',
  'images/products/image8.jpg',
  'images/products/image9.jpg',
  'images/products/image10.jpg'
];


  // مصفوفة أسماء المنتجات
  const productNames = [
    "بنطال رسمي واسع بخصر متوسط",
    "قميص قطني بأكمام قصيرة",
    "حذاء رياضي مريح",
    "سترة جلدية أنيقة",
    "حقيبة يد جلدية صغيرة",
    "نظارة شمسية عصرية",
    "ساعة يد كلاسيكية",
    "شورت صيفي خفيف",
    "فستان سهرة طويل",
    "قميص بولو بألوان متعددة"
  ];

  // مصفوفة أسماء المتاجر لكل منتج
  const productStoreNames = [
    "أمازون",
    "نون",
    "جوميا",
    "سوق.كوم",
    "نمشي",
    "شتاء ودفء",
    "اقتنِِِ",
    "تشارم",
    "إكسترا",
    "لولو"
  ];

  // مصفوفة بيانات المتاجر المميزة (الاسم + رابط الصورة)
  const featuredStores = [
    { name: "أمازون",    image: "images/stores-images/store1.jpg" },
    { name: "نون",      image: "images/stores-images/store2.jpg" },
    { name: "جوميا",    image: "images/stores-images/store3.jpg" },
    { name: "سوق.كوم",  image: "images/stores-images/store4.jpg" },
    { name: "نمشي",     image: "images/stores-images/store5.jpg" },
    { name: "شتاء ودفء", image: "images/stores-images/store6.jpg" },
    { name: "اقتنِِِ",    image: "images/stores-images/store7.jpg" },
    { name: "تشارم",     image: "images/stores-images/store8.jpg" },
    { name: "إكسترا",    image: "images/stores-images/store9.jpg" },
    { name: "لولو",      image: "images/stores-images/store10.jpg" }
  ];

  // مصفوفة صور الإعلانات
  const adsImages = [
    'images/ads/ad1.jpg',
    'images/ads/ad2.jpg',
    'images/ads/ad3.jpg',
    'images/ads/ad4.jpg',
    'images/ads/ad5.jpg',
    'images/ads/ad6.jpg',
    'images/ads/ad7.jpg',
    'images/ads/ad8.jpg',
    'images/ads/ad9.jpg',
    'images/ads/ad10.jpg'
  ];

  // محتوى نصوص الإعلانات
  const adTitles = [
    "احصل على خصم 50%",
    "عروض الصيف بدأت",
    "منتجات جديدة وصلت",
    "عرض لفترة محدودة",
    "اشترِ 1 واحصل على 2",
    "تخفيضات رمضان",
    "شحن مجاني",
    "هدية مع كل طلب",
    "خصومات بلا حدود",
    "عروض نهاية الأسبوع"
  ];
  const adDescriptions = [
    "وفر الكثير مع خصوماتنا الحصرية. العرض ساري حتى نفاد الكمية.",
    "تسوق الآن وتمتع بتخفيضات تصل إلى 70٪.",
    "اكتشف تشكيلتنا الجديدة لأحدث المنتجات.",
    "لا تفوت هذا العرض الرائع لفترة محدودة فقط.",
    "احصل على المزيد مقابل أقل مع عرضنا الحصري.",
    "استعد لأفضل التخفيضات خلال شهر رمضان المبارك.",
    "شحن مجاني لجميع الطلبات فوق 200 ريال.",
    "استلم هدية مجانية عند كل عملية شراء.",
    "خصومات كبرى على آلاف المنتجات.",
    "انتهز الفرصة قبل انتهاء العرض!"
  ];

  // دالة جلب صورة منتج عشوائية
  function getRandomImage() {
    return images[Math.floor(Math.random() * images.length)];
  }

  // قالب بطاقة المنتج بعد إضافة اسم المتجر واسم المنتج الديناميكي
  const productCardHTML = `
    <div class="product-card">
      <div class="product-image">
        <div class="product-header">
          <div class="favorite-icon"><i class="far fa-bookmark"></i></div>
          <div class="countdown-timer">18:34:50</div>
        </div>
        <img src="" alt="منتج" class="product-img">
      </div>
      <div class="product-info">
        <div class="product-store-name"></div>
        <div class="product-name"></div>
        <div class="pricing">
          <span class="old-price">500 ريال</span>
          <span class="discount-percentage">-20%</span>
          <span class="new-price">400 ريال</span>
        </div>
      </div>
      <button class="order-now-btn">
        اطلب الآن <i class="fas fa-external-link-alt"></i>
      </button>
    </div>
  `;

  // المراجع للأقسام في الصفحة
  const offersContainer       = document.getElementById("offers");
  const storesContainer       = document.getElementById("stores");
  const recommendedContainer  = document.getElementById("offers-recommended");
  const adsSection            = document.getElementById("ads-section");
  const selectedContainer     = document.getElementById("offers-selected");

  // دالة إنشاء بطاقات المنتجات وربط الصور، الأسماء والمتاجر
  function createProductCards(container, count) {
    for (let i = 0; i < count; i++) {
      const productCard = document.createElement('div');
      productCard.innerHTML = productCardHTML;

      // ضبط صورة المنتج
      const productImg = productCard.querySelector('.product-img');
      productImg.src = getRandomImage();

      // ضبط اسم المتجر
      const storeNameEl = productCard.querySelector('.product-store-name');
      storeNameEl.textContent = productStoreNames[i % productStoreNames.length];

      // ضبط اسم المنتج
      const productNameEl = productCard.querySelector('.product-name');
      productNameEl.textContent = productNames[i % productNames.length];

      container.appendChild(productCard);
    }
  }

  // إنشاء 10 بطاقات عروض
  createProductCards(offersContainer, 10);

  // إنشاء 10 بطاقات المتاجر المميزة مع الصورة والاسم المرتبطين
  featuredStores.forEach(store => {
    const storeCard = document.createElement('div');
    storeCard.classList.add('store-card');
    storeCard.innerHTML = `
      <img src="${store.image}" alt="متجر ${store.name}" class="store-img">
      <div class="store-name">${store.name}</div>
    `;
    storesContainer.appendChild(storeCard);
  });

  // إنشاء 10 بطاقات "عروض تهمك"
  createProductCards(recommendedContainer, 10);

  // إنشاء 10 بطاقات إعلانات بدون عنوان
  for (let i = 0; i < 10; i++) {
    const adCard = document.createElement('div');
    adCard.classList.add('ads-card');
    adCard.innerHTML = `
      <img src="${adsImages[i]}" alt="إعلان">
      <div class="ads-title">${adTitles[i]}</div>
      <div class="ads-description">${adDescriptions[i]}</div>
    `;
    adsSection.appendChild(adCard);
  }

  // إنشاء 50 بطاقة "عروض مختارة"
  createProductCards(selectedContainer, 50);

  // دالة إظهار/إخفاء القائمة
  function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
  }

  // منطق اختيار فلتر واحد فقط في كل مجموعة
  document.querySelectorAll('.filter-group').forEach(group => {
    const checkboxes = group.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
          checkboxes.forEach(cb => {
            if (cb !== checkbox) cb.checked = false;
          });
        }
      });
    });
  });