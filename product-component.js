// product-component.js
(function (global) {
  function createProductCard(product) {
    const card = document.createElement("div");
    card.classList.add("product-card");

    // اختيار نوع الزر عشوائيًا بين 2 خيارات فقط
    const random = Math.floor(Math.random() * 2);
    let buttonHTML = "";
    let buttonUrl  = "";

    if (random === 0) {
      buttonHTML = 'اطلب الآن <i class="fas fa-external-link-alt"></i>';
      buttonUrl  = product.url || "https://www.google.com";
    } else if (random === 1) {
      buttonHTML = 'فتح الموقع <i class="fas fa-map-marker-alt" style="transform: rotate(0deg);"></i>';
      buttonUrl  = product.storeUrl || "https://www.google.com/maps";
    }

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
        ${buttonHTML}
      </button>
    `;

    card.addEventListener('click', () => {
      window.location.href = 'product.html';
    });

    const orderBtn = card.querySelector('.order-now-btn');
    if (orderBtn) {
      orderBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        window.open(buttonUrl, '_blank');
      });
    }

    return card;
  }

  global.createProductCard = createProductCard;
})(window);
