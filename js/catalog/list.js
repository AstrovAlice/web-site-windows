const jsonData = [
    {   "id": 1, 
        "name": "окно", 
        "color": "Красный", 
        "image": "img1.jpg" 
    },
];

let selectedItems = [];

function toggleSelection(id) {
    const index = selectedItems.indexOf(id);
    if (index === -1) {
        selectedItems.push(id);
    } else {
        selectedItems.splice(index, 1);
    }
    document.getElementById('selected-items').textContent = selectedItems.length ? selectedItems.join(', ') : "Пусто";
}

function loadProducts(filteredData = jsonData) {
    const container = document.getElementById('products');
    container.innerHTML = "";

    filteredData.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Цвет: ${product.color}</p>
            <label>
                <input type="checkbox" onclick="toggleSelection(${product.id})">
                Выбрать
            </label>
        `;
        container.appendChild(card);
    });
}

function filterProducts() {
    const searchValue = document.getElementById('search').value.toLowerCase();
    const colorValue = document.getElementById('colorFilter').value;

    const filteredData = jsonData.filter(product => 
        product.name.toLowerCase().includes(searchValue) && 
        (colorValue === "" || product.color === colorValue)
    );

    loadProducts(filteredData);
}

loadProducts();