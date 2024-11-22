const button = document.getElementById("showVideo");
const videoContainer = document.getElementById("videoContainer");

button.addEventListener("click", () => {
  // Проверяем, чтобы видео добавилось только один раз
  if (!document.querySelector("video")) {
    // Создаем элемент видео
    const video = document.createElement("video");
    video.setAttribute("controls", "true"); // Добавляем управление видео
    video.setAttribute("autoplay", "true"); // Видео запускается автоматически
    video.src = "https://www.w3schools.com/html/mov_bbb.mp4"; // Ссылка на видео
    video.type = "video/mp4"; // Указываем тип файла
    videoContainer.appendChild(video); // Добавляем видео в контейнер
  }
});
