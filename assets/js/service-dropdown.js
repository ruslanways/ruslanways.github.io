document.addEventListener("DOMContentLoaded", () => {
  const isDesktopHover = window.matchMedia(
    "(hover: hover) and (pointer: fine)"
  ).matches;

  if (!isDesktopHover) {
    return;
  }

  document.querySelectorAll(".service-dropdown").forEach((dropdown) => {
    const summary = dropdown.querySelector("summary");

    if (!summary) {
      return;
    }

    const openMenu = () => dropdown.setAttribute("open", "");
    const closeMenu = () => dropdown.removeAttribute("open");

    closeMenu();

    dropdown.addEventListener("mouseenter", openMenu);
    dropdown.addEventListener("mouseleave", closeMenu);
    summary.addEventListener("focus", openMenu);
    dropdown.addEventListener("focusout", (event) => {
      if (!dropdown.contains(event.relatedTarget)) {
        closeMenu();
      }
    });

    // Desktop should use hover behavior only.
    summary.addEventListener("click", (event) => {
      event.preventDefault();
    });
  });
});
