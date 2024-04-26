const modal = () => {
  console.log("modal");
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");

  //
  let count = 0; //переменная для счетчика в цикле анимациии

  let idInterval; //переменная для запуска и остановки анимации

  //Функция-цикл для анимации параметра прозрачности "style.opacity" от 0 до 1 с шагом 0.01 (100 циклов) + запрет анимации, если ширина экрана (innerWidth)  меньше 768px
  const popupAnimate = () => {
    //Вывод ширины окна
    // console.log(window.innerWidth)
    count++;
    idInterval = requestAnimationFrame(popupAnimate);
    //Задаем исходные условия работы анимации (интервал увеличения видимости + ширина окна д.б более 768(не мобильный телефон))
    if (count < 100 && window.innerWidth > 768) {
      modal.style.opacity = count * 0.01;
    } else {
      cancelAnimationFrame(idInterval);
    }
  };
  // Перебор кнопок раздела "Наши услуги" с изменением свойста style.display модального окна с none на block + запуск функции анимации popupAnimate()
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      (modal.style.display = "block"), popupAnimate();
    });
  });

  modal.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      !e.target.closest(".popup-content") ||
      e.target.classList.contains("popup-close")
    ) {
      (modal.style.display = "none"), (count = 0);
    }
  });
};

export default modal;
