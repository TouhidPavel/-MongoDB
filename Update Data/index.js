const express = require("express")
const mongoose = require("mongoose")
const productSchema = require("./schemas/productSchema")
const Product = mongoose.model("Product", productSchema)

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Update a Product
app.put("/product/:id", async (req, res) => {
    try {
        const productToUpdate = await Product.updateOne(
            { _id: req.params.id },
            { $set: req.body }
        )
        res.status(200).json({
            message: "Product Updated Successfully"
        })
    } catch (err) {
        res.status(500).json({
            error: "There was a Server Side Error",
            reason: err.message
        })
    }
})

app.put("/product/:id", async (req, res) => {
    try {
        const productToUpdate = await Product.findByIdAndUpdate(
            { _id: req.params.id },
            { $set: req.body },
            { new: true }
        )
        res.status(200).json({
            message: "Product Updated Successfully",
            data: productToUpdate
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