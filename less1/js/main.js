const products = [
     {id: 1, title: 'Notebook', price: 1000},
     {id: 2, title: 'Mouse', price: 100},
     {id: 3, title: 'Keyboard', price: 250},
     {id: 4, title: 'Gamepad', price: 150},
];

// Добавил значения по умолчанию для title и price
const renderProduct = (title = 'someProduct', price = 'PRICE') => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="by-btn">Добавить</button>
              </div>`;
}

const renderProducts = (list) => {

    //СОКРАЩЕННАЯ ЗАПИСЬ ФУНКЦИИ
    const productList = list.map(product => renderProduct(product.title, product.price)
    );
    // console.log(productList);

    // ЗАМЕНИЛ РАЗДЕЛИТЕЛЬ В МАССИВЕ НА ПРОБЕЛ
    document.querySelector('.products').innerHTML = productList.join(' '); 
}

renderProducts(products);

// ВТОРОЙ ВАРИАНТ РЕШЕНИЯ ---


/*
const renderProduct = (title = 'someProduct', price = 'PRICE') => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="by-btn">Добавить</button>
              </div>`;
}

function renderProducts (list){
    for (let i = 0; i < list.length; i++){
        let productList = renderProduct(list[i].title, list[i].price)
        let productDiv = document.querySelector('.products');
        productDiv.insertAdjacentHTML("beforeend", productList);
    }

}
renderProducts(products);
*/