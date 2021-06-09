const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// Переделать в ДЗ не использовать fetch а Promise! Дальше НЕ ИСПОЛЬЗОВАТЬ!!!
// let getRequest = (url) => {
//   return new Promise((resolve, reject) => {
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', url, true);
//     xhr.onreadystatechange = () => {
//       if (xhr.readyState === 4) {
//         if (xhr.status !== 200) {
//           console.log('Error');
//         } else {
//           cb(xhr.responseText);
//         }
//       }
//     };
//     xhr.send();
//   })

// };


//–--------------------------------

class ProductList {
  #goods;
  #allProducts;
  constructor(container = '.products') {
    this.container = container;
    this.#goods = [];
    this.#allProducts = [];

    this.#getProducts()
        .then((data) => {
          this.#goods = data;
          this.#render();
        });
    // this.#fetchGoods();
    // this.#render();
  }

  sum() {
    return this.#allProducts.reduce((sum, { price }) => sum + price, 0);
  }

  // #fetchGoods() {
  //   getRequest(`${API}/catalogData.json`, (data) => {
  //     console.log('response')
  //     // console.log(data);
  //     this.#goods = JSON.parse(data);
  //     this.#render();
  //     // console.log(this.#goods);
  //   });
  // }

  #getProducts() {
    return fetch(`${API}/catalogData.json`)
        .then((response) => response.json())
        .catch((err) => console.log(err));
  }

  #render() {
    console.log('render')
    const block = document.querySelector(this.container);

    for (let product of this.#goods) {
      const productObject = new ProductItem(product);

      this.#allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
    }
  }
}

class ProductItem {
  constructor(product, img='https://via.placeholder.com/200x150') {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.img = img;
  }

  render() {
    return `<div class="product-item" data-id="${this.id}">
              <img src="${this.img}" alt="Some img">
              <div class="desc">
                  <h3>${this.title}</h3>
                  <p>${this.price} \u20bd</p>
                  <button class="buy-btn">Купить</button>
              </div>
          </div>`;
  }
}

const catalog = new ProductList();

// let i = new XMLHttpRequest;
// i.onreadystatechange = function () {
//   console.log(i.readyState)
//   if (i.readyState === 4 && i.status === 200){
//     addHtml(i.responseText);// Этот код выполнится после получения ответа
//   }

// }
// i.open('GET', 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json', true);
// i.send()


// //преобразую ответ в разметку

// function addHtml(ansver){
//   let a = JSON.parse(ansver);
//   render(a);
// }

// function render (arr){
//   console.log(arr);
//   arr.forEach(function(el){
//     document.querySelector('.products').insertAdjacentHTML('beforeend', tag(el))
//   })
  
// }
// function tag (arrov){
//   console.log(this);
//   console.log(arrov);
//   return  `<div class="product-item" data-id="${arrov.id_product}">
//                 <img src="${arrov.img}" alt="Some img">
//                 <div class="desc">
//                   <h3>${arrov.product_name}</h3>
//                     <p>${arrov.price} \u20bd</p>
//                     <button class="buy-btn">Купить</button>
//                 </div>
//            </div>`;
// }