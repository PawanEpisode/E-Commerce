"use client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Products, StateProps } from "../../type";
import FormattedPrice from "./FormattedPrice";
import Image from "next/image";
import emptycart from "@/images/emptycart.jpg";

const PaymentForm = () => {
  const { productData, userInfo } = useSelector(
    (state: StateProps) => state.shopping
  );

  const [totalAmount, setTotalAmount] = useState(0);

  const getTotalAmount = (productData: Products[]) => {
    let amount = 0;
    for (const product of productData) {
      amount += product.price * product.quantity;
    }
    return amount;
  };

  useEffect(() => {
    setTotalAmount(getTotalAmount(productData));
  }),
    [productData];

  return (
    <div className="w-full bg-white p-4">
      <h2>Cart Totals</h2>
      <div className="border-b-[1px] border-b-slate-300 py-2">
        <div className="max-w-lg flex items-center justify-between">
          <p className="uppercase font-medium">Subtotal</p>
          <p>
            <FormattedPrice amount={totalAmount} />
          </p>
        </div>
      </div>
      <div className="border-b-[1px] border-b-slate-300 py-2">
        <div className="max-w-lg flex items-center justify-between">
          <p className="uppercase font-medium">Shipping</p>
          <p>
            <FormattedPrice amount={productData.length ? 20 : 0} />
          </p>
        </div>
      </div>
      <div className="border-b-[1px] border-b-slate-300 py-2">
        <div className="max-w-lg flex items-center justify-between">
          <p className="uppercase font-medium">Total Price</p>
          <p>
            <FormattedPrice
              amount={productData.length ? totalAmount + 20 : 0}
            />
          </p>
        </div>
      </div>
      <button
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
