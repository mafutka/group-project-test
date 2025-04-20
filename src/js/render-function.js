//Функцію для створення, рендеру або видалення розмітки

const categoriesList = document.querySelector(".categories");
const productList = document.querySelector(".products");

export function renderCategories(categories) {
  const markup = categories.map(category => `
    <li class="categories__item">
      <button class="categories__btn" type="button">${category}</button>
    </li>
  `).join('');

  categoriesList.innerHTML = markup;
}

export function renderProducts(products) {
  const markupProducts = products.map(product => `
    <li class="products__item" data-id="${product.id}">
      <img class="products__image" src="${product.thumbnail}" alt="${product.title}" />
      <p class="products__title">${product.title}</p>
      <p class="products__brand"><span class="products__brand--bold">Brand:</span> ${product.brand}</p>
      <p class="products__category">Category: ${product.category}</p>
      <p class="products__price">Price: $${product.price}</p>
    </li>
  `).join('');

  productList.innerHTML = markupProducts;
}

