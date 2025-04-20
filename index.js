import"./assets/styles-BK7AYJoX.js";function i(){return fetch("https://dummyjson.com/products/categories").then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()})}function c(t=1,s=12){const e=(t-1)*s;return fetch(`https://dummyjson.com/products?limit=${s}&skip=${e}`).then(o=>{if(!o.ok)throw new Error(o.statusText);return o.json()})}function a(t){return fetch(`https://dummyjson.com/products/category/${t}`).then(s=>{if(!s.ok)throw new Error(s.statusText);return s.json()})}const u=document.querySelector(".categories"),l=document.querySelector(".products");function d(t){const s=t.map(e=>`
    <li class="categories__item">
      <button class="categories__btn" type="button">${e}</button>
    </li>
  `).join("");u.innerHTML=s}function n(t){const s=t.map(e=>`
    <li class="products__item" data-id="${e.id}">
      <img class="products__image" src="${e.thumbnail}" alt="${e.title}" />
      <p class="products__title">${e.title}</p>
      <p class="products__brand"><span class="products__brand--bold">Brand:</span> ${e.brand}</p>
      <p class="products__category">Category: ${e.category}</p>
      <p class="products__price">Price: $${e.price}</p>
    </li>
  `).join("");l.innerHTML=s}const p=document.querySelector(".categories"),r=document.querySelector(".not-found"),g=1;i().then(t=>{const s=["All",...t];d(s)});p.addEventListener("click",m);c(g).then(t=>{n(t.products)});function m(t){if(!t.target.classList.contains("categories__btn"))return;const s=t.target.textContent.trim();s==="All"?c(1).then(e=>{n(e.products)}):a(s).then(e=>{e.products.length===0?r.classList.add("not-found--visible"):(r.classList.remove("not-found--visible"),n(e.products.slice(0,12)))})}
//# sourceMappingURL=index.js.map
