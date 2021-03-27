class ProductsList {
    constructor(container = '.featured__list') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._fetchProducts();
    }

    _fetchProducts() {
        this.goods = [
            { id: 1, title: 'Рюкзак', price: 2000, img: './img/first.jpg', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery' },
            { id: 2, title: 'Туфли', price: 20, img: './img/sec.jpg', description: '' },
            { id: 3, title: 'Панама', price: 200, img: './img/third.jpg', description: '' },
            { id: 4, title: 'Брюки', price: 50, img: './img/fourth.jpg', description: '' },
            { id: 5, title: 'Пиджак', price: 50, img: './img/fifth.jpg', description: '' },
            { id: 6, title: 'Пиджак', price: 50, img: './img/sixth.jpg', description: '' },
        ];
    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render())
        }
    }
    getSum() {
        /*let sum = 0;
        for(let product of this.goods){
            sum += product.price;
        }*/
        //reduce используется для последовательной обработки каждого элемента массива с сохранением промежуточного результата.
        let res = this.allProducts.reduce((sum, item) => sum += item.price, 0);
        alert(res);
    }
}


class ProductItem {
    constructor(product, description = 'нет описания') {
        this.title = product.title;
        this.description = description;
        this.price = product.price;
        this.id = product.id;
        this.img = product.img;

    }

    render() {
        return `<li class="featured__item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <h3 class="featured__header">${this.title}</h3>
                <p class="featured__text">${this.description}</p>
                <p class="featured__price">${this.price}</p>
                <div class="featured__card">
                <div class="overlay"></div>
                <button type="button" class="featured__button">Add to Cart</button>
            </li>`
    }
}
class CartGoodsItem extends GoodsItem {
    constructor(quantity, color, size) {
        this.quantity = quantity;
        this.color = color;
        this.size = size;

    }
    render() {
        return `<ul class="cart-cards__list">
        <img src="${this.img}" class="cart-cards__wide_img" width="262" height="306"></img>
        <h3 class="title-cart">MANGO  PEOPLE  T-SHIRT</h3>
        <li>${this.price}</li>
        <li>${this.color}</li>
        <li>${this.size}</li>
        <li>quantity${this.price * this.quantity}</li>
    </ul>`;
    }

}

let list = new ProductsList();
list.render();
list.getSum();

class Basket {
    addGoods() {

    }
    removeGoods() {

    }
    changeGoods() {

    }
}

class ElemBasket {

}