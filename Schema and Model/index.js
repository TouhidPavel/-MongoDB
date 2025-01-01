const express = require("express")
const mongoose = require("mongoose")
const productSchema = require("./schemas/productSchema")

const app = express()

// Create Product Model
const Product = new mongoose.model("Product", productSchema)

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