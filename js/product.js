let lastOpenedDescription = null; // Змінна для зберігання посилання на останній відкритий опис
let lastOpenedIcon = null; // Змінна для зберігання посилання на іконку останнього відкритого елемента

// Отримуємо всі елементи з класом model-info
const modelInfos = document.querySelectorAll(".model-info");

modelInfos.forEach((info) => {
  const description = info.querySelector(".info-description");
  const infoItem = info.querySelector(".info-item");
  const icon = infoItem.querySelector("i");

  infoItem.addEventListener("click", () => {
    // Закриваємо попередній відкритий елемент, якщо він існує і відрізняється від поточного
    if (lastOpenedDescription && lastOpenedDescription !== description) {
      lastOpenedDescription.style.display = "none";
      lastOpenedIcon.classList.remove("fa-minus");
      lastOpenedIcon.classList.add("fa-plus");
    }

    // Перемикаємо видимість для поточного елемента
    if (description.style.display === "block") {
      description.style.display = "none";
      icon.classList.remove("fa-minus");
      icon.classList.add("fa-plus");
      lastOpenedDescription = null; // Очищуємо змінні
      lastOpenedIcon = null;
    } else {
      description.style.display = "block";
      icon.classList.remove("fa-plus");
      icon.classList.add("fa-minus");
      lastOpenedDescription = description; // Оновлюємо останній відкритий елемент
      lastOpenedIcon = icon;
    }
  });
});

// Отримуємо елементи з класом image-X та основний блок active-image
const images = document.querySelectorAll(
  ".product-item .image-1, .product-item .image-2, .product-item .image-3, .product-item .image-4, .product-item .image-5"
);
const activeImage = document.querySelector(".product-item .active-image img");

// Додаємо подію 'click' для кожного зображення в сітці
images.forEach((image) => {
  image.addEventListener("click", () => {
    // Отримуємо URL зображення, яке було натиснуто
    const newImageSrc = image.querySelector("img").src;

    // Замінюємо основне зображення на нове
    activeImage.src = newImageSrc;
  });
});

// Отримуємо кнопку
const backButton = document.querySelector(".back-btn");

// Додаємо обробник події для кліку
backButton.addEventListener("click", () => {
  // Перенаправлення на catalog.html
  window.location.href = "catalog.html";
});
