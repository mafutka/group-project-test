//Логіка сторінки Home
import { fetchCategories } from "./js/products-api";

const categoriesList = document.querySelector(".categories");

fetchCategories()
.then(categories => {
    const allCategories = ["All", ...categories];
        renderCategories(allCategories);
    })
    .catch(error => {
        console.log("No categories to get", error);
        
    });

    function renderCategories(categories) {
        const markup = categories.map(category => `
            <button class="categories__btn" type="button">${category}</button>
    </li>
            `).join("");

            categoriesList.innerHTML = markup;
    }