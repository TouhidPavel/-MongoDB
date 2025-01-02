const express = require("express")
const mongoose = require("mongoose")
const productSchema = require("./schemas/productSchema")
const Product = mongoose.model("Product", productSchema)

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Create a Product
app.post("/", async (req, res) => {
    try {
        const newProduct = new Product(req.body)
        const saveProduct = await newProduct.save()
        res.status(201).json({
            message: "Product Inserted Successfully",
            product: saveProduct
        })

    } catch (err) {
        res.status(500).json({
            error: "There was a Server Side Error",
            reason: err.message
        })
    }
})

// Create Multiple Product
app.post("/all", async (req, res) => {
    try {
        const products = await Product.insertMany(req.body)
        res.status(201).json({
            message: "Products Inserted Successfully",
            products: products
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