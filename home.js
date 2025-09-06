// Wait until DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Select all Buy Now buttons
  const buyButtons = document.querySelectorAll("[class^='smallbox2A']");

  buyButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Open new HTML page (replace with your file name)
      window.location.href = "createAccount.html";
    });
  });
});
