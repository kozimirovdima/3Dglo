const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);

  //блок извещения об отправке данных
  const statusBlock = document.createElement("div");
  const loadText = "Загрузка...";
  const errorText = "Ошибка...";
  const successText = "Спасибо! Наш менеджер с Вами свяжется";

  //Функция для валидации полей
  const validate = (list) => {
    let success = true;

    // list.forEach(input => {
    //     if (!input.classList.contains('success')) {
    //         success = false
    //     }

    // })

    return success;
  };

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };
  //функция обработки данных, организации и отслеживания отправки формы
  const submitForm = () => {
    //Получаем NodeList из полей ***для валидации***
    const formElements = form.querySelectorAll("input");

    //получаем сразу все поля из формы
    const formData = new FormData(form);

    const formBody = {}; //сюда будем собирать инфу из формы и калькулятора

    //Вторая часть оповещения об отправке данных
    statusBlock.textContent = loadText;
    form.append(statusBlock);
    if (formId === "form3") {
      statusBlock.setAttribute("style", "color: #FFFFFF;");
    }

    //перебираем и формируем заново получившиеся поля из формы
    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    // form.forEach((el) => {
    // tel = form.querySelector('input[type="tel"]')
    // btn = form.querySelector('button[type="submit"]')
    // console.log(tel)
    // console.log(btn)

    // })
    //вывод и отправка значения "Калькулятора"
    someElem.forEach((elem) => {
      const element = document.getElementById(elem.id);

      if (elem.type === "block") {
        formBody[elem.id] = element.textContent;
      } else if (elem.type === "input") {
        formBody[elem.id] = element.value;
      }
    });
    console.log("submit");
    //отправка данных формы, если поля прошли валидацию
    if (validate(formElements)) {
      sendData(formBody)
        .then((data) => {
          //Вставка сообщения об успешной отправке
          statusBlock.textContent = successText;
          //Очистка блока statusBlock через 5 секунд
          setTimeout(() => {
            statusBlock.textContent = "";
          }, 5000);

          formElements.forEach((input) => {
            input.value = ""; //очищаем поля после отправки данных
          });
        })
        .catch((error) => {
          //Вывод сообщения об ошибке отправки (под формой)
          statusBlock.textContent = errorText;
        });
    } else {
      alert("Данные не валидны!!!");
    }
  };

  try {
    //Еще одна првыаываывоверка (+защита от слома кода при неверном идентификаторе формы или изменении верстки)
    if (!form) {
      throw new Error("Верните форму на место, пожалуйста)");
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault(); //отменяем действие браузера по умолчанию при нажатии на кнопку

      //вызов функции организации отправки
      submitForm();
    });
  } catch (error) {
    console.log("catch");
    console.log(error.message);
  }
};
export default sendForm;
