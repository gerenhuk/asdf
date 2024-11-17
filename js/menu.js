document.getElementById('menu-btn').addEventListener('click', function () {
    document.querySelector('.menu-active').style.display = 'block';
});

document.querySelector('.closed').addEventListener('click', function () {
    document.querySelector('.menu-active').style.display = 'none';
});

document.getElementById('account').addEventListener("click", function () {
    const loginElement = document.querySelector(".account-login");
    if (loginElement.style.display === 'block') {
        loginElement.style.display = 'none';
    } else {
        loginElement.style.display = 'block';
    }
});

document.querySelector('.close').addEventListener('click', function () {
    document.querySelector('.account-login').style.display = 'none';
});

document.getElementById("shopping-bag").addEventListener("click", function () {
    const shoppingBag = document.querySelector(".shopping-bag-block");
    // Виправлено '=' на '==='
    if (shoppingBag.style.display === "block") {
        shoppingBag.style.display = "none";
    } else {
        shoppingBag.style.display = "block";
    }
});

document.querySelector(".closed-shopping").addEventListener("click", function () {
    document.querySelector(".shopping-bag-block").style.display = "none";
});


document.getElementById("search").addEventListener("click", function () {
    const searchBar = document.querySelector(".search-bar");
    // Виправлено '=' на '==='
    if (searchBar.style.display === "block") {
        searchBar.style.display = "none";
    } else {
        searchBar.style.display = "block";
    }
})

document.getElementById("search-closed-btn").addEventListener("click", function () {
    document.querySelector(".search-bar").style.display = "none";
});


// filter
