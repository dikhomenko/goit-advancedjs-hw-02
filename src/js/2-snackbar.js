import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.querySelector('.form').addEventListener('submit', (event) => {
  event.preventDefault(); // Відміна стандартної поведінки форми
  
  const delay = Number(event.target.delay.value); // Отримання значення затримки
  const state = event.target.state.value; // Отримання вибраного стану (fulfilled або rejected)

  // Створення промісу з вибраною затримкою
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  // Обробка промісу після створення
  promise
    .then((delay) => {
      iziToast.success({
        title: 'Success',
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topCenter',
        timeout: 5000,
      });
    })
    .catch((delay) => {
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topCenter',
        timeout: 5000,
      });
    });
});
