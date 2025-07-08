document.addEventListener("DOMContentLoaded", () => {
  const headerPlaceholder = document.getElementById("header-placeholder");

  fetch("header.html")
    .then(response => response.text())
    .then(data => {
      headerPlaceholder.innerHTML = data;
    })
    .catch(error => {
      console.error("Erro ao carregar o header:", error);
    });
});
