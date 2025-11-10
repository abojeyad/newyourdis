// script.js

document.addEventListener('DOMContentLoaded', () => {
  const monthlyButton = document.getElementById('toggle-monthly');
  const yearlyButton = document.getElementById('toggle-yearly');
  const priceContainers = document.querySelectorAll('.price-container');
  
  // لا نحتاج إلى yearlyDiscountRate هنا، نستخدم فقط القيم في data-monthly و data-yearly
  let isMonthly = true;

  // دالة لتحديث واجهة المستخدم بناءً على وضع (شهري/سنوي)
  const updatePricing = () => {
    // تحديث حالة الأزرار
    if (isMonthly) {
      monthlyButton.classList.add('bg-indigo-600', 'text-white', 'shadow-sm');
      monthlyButton.classList.remove('text-gray-600');
      yearlyButton.classList.remove('bg-indigo-600', 'text-white', 'shadow-sm');
      yearlyButton.classList.add('text-gray-600');
    } else {
      yearlyButton.classList.add('bg-indigo-600', 'text-white', 'shadow-sm');
      yearlyButton.classList.remove('text-gray-600');
      monthlyButton.classList.remove('bg-indigo-600', 'text-white', 'shadow-sm');
      monthlyButton.classList.add('text-gray-600');
    }

    // تحديث أسعار الباقات المدفوعة
    priceContainers.forEach(container => {
      // تحديد اسم الخطة بناءً على العنصر الأب لتحديث العناصر الصحيحة
      const planName = container.closest('article').querySelector('h3').textContent.trim() === 'الباقة القياسية' ? 'standard' : 'premium';
      const priceElement = document.getElementById(`price-${planName}`);
      const unitElement = document.getElementById(`unit-${planName}`);
      const oldPriceElement = document.getElementById(`old-price-${planName}`);
      const discountElement = document.getElementById(`discount-${planName}`);
      
      const monthlyPrice = parseInt(container.getAttribute('data-monthly'));
      const yearlyPriceAttr = parseInt(container.getAttribute('data-yearly'));

      if (isMonthly) {
        priceElement.textContent = monthlyPrice;
        unitElement.textContent = 'ر.س / شهر';
        oldPriceElement.textContent = '';
        discountElement.classList.add('hidden');
      } else {
        // حساب السعر السنوي الكامل قبل الخصم (للعرض في الخط المشطوب)
        const fullYearPrice = monthlyPrice * 12;
        
        // عرض السعر السنوي المخصوم (المدخل في data-yearly)
        priceElement.textContent = yearlyPriceAttr;
        unitElement.textContent = 'ر.س / سنة';
        
        // عرض السعر السنوي الكامل قبل الخصم كمرجع
        oldPriceElement.textContent = `${fullYearPrice} ر.س / سنة`;
        discountElement.classList.remove('hidden'); // عرض علامة التوفير
      }
    });
  };
  
  // مستمعو الأحداث
  monthlyButton.addEventListener('click', () => {
    isMonthly = true;
    updatePricing();
  });

  yearlyButton.addEventListener('click', () => {
    isMonthly = false;
    updatePricing();
  });

  // إعداد الحالة الأولية (شهري افتراضيًا)
  updatePricing();
});