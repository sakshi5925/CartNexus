import axios from "axios";

export const SpecificProducts = async (req, res) => {
    try {
        const category = req.params.id; // Extract category from URL
        console.log("Category:", category);

        // Fetch all the products 
        const response = await axios.get("https://dummyjson.com/products?limit=200");
        const allProducts = response.data.products;

        // If no category is provided, return all products
        if (!category || category === "all") {
            return res.status(200).json({
                success: true,
                data: allProducts
            });
        } 

        // Filter products based on category
        const filteredProducts = allProducts.filter(product => 
            product.category.toLowerCase() === category.toLowerCase()
        );

        return res.status(200).json({
            success: true,
            data: filteredProducts
        });

    } catch (error) {
        res.status(500).json({ error: "Failed to fetch products" });
    }
};
