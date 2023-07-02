import "server-only";
import dbConnect from "./dbConnect";

export const getCategoriesFromDb = async () => {
  const db = await dbConnect();

  const categoriesCollection = db.collection("categories");

  return categoriesCollection.find({}).toArray();
};
