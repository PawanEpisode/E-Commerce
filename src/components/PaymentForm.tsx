"use client";
import { useSelector, useDispatch } from "react-redux";
import { StateProps } from "../../type";
import FormattedPrice from "./FormattedPrice";
import { loadStripe } from "@stripe/stripe-js";
import { useSession, signIn } from "next-auth/react";
import { resetCart, saveOrder } from "@/redux/shoppingSlice";
import useTotalAmount from "@/hooks/useTotalAmount";

const PaymentForm = () => {
  const dispatch = useDispatch();
  const { productData, userInfo } = useSelector(
    (state: StateProps) => state.shopping
  );

  const totalAmount = useTotalAmount(productData);

  // Stripe Payment Integration Started Here
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
  );

  const { data: session } = useSession();

  const handleSignIn = () => signIn();

  const handleCheckout = async () => {
    if (!userInfo) {
      return handleSignIn();
    }
    const stripe = await stripePromise;
    const response = await fetch(
      "https://e-commerce-pawanepisode.vercel.app/api/checkout",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: productData,
          email: session?.user?.email,
        }),
      }
    );
    const data = await response.json();

    if (response.ok) {
      await dispatch(saveOrder({ order: productData, id: data.id }));
      stripe?.redirectToCheckout({ sessionId: data.id });
      dispatch(resetCart());
    } else {
      throw new Error("Failed to create stripe payment");
    }
  };

  const getPaymentSection =(section: string, amount: number) => {
    return (
      <div className="border-b-[1px] border-b-slate-300 py-2">
        <div className="max-w-lg flex items-center justify-between">
          <p className="uppercase font-medium">{section}</p>
          <p>
            <FormattedPrice amount={amount} />
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full bg-white p-4">
      <h2>Cart Totals</h2>
      {getPaymentSection('Subtotal', totalAmount)}
      {getPaymentSection('Shipping', productData.length ? 20 : 0)}
      {getPaymentSection('Total Price', productData.length ? totalAmount + 20 : 0)}
      <button
        onClick={handleCheckout}
        className={`text-slate-100 
        ${
          userInfo
            ? "bg-green-600 hover:bg-green-800"
            : "bg-red-600 hover:bg-red-800"
        } 
        mt-4 py-3 px-6 cursor-pointer duration-200 rounded-full`}
      >
        {userInfo ? "Proceed to checkout" : "Sign-in to checkout"}
      </button>
      {!userInfo && (
        <p
          className="text-base mt-1 text-red-800 
          font-semibold animate-bounce"
        >
          Please login to continue
        </p>
      )}
    </div>
  );
};

export default PaymentForm;
