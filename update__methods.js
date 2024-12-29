/*
db.collection.updateOne(filter, update, options)
db.collection.updateMany(filter, update, options)
db.collection.replaceOne(filter, replacement, options)

Parameters:
    filter: a query selecting the documents to update
    update: an update operation modifying the selected documents
    options: an object with optional parameters

db.collection.updateMethod(
    { <filter> },
    { <update> },
    { <options> }
)
*/

use('ecommerce')

// Update a Single Document
db.products.updateOne(
    {
        name: 'iPhone 10'
    },
    {
        $set: {
            name: 'iPhone 16 Pro Max',
            price: 170000
        }
    }
)



// Update Multiple Documents
db.products.updateMany(
    {
        category: 'smartphone'
    },
    {
        $set: {
            stock: 'available'
        }
    }
)



// Update All Documents
db.products.updateMany(
    {},
    {
        $set: {
            stock: 'out of stock'
        }
    }
)



// Replace a Single Document
db.products.replaceOne(
    {
        name: 'iPhone 10'
    },
    {
        name: 'iPhone 16 Pro Max',
        price: 170000,
        category: 'smartphone',
        active: true
    }
)