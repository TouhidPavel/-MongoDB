const express = require("express")
const mongoose = require("mongoose")
const productSchema = require("./schemas/productSchema")
const Product = mongoose.model("Product", productSchema)

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Read All Products
app.get("/", async (req, res) => {
    try {
        const allProduct = await Product.find()
        if (allProduct.length === 0) {
            return res.status(404).json({
                message: "No Products Found"
            })
        }
        res.status(200).json({
            message: "Products Fetched Successfully",
            data: allProduct
        })
    } catch (err) {
        res.status(500).json({
            error: "There was a Server Side Error",
            reason: err.message
        })
    }
})

// Read a Product with ID
app.get("/product/:id", async (req, res) => {
    try {
        const product = await Product.find({ _id: req.params.id })
        if (product.length === 0) {
            return res.status(404).json({
                message: "Product Not Found"
            })
        }
        res.status(200).json({
            message: "Product Fetched Successfully",
            data: product
        })

    } catch (err) {
        res.status(500).json({
            error: "There was a Server Side Error",
            reason: err.message
        })
    }
})

// Read Products with Query and Projection
app.get("/filter", async (req, res) => {
    try {
        const products = await Product.find({ 
            category: "laptop"
        }).select({
                _id: 0,
                createAt: 0,
                __v: 0
            })
        res.status(200).json({
            message: "Product Fetched Successfully",
            data: products
        })
    } catch (err) {
        res.status(500).json({
            error: "There was a Server Side Error",
            reason: err.message
        })
    }
})

// Database Connection with Mongoose
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/ProductDB")
        console.log("Database Connection Success!")
    } catch (err) {
        console.error("Database Connection Failed!")
        console.error(`Reason: ${err.message}`)
        process.exit(1)
    }
}

// Create Server
const PORT = 3000
app.listen(PORT, async () => {
    console.log(`Server Running at http://localhost:${PORT}`)
    await connectDB()
})