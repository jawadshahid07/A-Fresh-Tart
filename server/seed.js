const { faker } = require('@faker-js/faker');
const MongoClient = require("mongodb").MongoClient;
const _ = require("lodash");

async function main() {
    const uri = "mongodb://localhost://27017";
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const productsCollection = client.db("a-fresh-tart").collection("products");
        const categoriesCollection = client.db("a-fresh-tart").collection("categories");

        let categories = ['pastry', 'cake', 'brownie', 'cupcake'].map((category) => { return { name: category } });
        await categoriesCollection.insertMany(categories);

        let imageUrls = [
            'https://res.cloudinary.com/dkkdith2d/image/upload/v1713079847/pl1hrmkuf53i3s7s8wdd.png',
            'https://res.cloudinary.com/dkkdith2d/image/upload/v1713079847/wch4oo49ocyffyyuusem.png',
            'https://res.cloudinary.com/dkkdith2d/image/upload/v1713079847/o1bso4irwaszqjk57hwq.png',
            'https://res.cloudinary.com/dkkdith2d/image/upload/v1713079848/extdkwffw8iemywtanom.png',
        ]

        let index = [0,1,2,3];

        let products = [];
        for (let i = 0; i < 10; i+=1) {
            selected_idx = _.sample(index);
            let newProduct = {
                name: faker.commerce.productName(),
                adjective: faker.commerce.productAdjective(),
                desciption: faker.commerce.productDescription(),
                price: faker.commerce.price(),
                category: categories[selected_idx],
                imageUrl: imageUrls[selected_idx]
            };
            products.push(newProduct);
        }
        await productsCollection.insertMany(products);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main();