const button = document.getElementById("explodeBtn");

button.addEventListener("click", () => {
  // Убираем кнопку
  button.style.display = "none";

  // Берем все элементы body
  const bodyContent = document.body.innerHTML;
  document.body.innerHTML = ""; // Очищаем страницу

  // Создаем фрагменты
  for (let i = 0; i < 100; i++) {
    const fragment = document.createElement("div");
    fragment.className = "fragment";
    fragment.textContent = randomChar(); // Случайный символ
    fragment.style.left = `${Math.random() * 100}vw`;
    fragment.style.top =гося сайта” можно с помощью 
    document.body.appendChild(fragment);

    // Добавляем анимацию взрыва
    const angle = Math.random() * 360; // Угол разлета
    const distance = Math.random() * 100 + 50; // Дистанция разлета
    fragment.style.transform = `translate(${distance * Math.cos(angle)}px, ${
      distance * Math.sin(angle)
    }px) rotate(${Math.random() * 360}deg)`;
    fragment.style.opacity = "0"; // Исчезновение
  }
});

// Функция для генерации случайного символа
function randomChar() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  return chars.charAt(Math.floor(Math.random() * chars.length));
}
