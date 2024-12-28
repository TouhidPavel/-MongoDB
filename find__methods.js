// Database Name
use('ecommerce')



// Find All Documents
db.products.find()



// Find Documents with a Query
db.products.find(
    {
        category: 'smartphone'
    }
)



// Find Documents with a Projection
db.products.find(
    {
        category: 'smartphone'
    },
    {
        _id: 0,
        name: 1,
        price: 1
    }
)



// Find One Document
db.products.findOne(
    {
        category: 'laptop'
    }
)



// Using Comparison Operators
db.products.find(
    {
        category: 'laptop',
        price: { $gt: 50000 }
    }
)



// Using Logical Operator
db.products.find(
    {
        $and: [
            { category: 'laptop' },
            { price: { $gt: 50000 } }
        ]
    }
)



// Using limit()
db.products.find().limit(5)



// Sorting the Results
db.products.find(
    {
        category: 'laptop'
    }
).sort(
    {
        name: 1
        // 1 for Ascending Order
        // -1 for Descending Order
    }
)