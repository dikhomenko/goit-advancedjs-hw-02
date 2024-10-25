
  // Оголошення об'єкта formData
  const formData = {
    email: "",
    message: ""
  };

  // Отримуємо форму
  const form = document.querySelector('.feedback-form');

  // При завантаженні сторінки перевіряємо локальне сховище
  window.addEventListener('DOMContentLoaded', () => {
    const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (savedData) {
      formData.email = savedData.email || "";
      formData.message = savedData.message || "";
      form.elements.email.value = formData.email;
      form.elements.message.value = formData.message;
    }
  });

  // Додаємо слухача події input з делегуванням
  form.addEventListener('input', (event) => {
    const { name, value } = event.target;
    if (name === 'email' || name === 'message') {
      formData[name] = value.trim(); // Оновлюємо об'єкт formData
      localStorage.setItem('feedback-form-state', JSON.stringify(formData)); // Зберігаємо в локальному сховищі
    }
  });

  // Обробка сабміту форми
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Запобігаємо перезавантаженню сторінки

    // Перевіряємо, чи заповнені поля
    if (formData.email === "" || formData.message === "") {
      alert('Fill please all fields'); // Сповіщення, якщо поля порожні
      return;
    }

    // Виводимо об'єкт formData у консоль
    console.log(formData);

    // Очищуємо локальне сховище та поля форми
    localStorage.removeItem('feedback-form-state');
    form.reset();
    formData.email = "";
    formData.message = "";
  });
