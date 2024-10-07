// app.js

import { ProductModel } from './model.js';
import { ProductView } from './view.js';
import { ProductController } from './controller.js';

// Initialiser le modèle avec les données du produit
const model = new ProductModel();

// Initialiser la vue
const view = new ProductView();

// Initialiser le contrôleur avec la vue et le modèle
const controller = new ProductController(view, model);

