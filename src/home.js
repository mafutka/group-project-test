//Логіка сторінки Home

import {
    fetchCategories,
    fetchProducts,
    fetchProductsByCategory,
  } from './js/products-api.js';
  import {
    renderCategories,
    renderProducts,
  } from './js/render-function.js';
  
  const categoriesList = document.querySelector(".categories");
  const notFoundMessage = document.querySelector(".not-found");
  const currentPage = 1;
  
  fetchCategories().then(categories => {
    const allCategories = ["All", ...categories];
    renderCategories(allCategories);
  });
  
  categoriesList.addEventListener("click", handleCategoryClick);
  
  fetchProducts(currentPage).then(data => {
    renderProducts(data.products);
  });
  
  function handleCategoryClick(event) {
    if (!event.target.classList.contains("categories__btn")) return;
  
    const selectedCategory = event.target.textContent.trim();
  
    if (selectedCategory === "All") {
      fetchProducts(1).then(data => {
        renderProducts(data.products);
      });
    } else {
      fetchProductsByCategory(selectedCategory).then(data => {
        if (data.products.length === 0) {
          notFoundMessage.classList.add("not-found--visible");
        } else {
          notFoundMessage.classList.remove("not-found--visible");
          renderProducts(data.products.slice(0, 12)); 
        }
      });
    }
  }


    