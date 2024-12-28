// Database Name
use('ecommerce')

// Insert a Single Document
db.products.insertOne(
    {
        name: 'iPhone 10', 
        price: 100000, 
        category: 'smartphone', 
        active: true
    }
)



// Insert Multiple Documents
db.products.insertMany(
    [
        {
            name: 'Samsung Galaxy S22', 
            price: 85000,
            category: 'smartphone',
            active: true
        },
        {
            name: 'Dell XPS 13',
            price: 120000,
            category: 'laptop',
            active: true
        },
        {
            name: 'Apple MacBook Pro',
            price: 150000,
            category: 'laptop',
            active: true
        },
        {
            name: 'Acer Nitro 5',
            price: 55000,
            category: 'desktop',
            active: true
        },
        {
            name: 'Sony WH-1000XM5',
            price: 30000,
            category: 'headphones',
            active: false
        },
        {
            name: 'Beats Solo 3',
            price: 12000,
            category: 'headphones',
            active: true
        },
        {
            name: 'HP Pavilion X360',
            price: 80000,
            category: 'laptop',
            active: true
        },
        {
            name: 'Apple Watch Series 9',
            price: 40000,
            category: 'smartwatch',
            active: true
        },
        {
            name: 'TP-Link Archer AX50',
            price: 12000,
            category: 'router',
            active: true
        }
    ]
)



// Insert a Single Document
db.products.insert(
    {
        name: 'Canon EOS R6',
        price: 200000,
        category: 'camera',
        active: true
    }
)



// Insert Multiple Documents
db.products.insert(
    [
        {
            name: 'Logitech MX Master 3',
            price: 15000,
            category: 'mouse',
            active: true
        },
        {
            name: 'Razer DeathAdder',
            price: 25000,
            category: 'mouse',
            active: true
        }
    ]
)