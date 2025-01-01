const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Product Name is Required"],
        trim: true,
        maxlength: [50, "Product Name Must be Less Than 50 Characters"],
    },
    price: {
        type: Number,
        required: [true, "Price is Required"]
    },
    category: {
        type: String,
        required: [true, "Category is Required"],
        enum: ["smartphone", "laptop", "mouse", "keyboard", "headphone"]
    },
    active: {
        type: Boolean,
        default: true
    },
    createAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = productSchema