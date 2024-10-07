// model.js

export class ProductModel {
    constructor() {
        // Initialisation des produits
        this.products = [
            { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
            { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
            { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
            { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
            { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
            { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
            { category: "Fruits", price: "$3", stocked: true, name: "Kiwi"},
            { category: "Fruits", price: "$5", stocked: false, name: "Mango" }

        ];
    }

    // Retourner tous les produits
    getProducts() {
        return this.products;
    }
}

