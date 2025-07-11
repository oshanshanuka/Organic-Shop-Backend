import {Router} from "express";
import {deleteProduct, getAllProducts, getProduct, saveProduct, updateProduct} from "../controllers/product.controller";
const productRouter = Router();

// Handle Requests
productRouter.get("/all",getAllProducts );//GetAll
productRouter.post("/save",saveProduct);//Save
productRouter.get("/:id",getProduct);//Get by ID
productRouter.put("/update/:id",updateProduct );//Update by ID
productRouter.delete("/delete/:id", deleteProduct);//Delete by ID
export default productRouter;
