import {Router} from "express";
import {deleteProduct, getAllProducts, getProduct, saveProduct, updateProduct} from "../controllers/product.controller";
import {authorizeRoles} from "../middleware/auth.middleware";
const productRouter = Router();

// Handle Requests
productRouter.get("/all",getAllProducts );//GetAll
productRouter.post("/save",authorizeRoles('admin'),saveProduct);//Save
productRouter.get("/:id",getProduct);//Get by ID
productRouter.put("/update/:id",authorizeRoles('admin'),updateProduct );//Update by ID
productRouter.delete("/delete/:id",authorizeRoles('admin'), deleteProduct);//Delete by ID
export default productRouter;
