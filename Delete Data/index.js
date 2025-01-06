const express = require("express")
const mongoose = require("mongoose")
const productSchema = require("./schemas/productSchema")
const Product = mongoose.model("Product", productSchema)

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Delete a Product
app.delete("/product/:id", async (req, res) => {
    try {
        const productToDelete = await Product.deleteOne({ _id: req.params.id })
        if (!productToDelete) {
            return res.status(404).json({
                message: "Product Not Found"
            })
        }
        res.status(200).json({
            message: "Product Deleted Successfully"
        })
    } catch (err) {
        res.status(500).json({
            error: "There was a Server Side Error",
            reason: err.message
        })
    }
})

// Delete a Product
app.delete("/product/:id", async (req, res) => {
    try {
        const productToDelete = await Product.findByIdAndDelete({ _id: req.params.id })
        if (!productToDelete) {
            return res.status(404).json({
                message: "Product Not Found"
            })
        }
        res.status(200).json({
            message: "Product Deleted Successfully",
            data: productToDelete
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