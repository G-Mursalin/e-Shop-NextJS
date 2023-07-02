import getSingleProduct from "@/utils/getSingleProduct";
import Image from "next/image";

export const revalidate = 0;

const ProductDetails = async ({ params: { id } }) => {
  const product = await getSingleProduct(id);
  const { imageUrls, title, price, ratings, features, details, brand } =
    product;

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default ProductDetails;
