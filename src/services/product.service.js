import "server-only";
import dbConnect from "./dbConnect";
import { ObjectId } from "mongodb";

export const getProductsFromDb = async (categoryId) => {
  const db = await dbConnect();
  const productsCollection = db.collection("products");
  const query = {};
  if (categoryId) {
    query.categoryId = categoryId;
  }
  return productsCollection.find(query).toArray();
};

export const getProductByIdFromDb = async (id) => {
  const db = await dbConnect();
  const productsCollection = db.collection("products");
  const query = {
    _id: new ObjectId(id),
  };
  return productsCollection.findOne(query);
};
