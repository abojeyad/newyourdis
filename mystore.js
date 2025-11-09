document.addEventListener("DOMContentLoaded", function() {

  /* ============ التابات ============ */
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach(button => {
    button.addEventListener("click", () => {
      // إزالة التفعيل من جميع الأزرار
      tabButtons.forEach(btn => btn.classList.remove("active"));
      // إخفاء جميع المحتويات
      tabContents.forEach(content => content.classList.remove("active"));

      // تفعيل التاب المختار
      button.classList.add("active");
      const target = button.getAttribute("data-tab");
      document.getElementById(target).classList.add("active");
    });
  });


  /* ============ زر الإجراءات ============ */
  const actionsButton = document.getElementById("actionsButton");
  const actionsMenu = document.getElementById("actionsMenu");

  if (actionsButton && actionsMenu) {
    // عند النقر على زر الإجراءات
    actionsButton.addEventListener("click", (e) => {
      e.stopPropagation(); // منع انتشار الحدث
      actionsMenu.classList.toggle("show");
    });

    // عند النقر في أي مكان خارج القائمة تُغلق
    document.addEventListener("click", (e) => {
      if (!actionsMenu.contains(e.target) && !actionsButton.contains(e.target)) {
        actionsMenu.classList.remove("show");
      }
    });
  }

});



document.addEventListener('DOMContentLoaded', () => {
  const expiredData = [
    { "المنتج": "قلم حبر", "السعر": "15 ريال", "الكمية": 50 },
    { "المنتج": "دفتر", "السعر": "10 ريال", "الكمية": 100 },
    { "المنتج": "مسطرة", "السعر": "5 ريال", "الكمية": 75 }
  ];

  const tableSettings = {
    containerId: "expired-table-container", // معرف الحاوية
    data: expiredData,
    filters: true,         // تفعيل البحث في كل عمود
    showTotals: true,      // إظهار المجاميع أسفل الجدول
    showButton: true,      // إظهار زر العمود الأخير
    buttonText: "تعديل"    // اسم الزر في العمود الأخير
  };

  // إنشاء الجدول
  const table = createSmartTable(tableSettings);
});
