const { faker } = require('@faker-js/faker');
const MongoClient = require("mongodb").MongoClient;
const _ = require("lodash");
const dbConfig = require('./db.config');

async function main() {
    const uri = dbConfig.url;
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const productsCollection = client.db("a-fresh-tart").collection("products");
        const categoriesCollection = client.db("a-fresh-tart").collection("categories");

        let categories = ['pastry', 'cake', 'brownie', 'cupcake'].map((category) => { return { name: category } });
        await categoriesCollection.insertMany(categories);

        let imageUrls = [
            '../src/assets/images/pastry.png',
            '../src/assets/images/cake.png',
            '../src/assets/images/brownie.png',
            '../src/assets/images/cupcake.png',
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