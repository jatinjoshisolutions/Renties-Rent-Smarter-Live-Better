// Function to show popup when Rent Now is clicked
function rentNow() {
  alert("✅ Thank you for your interest!\n\n📩 Contact details will be shared within a few minutes.");
}

// Attach function to button
document.addEventListener("DOMContentLoaded", () => {
  const rentBtn = document.querySelector(".rent-btn");
  if (rentBtn) {
    rentBtn.addEventListener("click", rentNow);
  }
});
