
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
class CartGoodsItem extends GoodsItem {
  plusGood() {
    this.price++;
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





