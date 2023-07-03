import Checkout from "./Checkout";

export const metadata = {
  title: "Checkout - e Shop",
};

const CheckoutPage = () => {
  return (
    <div>
      <h1 className="my-5 text-2xl">Review Added Products</h1>
      <Checkout />
    </div>
  );
};

export default CheckoutPage;
