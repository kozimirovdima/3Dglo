const slider = () => {
  console.log("slider");
  //Получаем элементы слайдера
  const sliderBlock = document.querySelector(".portfolio-content");
  //Коллекция слайдов
  const slides = document.querySelectorAll(".portfolio-item");
  //Блок для вставки точек
  const dotsBlok = document.querySelector(".portfolio-dots");
  // Переменная для будущего списка li с точками
  let dots = "";

  //Переменная для задания интервала автолистания слайдера
  const timeInterval = 2000;
  // Задаем начальное значение переменной - счетчика
  let currentSlide = 0;
  //Переменная для реализации остановки автослайдера при наведении курсора на кнопки
  let interval;

  // Создание точек по количеству слайдов
  const createDots = () => {
    let li = "";
    slides.forEach((elem, ind) => {
      li = document.createElement("li");
      if (ind === 0) {
        li.className = "dot dot-active";
      } else {
        li.className = "dot";
      }

      dotsBlok.append(li);

      dots = document.querySelectorAll(".dot");
    });
  };

  const prevSlide = (elems, index, strClass) => {
    //Удаляем класс активности (видимости) текущего слайда
    elems[index].classList.remove(strClass);
  };

  const nextSlide = (elems, index, strClass) => {
    //следующему слайду добавляем класс активности (видимости)
    elems[index].classList.add(strClass);
  };

  const autoSlide = () => {
    //запускаем показ слайдов и передаем параметры для функции
    prevSlide(slides, currentSlide, "portfolio-item-active");
    prevSlide(dots, currentSlide, "dot-active");
    //Запускаем счетчик через переменную
    currentSlide++;
    // Условие остановки счетчика
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    nextSlide(slides, currentSlide, "portfolio-item-active");
    nextSlide(dots, currentSlide, "dot-active");
  };
  //Задаем запуск показа и время интервала
  const startSlide = (timer = 1500) => {
    interval = setInterval(autoSlide, timer);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  sliderBlock.addEventListener("click", (e) => {
    e.preventDefault();

    if (!e.target.matches(".dot, .portfolio-btn")) {
      return;
    }

    prevSlide(slides, currentSlide, "portfolio-item-active");
    prevSlide(dots, currentSlide, "dot-active");

    if (e.target.matches("#arrow-right")) {
      currentSlide++;
    } else if (e.target.matches("#arrow-left")) {
      currentSlide--;
    } else if (e.target.classList.contains("dot")) {
      dots.forEach((dot, index) => {
        if (e.target === dot) {
          currentSlide = index;
        }
      });
    }

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }

    nextSlide(slides, currentSlide, "portfolio-item-active");
    nextSlide(dots, currentSlide, "dot-active");
  });

  sliderBlock.addEventListener(
    "mouseenter",
    (e) => {
      if (e.target.matches(".dot, .portfolio-btn")) {
        stopSlide();
      }
    },
    true
  );

  sliderBlock.addEventListener(
    "mouseleave",
    (e) => {
      if (e.target.matches(".dot, .portfolio-btn")) {
        startSlide(timeInterval);
      }
    },
    true
  );

  createDots();
  startSlide(timeInterval);
};

export default slider;
