//Business logic-
// backend logic
// import {productList} from "../db/db";
// import {Product} from "../model/product.model";
import Product from "../model/product.model";
import {ProductDto} from "../dto/product.dto";

// Get all products service logic
export const  getAllProducts = async():Promise <ProductDto[]> => {
    // return productList;
    return Product.find();
}

//return kara save karapu product eka
export const saveProduct = async (product: ProductDto): Promise<ProductDto> => {
    // productList.push((product));
    // return product;
    return Product.create(product);
}

export const getProductById = async (id: number): Promise<any> => {
    // return productList.find(product => product.id === id);
    return  Product.findOne({id: id}); //sigle record search

}

export const  updateProduct = async (id: number, data:ProductDto)=> {
    // const  product = productList.find(product => product.id === id);
    const product = await Product.findOneAndUpdate({id: id}, data, {new: true}) //get existing record and update it
    console.log(product);
    if (!product){
        return null;
    }
    //replace kara
    Object.assign(product, data)
    return product;
}

export const deleteProduct = async (id: number) => {
    // const index = productList.findIndex(product => product.id === id);
    // if(index === -1){
    //     return false;
    // }
    // productList.splice(index, 1);
    await Product.deleteOne({id: id}); //delete one record
    return true;


}

export const validateProduct = (product: ProductDto) => {
    if (!product.id || !product.name || !product.price || !product.currency || !product.image){
        return "All filed are required";
    }
    return null;
}