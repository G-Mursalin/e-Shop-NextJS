import { MongoClient, ServerApiVersion } from "mongodb";

let db;

const dbConnect = async () => {
  if (db) return db;
  try {
    const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@cluster0.exjbuaf.mongodb.net/db_e-Shop?retryWrites=true&w=majority`;

    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    db = client.db("db_e-Shop");
    await client.db("admin").command({ ping: 1 });
    console.log("You successfully connected to Database!");
    return db;
  } catch (error) {
    console.log(error.message);
  }
};

export default dbConnect;
