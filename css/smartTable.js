// smartTable.js
function createSmartTable({ containerId, data, filters = true, showTotals = true, showButton = false, buttonText = "تعديل" }) {
  const container = document.getElementById(containerId);
  if (!container) return null;

  const columns = Object.keys(data[0] || {});
  if (showButton) columns.push("إجراء");

  // إنشاء الجدول
  const table = document.createElement("table");
  table.classList.add("smart-table");

  // -------------------- Header --------------------
  const thead = document.createElement("thead");

  // صف العنوان
  const headerRow = document.createElement("tr");
  columns.forEach(col => {
    const th = document.createElement("th");
    th.textContent = col;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);

  // صف الفلاتر
  if (filters) {
    const filterRow = document.createElement("tr");
    columns.forEach(col => {
      const th = document.createElement("th");
      if (col !== "إجراء") {
        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = "بحث...";
        input.classList.add("column-filter");
        input.dataset.column = col;
        th.appendChild(input);
      }
      filterRow.appendChild(th);
    });
    thead.appendChild(filterRow);
  }

  table.appendChild(thead);

  // -------------------- Body --------------------
  const tbody = document.createElement("tbody");

  function addRow(rowData) {
    const tr = document.createElement("tr");
    columns.forEach(col => {
      const td = document.createElement("td");
      if (col === "إجراء" && showButton) {
        const btn = document.createElement("button");
        btn.textContent = buttonText;
        btn.classList.add("row-btn");
        td.appendChild(btn);
      } else {
        td.textContent = rowData[col] !== undefined ? rowData[col] : "";
      }
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  }

  data.forEach(row => addRow(row));
  table.appendChild(tbody);

  // -------------------- Footer (Totals) --------------------
  if (showTotals) {
    const tfoot = document.createElement("tfoot");
    const totalRow = document.createElement("tr");

    columns.forEach(col => {
      const td = document.createElement("td");
      if (col !== "إجراء") {
        let sum = 0;
        data.forEach(row => {
          const val = parseFloat(row[col]);
          if (!isNaN(val)) sum += val;
        });
        td.textContent = sum || "";
        td.classList.add("total-cell");
      }
      totalRow.appendChild(td);
    });
    tfoot.appendChild(totalRow);
    table.appendChild(tfoot);
  }

  container.appendChild(table);

  // -------------------- Filter functionality --------------------
  if (filters) {
    const inputs = table.querySelectorAll(".column-filter");
    inputs.forEach(input => {
      input.addEventListener("input", () => {
        const colName = input.dataset.column;
        const filterValue = input.value.toLowerCase();

        Array.from(tbody.rows).forEach(row => {
          const cellText = row.querySelector(`td:nth-child(${columns.indexOf(colName)+1})`).textContent.toLowerCase();
          row.style.display = cellText.includes(filterValue) ? "" : "none";
        });

        // تحديث المجاميع بعد التصفية
        if (showTotals) {
          const totalRow = table.querySelector("tfoot tr");
          columns.forEach((col, i) => {
            if (col !== "إجراء") {
              let sum = 0;
              Array.from(tbody.rows).forEach(row => {
                if (row.style.display !== "none") {
                  const val = parseFloat(row.cells[i].textContent);
                  if (!isNaN(val)) sum += val;
                }
              });
              totalRow.cells[i].textContent = sum || "";
            }
          });
        }
      });
    });
  }

  // إضافة الدالة لإضافة صف جديد بعد إنشاء الجدول
  table.addRow = addRow;

  return table;
}
