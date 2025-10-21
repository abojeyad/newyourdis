const products = [
  { name: "بنطال رسمي واسع بخصر متوسط", image: "images/products/image1.jpg", store: "أمازون" },
  { name: "قميص قطني بأكمام قصيرة",     image: "images/products/image2.jpg", store: "نون" },
  { name: "حذاء رياضي مريح",            image: "images/products/image3.jpg", store: "جوميا" },
  { name: "سترة جلدية أنيقة",           image: "images/products/image4.jpg", store: "سوق.كوم" },
  { name: "حقيبة يد جلدية صغيرة",       image: "images/products/image5.jpg", store: "نمشي" },
  { name: "نظارة شمسية عصرية",          image: "images/products/image6.jpg", store: "شتاء ودفء" },
  { name: "ساعة يد كلاسيكية",           image: "images/products/image7.jpg", store: "اقتنِ" },
  { name: "شورت صيفي خفيف",             image: "images/products/image8.jpg", store: "تشارم" },
  { name: "فستان سهرة طويل",            image: "images/products/image9.jpg", store: "إكسترا" },
  { name: "قميص بولو بألوان متعددة",    image: "images/products/image10.jpg", store: "لولو" }
];

const categories = [
  { name: "الإلكترونيات",        image: "images/categories/image1.jpg" },
  { name: "المنزل",             image: "images/categories/image2.jpg" },
  { name: "الأطفال",            image: "images/categories/image3.jpg" },
  { name: "الجمال",             image: "images/categories/image4.jpg" },
  { name: "الأزياء",            image: "images/categories/image5.jpg" },
  { name: "الرياضة",            image: "images/categories/image6.jpg" },
  { name: "الكتب",              image: "images/categories/image7.jpg" },
  { name: "الصحة والعافية",     image: "images/categories/image8.jpg" },
  { name: "الطعام والمشروبات",  image: "images/categories/image9.jpg" },
  { name: "التحف والمقتنيات",   image: "images/categories/image10.jpg" },
  { name: "الموسيقى والفن",     image: "images/categories/image11.jpg" },
  { name: "الأدوات المكتبية",   image: "images/categories/image12.jpg" },
  { name: "الحيوانات الأليفة",  image: "images/categories/image13.jpg" },
  { name: "المركبات",           image: "images/categories/image14.jpg" },
  { name: "خدمات رقمية",        image: "images/categories/image15.jpg" }
];

const featuredStores = [
  { name: "أمازون",    image: "images/stores-images/store1.jpg" },
  { name: "نون",      image: "images/stores-images/store2.jpg" },
  { name: "جوميا",    image: "images/stores-images/store3.jpg" },
  { name: "سوق.كوم",  image: "images/stores-images/store4.jpg" },
  { name: "نمشي",     image: "images/stores-images/store5.jpg" },
  { name: "شتاء ودفء", image: "images/stores-images/store6.jpg" },
  { name: "اقتنِ",     image: "images/stores-images/store7.jpg" },
  { name: "تشارم",     image: "images/stores-images/store8.jpg" },
  { name: "إكسترا",    image: "images/stores-images/store9.jpg" },
  { name: "لولو",      image: "images/stores-images/store10.jpg" },
  { name: "ساري",      image: "images/stores-images/store11.jpg" },
  { name: "فاشن",      image: "images/stores-images/store12.jpg" },
  { name: "جيتس",      image: "images/stores-images/store13.jpg" },
  { name: "ركن القهوة", image: "images/stores-images/store14.jpg" }
];

const ads = [
  { image: "images/ads/ad1.jpg",  title: "احصل على خصم 50%",     description: "وفر الكثير مع خصوماتنا الحصرية. العرض ساري حتى نفاد الكمية." },
  { image: "images/ads/ad2.jpg",  title: "عروض الصيف بدأت",      description: "تسوق الآن وتمتع بتخفيضات تصل إلى 70٪." },
  { image: "images/ads/ad3.jpg",  title: "منتجات جديدة وصلت",     description: "اكتشف تشكيلتنا الجديدة لأحدث المنتجات." },
  { image: "images/ads/ad4.jpg",  title: "عرض لفترة محدودة",     description: "لا تفوت هذا العرض الرائع لفترة محدودة فقط." },
  { image: "images/ads/ad5.jpg",  title: "اشترِ 1 واحصل على 2",  description: "احصل على المزيد مقابل أقل مع عرضنا الحصري." },
  { image: "images/ads/ad6.jpg",  title: "تخفيضات رمضان",        description: "استعد لأفضل التخفيضات خلال شهر رمضان المبارك." },
  { image: "images/ads/ad7.jpg",  title: "شحن مجاني",            description: "شحن مجاني لجميع الطلبات فوق 200 ريال." },
  { image: "images/ads/ad8.jpg",  title: "هدية مع كل طلب",       description: "استلم هدية مجانية عند كل عملية شراء." },
  { image: "images/ads/ad9.jpg",  title: "خصومات بلا حدود",      description: "خصومات كبرى على آلاف المنتجات." },
  { image: "images/ads/ad10.jpg", title: "عروض نهاية الأسبوع",  description: "انتهز الفرصة قبل انتهاء العرض!" }
];

// dynamic groups
const makeGroup = (size, startIndex = 0) => {
  const group = [];
  if (!Array.isArray(products) || products.length === 0) return group;
  for (let i = 0; i < size; i++) {
    group.push(products[(startIndex + i) % products.length]);
  }
  return group;
};

const desiredSizes = {
  recommended: 10,
  best: 18,
  group1: 10,
  group2: 10,
  group3: 10
};

const offsets = {
  recommended: 0,
  best: 5,
  group1: 0,
  group2: 3,
  group3: 6
};

const offersGroups = {
  recommended: makeGroup(desiredSizes.recommended, offsets.recommended),
  best:        makeGroup(desiredSizes.best,        offsets.best),
  group1:      makeGroup(desiredSizes.group1,      offsets.group1),
  group2:      makeGroup(desiredSizes.group2,      offsets.group2),
  group3:      makeGroup(desiredSizes.group3,      offsets.group3)
};

function createProductCard(product) {
  const card = document.createElement("div");
  card.classList.add("product-card");
  card.innerHTML = `
    <div class="product-image">
      <div class="product-header">
        <div class="favorite-icon"><i class="far fa-bookmark"></i></div>
        <div class="countdown-timer">18:34:50</div>
      </div>
      <img src="${product.image}" alt="${product.name}" class="product-img">
    </div>
    <div class="product-info">
      <div class="product-store-name">${product.store}</div>
      <div class="product-name">${product.name}</div>
      <div class="pricing">
        <span class="old-price">500 ريال</span>
        <span class="discount-percentage">-20%</span>
        <span class="new-price">400 ريال</span>
      </div>
    </div>
    <button class="order-now-btn">
      اطلب الآن <i class="fas fa-external-link-alt"></i>
    </button>
  `;
  return card;
}

const offersContainer      = document.getElementById("offers");
const storesContainer      = document.getElementById("stores");
const recommendedContainer = document.getElementById("offers-recommended");
const adsSection           = document.getElementById("ads-section");
const categoryBar          = document.getElementById("category-bar");
const group1Container      = document.getElementById("group1");
const group2Container      = document.getElementById("group2");
const group3Container      = document.getElementById("group3");

categories.forEach(cat => {
  const catCard = document.createElement("div");
  catCard.classList.add("category-card");
  catCard.innerHTML = `
    <img src="${cat.image}" alt="${cat.name}" class="category-img">
    <div class="category-name">${cat.name}</div>
  `;
  if (categoryBar) categoryBar.appendChild(catCard);
});

featuredStores.forEach(store => {
  const storeCard = document.createElement("div");
  storeCard.classList.add("store-card");
  storeCard.innerHTML = `
    <img src="${store.image}" alt="${store.name}" class="store-img">
    <div class="store-name">${store.name}</div>
  `;
  if (storesContainer) storesContainer.appendChild(storeCard);
});

ads.forEach(ad => {
  const adCard = document.createElement("div");
  adCard.classList.add("ads-card");
  adCard.innerHTML = `
    <img src="${ad.image}" alt="${ad.title}">
    <div class="ads-title">${ad.title}</div>
    <div class="ads-description">${ad.description}</div>
  `;
  if (adsSection) adsSection.appendChild(adCard);
});

if (offersContainer) offersGroups.best.forEach(p => offersContainer.appendChild(createProductCard(p)));
if (recommendedContainer) offersGroups.recommended.forEach(p => recommendedContainer.appendChild(createProductCard(p)));
if (group1Container) offersGroups.group1.forEach(p => group1Container.appendChild(createProductCard(p)));
if (group2Container) offersGroups.group2.forEach(p => group2Container.appendChild(createProductCard(p)));
if (group3Container) offersGroups.group3.forEach(p => group3Container.appendChild(createProductCard(p)));

function toggleMenu() {
  const menu = document.getElementById('menu');
  if (menu) menu.classList.toggle('active');
}

(function initUserDropdown() {
  function attachDropdownBehavior() {
    const userToggle = document.getElementById('userToggle');
    let userDropdown = document.getElementById('user-dropdown');
    const asideMenu = document.getElementById('menu');

    if (!userDropdown && userToggle) {
      userDropdown = document.createElement('div');
      userDropdown.id = 'user-dropdown';
      userDropdown.className = 'user-dropdown';
      userDropdown.setAttribute('aria-hidden', 'true');
      userToggle.insertAdjacentElement('afterend', userDropdown);
    }

    if (asideMenu && userDropdown) {
      const ul = asideMenu.querySelector('ul');
      if (ul && !userDropdown.querySelector('ul')) {
        const clone = ul.cloneNode(true);
        clone.classList.add('user-dropdown-list');
        userDropdown.appendChild(clone);
      }
    }

    if (!userToggle || !userDropdown) return;

    function toggleUserDropdown() {
      const isOpen = userDropdown.classList.toggle('show');
      userToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      userDropdown.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    }

    userToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleUserDropdown();
    });

    userDropdown.addEventListener('click', function(e) {
      e.stopPropagation();
    });

    document.addEventListener('click', function() {
      if (userDropdown.classList.contains('show')) {
        userDropdown.classList.remove('show');
        userToggle.setAttribute('aria-expanded', 'false');
        userDropdown.setAttribute('aria-hidden', 'true');
      }
    });

    window.toggleMenu = function() {
      if (asideMenu && asideMenu.classList.contains('hidden-menu')) {
        const isOpen = userDropdown.classList.toggle('show');
        userToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        userDropdown.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
      } else {
        if (asideMenu) asideMenu.classList.toggle('active');
      }
    };
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attachDropdownBehavior);
  } else {
    attachDropdownBehavior();
  }
})();
