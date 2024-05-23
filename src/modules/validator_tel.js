const validator_tel = (formId) => {
  //модуль для проверки ввода не менее 11 цифр в телефонный номер
  console.log("validator_tel");

  const form = document.getElementById(formId);
  console.log(form);

  const submit = form.querySelector('button[type="submit"]');
  console.log(submit);

  const tel = form.querySelector('input[type="tel"]');
  console.log(tel);

  tel.addEventListener("input", (e) => {
    //Считаем цифры в номере телефона
    const numberDigits = tel.value.replace(/\D+/g, "").length;
    console.log(numberDigits);
    if (numberDigits < 11) {
      // alert('не менее 11 цифр')

      submit.setAttribute("disabled", true);
      tel.setCustomValidity("не менее 11 цифр");
    } else {
      submit.disabled = false;
      tel.setCustomValidity("");
    }
    console.log(submit);
  });
};
export default validator_tel;
