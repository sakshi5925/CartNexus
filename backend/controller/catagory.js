import axios from "axios";

export const Catagory = async (req, res) => {
    const API_URL = "https://dummyjson.com/products?limit=200";
    const response = await axios.get(API_URL);
    const products = await response.data.products;
    const categoryMap = {};
    products.forEach((product)=>{
        const category=product.category;
        const image = product.images?.[0] || "";
        if(!categoryMap[category]){
            categoryMap[category]=image;
        }
    });
    const uniqueCategories = Object.entries(categoryMap).map(([name, image]) => ({
        name,
        image
    }));

  res.send(uniqueCategories);
}