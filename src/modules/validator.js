const validator = () => {
  console.log("validator");
  //Выделение полей в разделе "Расчитать стоимость"
  const items = document.querySelectorAll(".calc-item");

  let index;
  //Отсекаем из Nodelist'a items поле "Интерьер квартиры" с индектом =0 и перебираем только 3 оставшихся поля, поочередно закладывая их в переменную itemCalc
  for (index = 1; index < items.length; ++index) {
    let itemCalc = items[index];

    //Устанавливаем разрешение на ввод в поля только цифр
    itemCalc.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/\D+/g, "");
    });
  }

  //Только КИРИЛИЦА -Валидация поля имени в форме вначале, внизу и модальном окне
  const userName = document.querySelectorAll('[name="user_name"]');

  userName.forEach((element) => {
    element.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^\-а-яА-ЯёЁ\s]+$/g, "");
    });
  });

  //Валидация поля с e-mail
  const email = document.querySelectorAll(".form-email");

  email.forEach((el) => {
    el.setAttribute("required", true); //Делаем поле  e-mail обязательным
    el.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(
        /([^A-Za-z0-9@\-\_\.\~\*\'])+$/g,
        ""
      );
    });
  });

  //валидация телефона
  const tel = document.querySelectorAll('input[type="tel"]');

  tel.forEach((elem) => {
    elem.addEventListener("input", (e) => {
      //Задание условия через регулярку
      e.target.value = e.target.value.replace(/[^((8|\+7)^0-9\(\)\-]/g, "");
      //Считаем цифры в номере телефона
      // const numberDigits = e.target.value.replace(/\D+/g, '').length
      // console.log(numberDigits);
    });
  });

  //Только КИРИЛЛИЦА - валидация поля "Ваше сообщение в конце страницы"
  const place = document.querySelector('[placeholder="Ваше сообщение"]');
  place.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^\?!,.а-яА-ЯёЁ0-9\s]+$/g, "");
  });
};
export default validator;
