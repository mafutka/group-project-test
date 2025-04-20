// Функції для роботи з бекендом
export function fetchCategories() {
    return fetch('https://dummyjson.com/products/categories')
        .then(res => {
            if(!res.ok) {
                throw new Error(res.stastusText);
            }
            return res.json();
        })
}

export function fetchProducts() {
    
}