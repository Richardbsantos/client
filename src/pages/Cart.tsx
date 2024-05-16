import React, { useEffect, useState } from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import CartItem from "../ui/CartItem";
import axios from "axios";
import { loadStripe, Stripe } from "@stripe/stripe-js";

interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
  // Add more properties as needed
}

const Cart: React.FC = () => {
  const productData: Product[] = useSelector((state: any) => state.bazar.productData);
  const userInfo = useSelector((state: any) => state.bazar.userInfo);
  const [totalAmt, setTotalAmt] = useState<string>("");

  if (!userInfo) {
    return <Navigate to="/login" />;
  }

  const stripePromise = loadStripe("");

  useEffect(() => {
    let price = 0;
    productData.forEach((item) => {
      price += item.price * item.quantity;
    });
    setTotalAmt(price.toFixed(2));
  }, [productData]);

  const handleCheckout = async () => {
    const stripe: Stripe | null = await stripePromise;

    const response = await axios.post("http://localhost:8000/pay", {
      items: productData,
      email: userInfo.email,
    });

    const checkoutSession = response.data;

    // Redirecting user/customer to Stripe Checkout
    const result = await stripe?.redirectToCheckout({
      sessionId: checkoutSession.id,
    });

    if (result?.error) {
      alert(result.error.message);
    }
  };

  return (
    <div>
      <img
        className="w-full h-60 object-cover"
        src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="cartImg"
      />
      {productData.length > 0 ? (
        <div className="max-w-screen-xl mx-auto py-20 flex flex-col lg:flex-row gap-10 px-4">
          <div className="w-full lg:w-2/3">
            <CartItem />
          </div>
          <div className="w-full lg:w-1/3 bg-[#fafafa] py-6 px-4">
            <div className=" flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
              <h2 className="text-2xl font-medium ">Cart totals</h2>
              <p className="flex items-center gap-4 text-base">
                Subtotal{" "}
                <span className="font-titleFont font-bold text-lg">
                  R${totalAmt}
                </span>
              </p>
              <p className="flex items-start gap-4 text-base">
                Enviar{" "}
                <span>
                  Recife,Pe
                </span>
              </p>
            </div>
            <p className="font-titleFont font-semibold flex justify-between mt-6">
              Total <span className="text-xl font-bold">R${totalAmt}</span>
            </p>
            <button
              onClick={handleCheckout}
              className="text-base bg-black text-white w-full rounded-md py-3 mt-6 hover:bg-gray-800 duration-300"
            >
              Fechar pedido
            </button>
          </div>
        </div>
      ) : (
        <div className="max-w-screen-xl mx-auto py-10 flex flex-col items-center gap-2 justify-center">
          <p className="text-xl text-orange-600 font-titleFont font-semibold">
            Seu carrinho de compras está vazio.
          </p>
          <Link to="/">
            <button className="flex items-center gap-1 text-gray-400 hover:text-black duration-300">
              <span>
                <HiOutlineArrowLeft />
              </span>
              Voltar as Compras.
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;

