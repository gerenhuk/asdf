
// filter

const filterBlockContainer = document.querySelector('.filter-container');
const catalogGrid = document.querySelector('.catalog-grid');
const filterBlock = document.querySelector('.filter-block');
const plusIcon = document.querySelector('.fa-plus');

filterBlockContainer.addEventListener('click', () => {
    // Змінюємо кількість колонок в catalog-grid
    if (catalogGrid.style.gridTemplateColumns === '285px 285px 285px') {
        catalogGrid.style.gridTemplateColumns = '285px 285px 285px 285px';
        filterBlock.classList.remove('active');
        plusIcon.style.transform = 'rotate(0deg)'; // Повертаємо іконку у початкове положення
    } else {
        catalogGrid.style.gridTemplateColumns = '285px 285px 285px';
        filterBlock.classList.add('active');
        plusIcon.style.transform = 'rotate(45deg)'; // Повертаємо іконку на 45 градусів
    }
});


const size = document.getElementById("size-filter-btn")
const sizeBlock = document.querySelector(".size-block") 
size.addEventListener("click", () => {
    if(sizeBlock.style.display === "grid") {
        sizeBlock.style.display = "none"
    } else {
        sizeBlock.style.display = "grid"
    }
})

// Знаходимо всі кнопки з класом size-btn
const sizeButtons = document.querySelectorAll(".size-btn");

// Додаємо події для кожної кнопки
sizeButtons.forEach(button => {
    button.addEventListener("mouseover", () => {
    button.style.backgroundColor = "black"; // Зміна фону на чорний
    button.style.color = "white";           // Зміна тексту на білий
});

    button.addEventListener("mouseout", () => {
    button.style.backgroundColor = "";      // Повернення до початкового фону
    button.style.color = "";                // Повернення до початкового кольору тексту
    });
});


const sortingBtn = document.getElementById("sorting-btn");
const sortingOptions = document.querySelector(".sorting-options"); // Переконайтеся, що крапка перед класом є

sortingBtn.addEventListener("click", () => {
    if (sortingOptions.style.display === "block") {
        sortingOptions.style.display = "none";
    } else {
        sortingOptions.style.display = "block";
    }
});

// Отримуємо кнопку фільтрації кольору та блок кольорів
const colorFilterBtn = document.getElementById("color-filter-btn"); // Змінити на ID вашої кнопки
const colorBlock = document.querySelector(".color-block"); // Отримуємо блок кольорів

// Додаємо обробник подій для кнопки кольору
colorFilterBtn.addEventListener("click", () => {
    // Перемикаємо видимість кольорового блоку
    if (colorBlock.style.display === "block") {
        colorBlock.style.display = "none"; // Сховати
    } else {
        colorBlock.style.display = "block"; // Показати
    }
});

// Отримуємо кнопку фільтрації кольору та блок кольорів
const productFilterBtn = document.getElementById("product-filter-btn"); // Змінити на ID вашої кнопки
const productTypeBlock = document.querySelector(".product-type-block"); // Отримуємо блок кольорів

// Додаємо обробник подій для кнопки кольору
productFilterBtn.addEventListener("click", () => {
    // Перемикаємо видимість кольорового блоку
    if (productTypeBlock.style.display === "block") {
        productTypeBlock.style.display = "none"; // Сховати
    } else {
        productTypeBlock.style.display = "block"; // Показати
    }
});


const productCards = document.querySelectorAll(".product-card");

productCards.forEach((productCard) => {
    productCard.addEventListener("click", () => {
        // Перенаправлення на product.html
        window.location.href = "product.html";
    });
});