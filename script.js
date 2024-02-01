function openModal() {
  document.getElementById("modal").style.display = "flex";
  clearModalFields();
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function preventClose(event) {
  const modalContent = document.querySelector(".modal-content");
  if (!modalContent.contains(event.target)) {
    closeModal();
  }
}

function clearModalFields() {
  document.getElementById("blogTitle").value = "";
  document.getElementById("titleColor").value = "#000000";
  document.getElementById("titleFontSize").value = "";
  document.getElementById("titleMarginBottom").value = "";
  document.getElementById("blogContent").value = "";
  document.getElementById("contentColor").value = "#000000";
  document.getElementById("contentFontSize").value = "";
}

function saveChanges() {
  const blogTitle = document.getElementById("blogTitle").value;
  const titleColor = document.getElementById("titleColor").value;
  const titleFontSize = document.getElementById("titleFontSize").value + "px";
  const titleMarginBottom =
    document.getElementById("titleMarginBottom").value + "px";
  const blogContent = document.getElementById("blogContent").value;
  const contentColor = document.getElementById("contentColor").value;
  const contentFontSize =
    document.getElementById("contentFontSize").value + "px";

  // Save changes to local storage
  const savedData = JSON.parse(localStorage.getItem("blogData")) || [];
  const editingIndex = localStorage.getItem("editingIndex");

  if (editingIndex !== null) {
    // If editing an existing entry
    savedData[editingIndex] = {
      blogTitle,
      titleColor,
      titleFontSize,
      titleMarginBottom,
      blogContent,
      contentColor,
      contentFontSize,
    };
    localStorage.removeItem("editingIndex");
  } else {
    // If creating a new entry
    savedData.push({
      blogTitle,
      titleColor,
      titleFontSize,
      titleMarginBottom,
      blogContent,
      contentColor,
      contentFontSize,
    });
  }

  localStorage.setItem("blogData", JSON.stringify(savedData));

  // Display data in the table
  displayTableData();

  closeModal();
}

function showBlog(row) {
  const cells = row.getElementsByTagName("td");
  const blogTitle = cells[0].textContent;
  const titleColor = cells[1].textContent;
  const titleFontSize = cells[2].textContent;
  const titleMarginBottom = cells[3].textContent;
  const blogContent = cells[4].textContent;
  const contentColor = cells[5].textContent;
  const contentFontSize = cells[6].textContent;

  const modalContent = `
      <button class="close-button" onclick="closeModal()">Close</button>
      <h3>${blogTitle}</h3>
      <p style="color: ${titleColor}; font-size: ${titleFontSize}; margin-bottom: ${titleMarginBottom};">${blogContent}</p>
      <p style="color: ${contentColor}; font-size: ${contentFontSize};"></p>
  `;

  openModal();
  document.querySelector(".modal-content").innerHTML = modalContent;
}

function deleteRow(row) {
  const index = row.rowIndex;
  const savedData = JSON.parse(localStorage.getItem("blogData")) || [];
  savedData.splice(index - 1, 1);
  localStorage.setItem("blogData", JSON.stringify(savedData));
  displayTableData();
}

function editRow(row) {
  const cells = row.getElementsByTagName("td");
  const blogTitle = cells[0].textContent;
  const titleColor = cells[1].textContent;
  const titleFontSize = cells[2].textContent;
  const titleMarginBottom = cells[3].textContent;
  const blogContent = cells[4].textContent;
  const contentColor = cells[5].textContent;
  const contentFontSize = cells[6].textContent;

  document.getElementById("blogTitle").value = blogTitle;
  document.getElementById("titleColor").value = titleColor;
  document.getElementById("titleFontSize").value = titleFontSize.replace(
    "px",
    ""
  );
  document.getElementById("titleMarginBottom").value =
    titleMarginBottom.replace("px", "");
  document.getElementById("blogContent").value = blogContent;
  document.getElementById("contentColor").value = contentColor;
  document.getElementById("contentFontSize").value = contentFontSize.replace(
    "px",
    ""
  );

  openModal();
}

function displayTableData() {
  const table = document
    .getElementById("data-table")
    .getElementsByTagName("tbody")[0];
  table.innerHTML = "";

  const savedData = JSON.parse(localStorage.getItem("blogData")) || [];
  savedData.forEach((data, index) => {
    const newRow = table.insertRow(table.rows.length);
    const cells = [
      data.blogTitle,
      data.titleColor,
      data.titleFontSize,
      data.titleMarginBottom,
      data.blogContent,
      data.contentColor,
      data.contentFontSize,
      `
              <button class="show-button" onclick="showBlog(this.parentNode.parentNode)">Show</button>
              <button class="edit-button" onclick="editRow(this.parentNode.parentNode)">Edit</button>
              <button class="delete-button" onclick="deleteRow(this.parentNode.parentNode)">Delete</button>
          `,
    ];

    cells.forEach((value, index) => {
      const cell = newRow.insertCell(index);
      cell.innerHTML = value;
    });
  });
}

displayTableData();
