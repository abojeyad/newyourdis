// table.js
function createTable({ data = [], showButton = false }) {
  const table = document.createElement('table');
  table.className = 'my-table';

  if (data.length === 0) {
    const empty = document.createElement('p');
    empty.textContent = "لا توجد بيانات";
    return empty;
  }

  // رأس الجدول
  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  Object.keys(data[0]).forEach(key => {
    const th = document.createElement('th');
    th.textContent = key;
    headerRow.appendChild(th);
  });
  if (showButton) {
    const th = document.createElement('th');
    th.textContent = "خيارات";
    headerRow.appendChild(th);
  }
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // جسم الجدول
  const tbody = document.createElement('tbody');
  data.forEach(row => {
    const tr = document.createElement('tr');
    Object.values(row).forEach(val => {
      const td = document.createElement('td');
      td.textContent = val;
      tr.appendChild(td);
    });
    if (showButton) {
      const td = document.createElement('td');
      const btn = document.createElement('button');
      btn.textContent = "اضغط";
      td.appendChild(btn);
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);

  return table;
}
