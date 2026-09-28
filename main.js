document
  .getElementById("codeForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const userInput = document.getElementById("codeInput").value.trim();
    const errorMessage = document.getElementById("errorMessage");

    const geheimwort = "HEALING";

    if (userInput.toUpperCase() === geheimwort) {
      errorMessage.style.color = "#27ae60";
      errorMessage.textContent = "↪ Code korrekt! Weiterleitung...";

      setTimeout(function () {
        window.location.href = "intro.html";
      }, 1000);
    } else {
      errorMessage.style.color = "#d63031";
      errorMessage.textContent =
        "↯ Falsches Codewort. Bitte versuchen Sie es erneut.";
      document.getElementById("codeInput").value = "";
    }
  });
