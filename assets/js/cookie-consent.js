(function () {
  const consent = localStorage.getItem("cookieConsent");
  const banner = document.getElementById("cookie-banner");
  if (!banner) return;

  // Show banner if there is no stored consent
  if (!consent) {
    banner.classList.add("cookie-visible");
  }

  const acceptAll = document.getElementById("accept-all");
  const acceptEssential = document.getElementById("accept-essential");

  if (acceptAll) {
    acceptAll.addEventListener("click", function () {
      localStorage.setItem("cookieConsent", "all");
      banner.classList.remove("cookie-visible");
      // Future: load analytics scripts here if needed
    });
  }

  if (acceptEssential) {
    acceptEssential.addEventListener("click", function () {
      localStorage.setItem("cookieConsent", "essential");
      banner.classList.remove("cookie-visible");
    });
  }
})();