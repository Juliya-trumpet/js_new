// const features = [
//     { title: 'Рюкзак', price: 1500, image: './img/first.jpg', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery' },
//     { title: 'Туфли', price: 50000, image: './img/sec.jpg', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery' },
//     { title: 'Панама', price: 3500, image: './img/third.jpg' },
//     { title: 'Брюки', price: 7500, image: './img/fourth.jpg' },
//     { title: 'Пиджак', price: 6500, image: './img/fifth.jpg' },
//     { title: 'Блузка', price: 2500, image: './img/sixth.jpg' },
// ];

// const renderFeaturesItem = (title, price, image, description = 'Описания нет') => {
//     return `<li class="featured__item">
//     <img src="${image}" alt="${title}" width="360" height="420">
//     <h3 class="featured__header">${title}</h3>
//     <p class="featured__text">${description}</p>
//     <p class="featured__price">${price} тенге</p>
//     <div class="featured__card">
//         <div class="overlay"></div>
//         <button type="button" class="featured__button">Add to Cart</button>
//     </li>`;
// };

// const renderFeaturesList = (list) => {
//     let featuresList = list.map(item => renderFeaturesItem(item.title, item.price, item.image, item.description));
//     document.querySelector('.featured__list').innerHTML = featuresList;
//     };


// renderFeaturesList(features);