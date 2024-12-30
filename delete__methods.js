/*
db.collection.deleteOne(filter)
db.collection.deleteMany(filter)

filter: A Query Selecting the Documents to Delete

db.collection.deleteOne({ <filter> })
db.collection.deleteMany({ <filter> })
*/

use('ecommerce')

// Delete a Single Document
db.products.deleteOne(
    {
        name: 'iPhone 16 Pro Max'
    }
)


// Delete Multiple Documents
db.products.deleteMany(
    {
        category: 'laptop'
    }
)



// Delete All Documents
db.products.deleteMany({})