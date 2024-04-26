const tabs = () => {
  //Получаем коллекции:
  //Коллекция заголовков в блоке "Наши услуги"
  const tabPanel = document.querySelector(".service-header");
  //Коллекция кнопок, соответствующих табам
  const tabs = document.querySelectorAll(".service-header-tab");
  //Коллекция содержаний табов (блоков услуг)
  const tabContent = document.querySelectorAll(".service-tab");

  //Вешаем событие на клик по заголовку каждого таба
  tabPanel.addEventListener("click", (e) => {
    //перебор через 'closest' позволяет найти родительский элемент и одинаково обрабатывать нажатие на разные части заголовка 'span' и 'text'

    if (e.target.closest(".service-header-tab")) {
      //через 'span' формируем переменную, обьединяющую нажатие на 2 части одной кнопки: text + span
      const tabBtn = e.target.closest(".service-header-tab");

      tabs.forEach((tab, index) => {
        if (tab === tabBtn) {
          //Включаем подстветку выбранного заголовка
          tab.classList.add("active");
          //Открываем содержание выбранного блока через удаление "d-none"
          tabContent[index].classList.remove("d-none");
        } else {
          //У невыбранных блоков удаляем подсветку заголовка и отображение содержания
          tab.classList.remove("active");
          tabContent[index].classList.add("d-none");
        }
      });
    }
  });
};
export default tabs;
