const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector("#primary-menu");

if (menuButton && menu) {
  menuButton.addEventListener("click", () => {
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isExpanded));
    menu.classList.toggle("is-open", !isExpanded);
  });
}

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    if (!contactForm.checkValidity()) {
      event.preventDefault();
      formStatus.textContent = "Please check the required fields and correct any errors.";
      contactForm.reportValidity();
      return;
    }
    formStatus.textContent = "Your email application should open to send this message.";
  });
}
