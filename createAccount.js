// createAccount.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const HOME_PAGE = "home.html"; // <-- change if your homepage is named/indexed differently

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // stop the real submit

    // Pop first; only redirect after user clicks OK
    const goNow = window.confirm("Account created successfully!\n\nGo to Home now?");
    if (goNow) {
      // Redirect after OK
      window.location.href = HOME_PAGE; // or window.location.assign(HOME_PAGE);
    }
  });
});
