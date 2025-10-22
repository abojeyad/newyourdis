// البيانات لكل مجموعة
const perfumeStores = [
  { name: "أمازون", image: "images/stores-images/store1.jpg" },
  { name: "نون", image: "images/stores-images/store2.jpg" },
  { name: "جوميا", image: "images/stores-images/store3.jpg" }
];

const clothesStores = [
  { name: "سوق.كوم", image: "images/stores-images/store4.jpg" },
  { name: "نمشي", image: "images/stores-images/store5.jpg" },
  { name: "شتاء ودفء", image: "images/stores-images/store6.jpg" }
];

const shoesStores = [
  { name: "اقتنِ", image: "images/stores-images/store7.jpg" },
  { name: "تشارم", image: "images/stores-images/store8.jpg" },
  { name: "إكسترا", image: "images/stores-images/store9.jpg" }
];

// دالة لإنشاء بطاقة متجر
function createStoreCard(store) {
  const card = document.createElement("div");
  card.classList.add("store-card"); // يستخدم التنسيق من store.css
  card.innerHTML = `
    <img src="${store.image}" alt="${store.name}" class="store-img">
    <div class="store-name">${store.name}</div>
  `;
  return card;
}

// دالة لتعبئة مجموعة المتاجر في div محدد
function fillStores(containerId, storesArray) {
  const container = document.getElementById(containerId);
  if (!container) return;
  storesArray.forEach(store => {
    container.appendChild(createStoreCard(store));
  });
}

// تعبئة كل المجموعات
fillStores("stores-perfume", perfumeStores);
fillStores("stores-clothes", clothesStores);
fillStores("stores-shoes", shoesStores);
