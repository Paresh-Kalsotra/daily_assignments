const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://pareshkalsotra:pareshkanu@cluster0.oepwuys.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

let db;

async function mongoConnect() {
  if (db) {
    return db;
  }
  try {
    const client = new MongoClient(uri); // creates a mongo client
    await client.connect(); //connecting client to database
    db = client.db("moviesDB");
    return db;
  } catch (err) {
    console.log(err);
  }
}

module.exports = mongoConnect;
