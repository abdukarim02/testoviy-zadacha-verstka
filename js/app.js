const buttons = document.querySelectorAll(".directions-buttons__btn");
const contents = document.querySelectorAll(".directions-tabs__content");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Убираем активные классы
    buttons.forEach((b) => b.classList.remove("active"));
    contents.forEach((c) => c.classList.remove("active"));

    // Добавляем активные классы текущему табу и контенту
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});
var swiper = new Swiper(".mySwiper", {
      spaceBetween: 50,
      slidesPerView: 4,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      history: {
        key: "slide",
      },
});