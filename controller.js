// controller.js

export class ProductController {
    constructor(view, model) {
        this.view = view;
        this.model = model;

        // Liaison des événements de filtrage à la vue
        this.view.bindFilterChange(this.handleFilterChange.bind(this));

        // Rendu initial
        this.handleFilterChange();
    }

    handleFilterChange() {
        const filterText = this.view.getFilterText();
        const maxPrice = this.view.getFilterPrice(); // Récupérer la valeur maximale de prix
        const inStockOnly = this.view.getInStockOnly();

        // Filtrer les produits en fonction du nom saisi, du prix et de l'état du stock
        const filteredProducts = this.model.getProducts().filter(product => {
            const nameMatches = product.name.toLowerCase().includes(filterText);
            const priceMatches = parseFloat(product.price.replace('$', '')) <= maxPrice;
            const inStockMatches = !inStockOnly || product.stocked;

            return nameMatches && priceMatches && inStockMatches;
        });

        // Rendre les produits filtrés
        this.view.render(filteredProducts);
    }
}

