// ===============================
// getdates.js
// ===============================

// 1. Inserir o ano atual no footer
const yearElement = document.getElementById("currentyear");
if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
}

// 2. Inserir a data da última modificação do documento
const lastModifiedElement = document.getElementById("lastModified");
if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
}