import"./assets/styles-BK7AYJoX.js";function n(){return fetch("https://dummyjson.com/products/categories").then(t=>{if(!t.ok)throw new Error(t.stastusText);return t.json()})}const r=document.querySelector(".categories");n().then(t=>{const e=["All",...t];c(e)}).catch(t=>{console.log("No categories to get",t)});function c(t){const e=t.map(o=>`
            <button class="categories__btn" type="button">${o}</button>
    </li>
            `).join("");r.innerHTML=e}
//# sourceMappingURL=index.js.map
