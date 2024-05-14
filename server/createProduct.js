const MongoClient = require("mongodb").MongoClient;
const readline = require("readline");

async function createProduct() {
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    try {
        await client.connect();

        const productsCollection = client.db("a-fresh-tart").collection("products");
        const categoriesCollection = client.db("a-fresh-tart").collection("categories");

        const product = {};

        console.log("Enter product details:");

        rl.question("Name: ", (name) => {
            product.name = name;

            rl.question("Adjective: ", (adjective) => {
                product.adjective = adjective;

                rl.question("Description: ", (description) => {
                    product.desciption = description;

                    rl.question("Price: ", (price) => {
                        product.price = price;

                        askCategory();

                        function askCategory() {
                            rl.question("Category: ", async (categoryName) => {
                                const category = await categoriesCollection.findOne({ name: categoryName.toLowerCase() });

                                if (!category) {
                                    console.log(`Category '${categoryName}' does not exist.`);
                                    askCategory(); 
                                } else {
                                    product.category = category;

                                    rl.question("Image URL: ", async (imageUrl) => {
                                        product.imageUrl = imageUrl;

                                        await productsCollection.insertOne(product);
                                        console.log(`Product '${product.name}' added successfully.`);

                                        rl.close();
                                        await client.close();
                                    });
                                }
                            });
                        }
                    });
                });
            });
        });
    } catch (e) {
        console.error("An error occurred:", e);
    }
}

// Start adding the product
createProduct();
