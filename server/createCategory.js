const MongoClient = require("mongodb").MongoClient;

async function createCategory(categoryName) {
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const categoriesCollection = client.db("a-fresh-tart").collection("categories");

        // Convert category name to lowercase
        const lowercaseCategoryName = categoryName.toLowerCase();

        // Check if category with the same name (case-insensitive) already exists
        const existingCategory = await categoriesCollection.findOne({ name: lowercaseCategoryName });
        if (existingCategory) {
            console.log(`Category '${categoryName}' already exists.`);
            return;
        }

        // Insert the category if it doesn't exist
        const category = { name: lowercaseCategoryName };
        await categoriesCollection.insertOne(category);

        console.log(`Category '${categoryName}' created successfully.`);
    } catch (e) {
        console.error("An error occurred:", e);
    } finally {
        await client.close();
    }
}

// Usage example: node createCategory.js Pastry
const categoryName = process.argv[2];
if (!categoryName) {
    console.error("Please provide a category name.");
} else {
    createCategory(categoryName);
}
