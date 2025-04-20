// Функції для роботи з бекендом
export function fetchCategories() {
    return fetch('https://dummyjson.com/products/categories')
      .then(res => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
      });
  }
  
  export function fetchProducts(page = 1, limit = 12) {
    const skip = (page - 1) * limit;
    return fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
      .then(res => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
      });
  }
  
  export function fetchProductsByCategory(category) {
    return fetch(`https://dummyjson.com/products/category/${category}`)
      .then(res => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
      });
  }