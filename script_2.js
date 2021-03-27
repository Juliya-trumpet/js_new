function makeGETRequest(url, callback) {
  var xhr;

  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      callback(xhr.responseText);
    }
  }

  xhr.open('GET', url, true);
  xhr.send();
}
const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class GoodsItem {
  constructor(id, title, price, image, description) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.image = image;
    this.description = description;
  }
  render() {
    return `<li class="featured__item">
      <img src="${this.image}" alt="${this.title}" width="360" height="420">
      <h3 class="featured__header">${this.title}</h3>
      <p class="featured__text">${this.description}</p>
      <p class="featured__price">${this.price} тенге</p>
      <div class="featured__card">
          <div class="overlay"></div>
          <button type="button" class="featured__button">Add to Cart</button>
      </li>`;
  }
}
class GoodsList {
  constructor() {
    this.goods = [];
  }
  fetchGoods() {
    this.goods = [
      { title: 'Рюкзак', price: 1500, image: './img/first.jpg', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery' },
      { title: 'Туфли', price: 50000, image: './img/sec.jpg', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery' },
      { title: 'Панама', price: 3500, image: './img/third.jpg' },
      { title: 'Брюки', price: 7500, image: './img/fourth.jpg' },
      { title: 'Пиджак', price: 6500, image: './img/fifth.jpg' },
      { title: 'Блузка', price: 2500, image: './img/sixth.jpg' },
    ];
  }
  render() {
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.title, good.price, good.image, good.description);
      listHtml += goodItem.render();
    });
    document.querySelector('.featured__list').innerHTML = listHtml;
  }
  sumCart() {
    let calcSum = this.goods.reduce(function (prev, curr) {
      return [...prev, ...curr.price];
    }, ['сумма доставки']);
    console.log(calcSum);
  }
}
const list = new GoodsList();
list.fetchGoods();
list.render();

class CartGoodsItem extends GoodsItem {
  constructor(quantity, color, size) {
    this.quantity = quantity;
    this.color = color;
    this.size = size;

  }
  render() {
    return `<ul class="cart-cards__list">
    <h3 class="title-cart">MANGO  PEOPLE  T-SHIRT</h3>
    <li>${this.price}</li>
    <li>${this.color}</li>
    <li>${this.size}</li>
    <li>quantity</li>
</ul>`;
  }

}





