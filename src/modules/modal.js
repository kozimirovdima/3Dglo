const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const closeBtn = document.querySelector(".popup-close");

  let count = 0; //переменная для счетчика в цикле анимациии

  let idInterval; //переменная для запуска и остановки анимации

  //Функция-цикл для анимации параметра прозрачности "style.opacity" от 0 до 1 с шагом 0.01 (100 циклов) + запрет анимации, если ширина экрана (innerWidth)  меньше 768px
  const popupAnimate = () => {
    console.log(window.innerWidth);
    count++;
    idInterval = requestAnimationFrame(popupAnimate);
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
  // Навешиваем события на кнопку Х(закрытие окна) - меняем style.display = 'none'. Счетчик count обнуляем для возможности анимации, если после закрытия окна снова будет нажатие на кнопки в "Наши услуги"
  closeBtn.addEventListener("click", () => {
    (modal.style.display = "none"), (count = 0);
  });
};

export default modal;
