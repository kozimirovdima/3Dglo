const calc = (price = 100) => {
  //ПОЛУЧАЕМ:
  //общий блок
  const calcBlock = document.querySelector(".calc-block");
  //Тип объекта (вып. список)
  const calcType = document.querySelector(".calc-type");
  //Площадь
  const calcSquare = document.querySelector(".calc-square");
  //Количество помещений
  const calcCount = document.querySelector(".calc-count");
  //Срок исполнения (в днях)
  const calcDay = document.querySelector(".calc-day");
  //ИТОГО
  const total = document.getElementById("total");

  // Функция для рассчета итогового значения и вывода в консоль
  const countCalc = () => {
    //Переменная для числа, которое соответствует значению вып. из вып списка
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    const calcSquareValue = calcSquare.value;

    //Переменная для ИТОГО
    let totalValue = 0;
    let calcCountValue = 1;
    let calcDayValue = 1;

    //Условия на значения в полях и формулы
    if (calcCount.value > 1) {
      calcCountValue += +calcCount.value / 10;
    }

    if (calcDay.value && calcDay.value < 5) {
      calcDayValue = 2;
    } else if (calcDay.value && calcDay.value < 10) {
      calcDayValue = 1.5;
    }
    //Условие на обязательное заполнение полей со * (звездочкой) для выполнения расчетов
    if (calcType.value && calcSquare.value) {
      // console.log(calcCountValue)
      totalValue =
        price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
    } else {
      totalValue = 0;
    }

    total.textContent = totalValue;
  };
  calcBlock.addEventListener("input", (e) => {
    // countCalc()
    if (
      e.target === calcType ||
      e.target === calcSquare ||
      e.target === calcCount ||
      e.target === calcDay
    ) {
      countCalc();
    }
  });
};
export default calc;
