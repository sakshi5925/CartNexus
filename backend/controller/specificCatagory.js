import axios from "axios";

export const SpecificProducts = async(req,res) => {
    try {
        const catagory = req.params.id;
        console.log(catagory);

        // if catagory is not mentioned
        if(!catagory) return res.status(400).json({error: 'Catagory is required'});
    
        // fetch all the products 
        const response = await axios.get("https://dummyjson.com/products?limit=200");
        const allProducts = response.data.products;
        
        // filter Product of specific catagory
        const filterProduct = allProducts.filter(product => product.category.toLowerCase() === catagory.toLowerCase());
        res.status(200).json({
            success: true,
            data: filterProduct
        })
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch products" });        
    }
   
}