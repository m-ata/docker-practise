import {Router} from 'express';
import ProductController from '../controller';

const productRouter: Router = Router();
const productController = new ProductController();

productRouter.post('/ins', productController.createProduct);
productRouter.post('/get', productController.getAllProducts);
productRouter.post('/update/:id', productController.updateProduct);
productRouter.post('/delete/:id', productController.deleteProduct);

export default productRouter;