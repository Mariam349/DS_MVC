// view.js

export class ProductView {
    constructor() {
        this.filterInput = document.getElementById('filterInput');
        this.filterPriceInput = document.getElementById('filterPrice'); // Ajout pour le prix
        this.inStockOnlyCheckbox = document.getElementById('inStockOnly');
        this.productTableBody = document.getElementById('productTableBody');
    }

    render(products) {
        this.productTableBody.innerHTML = ''; // Nettoyage de la table

        products.forEach(product => {
            const row = document.createElement('tr');
            if (!product.stocked) {
                row.classList.add('out-of-stock');
            }

            const nameCell = document.createElement('td');
            nameCell.textContent = product.name;
            row.appendChild(nameCell);

            const priceCell = document.createElement('td');
            priceCell.textContent = product.price;
            row.appendChild(priceCell);

            this.productTableBody.appendChild(row);
        });
    }

    getFilterText() {
        return this.filterInput.value.toLowerCase();
    }

    getFilterPrice() {
        const price = this.filterPriceInput.value;
        return price ? parseFloat(price) : Infinity; // Si aucun prix n'est entré, on considère qu'il n'y a pas de limite
    }

    getInStockOnly() {
        return this.inStockOnlyCheckbox.checked;
    }

    bindFilterChange(handler) {
        this.filterInput.addEventListener('input', handler);
        this.filterPriceInput.addEventListener('input', handler); // Surveiller les changements de prix
        this.inStockOnlyCheckbox.addEventListener('change', handler);
    }
}
