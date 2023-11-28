"use client";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Products, StateProps } from "../../type";
import Image from "next/image";
import FormattedPrice from "./FormattedPrice";
import { resetOrder } from "@/redux/shoppingSlice";
import concern from "@/images/concern.jpg";
import ordernow from "@/images/ordernow.jpg";
import Link from "next/link";

const OrderDetails = () => {
  const dispatch = useDispatch();
  const { orderData } = useSelector((state: StateProps) => state?.shopping);

  const [totalAmount, setTotalAmount] = useState(0);

  const getTotalAmount = (orderData: Products[] =[]) => {
    let amount = 0;
    for (const product of orderData) {
      amount += product.price * product.quantity;
    }
    return amount;
  };

  useEffect(() => {
    setTotalAmount(getTotalAmount(orderData?.order));
  },[orderData?.order]);

  return (
    <div>
      {orderData?.order?.length ? (
        <div>
          <div
            className="grid grid-cols-7 uppercase text-sm 
                font-medium py-2 border-b-[1px] border-b-gray-300"
          >
            <p className="col-span-4">Items</p>
            <p className="flex items-center justify-center">Quantity</p>
            <p className="flex items-center justify-center">Unit Price</p>
            <p className="flex items-center justify-center">Amount</p>
          </div>
          <div className="py-2 flex flex-col justify-center gap-5">
            {orderData?.order?.map((item: Products) => (
              <div
                key={item?._id}
                className="py-2 border-b-[1px] border-gray-300 
                            grid grid-cols-7 items-center shadow-md bg-white p-2 rounded-md"
              >
                <div className="col-span-4 flex items-start gap-2 text-sm">
                  <Image
                    src={item?.image}
                    alt="product image"
                    width={400}
                    height={400}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div>
                    <h3 className="text-base font-semibold mb-0.5">
                      {item?.title}
                    </h3>
                    <p>{item?.description}</p>
                  </div>
                </div>
                <p className="flex items-center justify-center">
                  {item?.quantity}
                </p>
                <p className="flex items-center justify-center">
                  <FormattedPrice amount={item?.price} />
                </p>
                <p className="flex items-center justify-center">
                  <FormattedPrice amount={item?.price * item?.quantity} />
                </p>
              </div>
            ))}
          </div>
          <div
            className="text-lg font-medium py-2 
            border-b-[1px] border-b-gray-300"
          >
            <p>Payment Details</p>
          </div>
          <p className="py-2">
            Total Paid{" "}
            <span className="text-xl font-semibold">
              <FormattedPrice amount={totalAmount} />
            </span>
          </p>
          <button
            onClick={() => dispatch(resetOrder())}
            className="mt-5 border-[1px] border-gray-500 
            py-1 px-4 font-medium rounded-md text-darkText
            hover:bg-red-600 hover:text-white cursor-pointer duration-200"
          >
            Reset Order
          </button>
        </div>
      ) : (
        <div className="flex p-4 flex-col gap-y-3 
        items-center bg-white justify-center 
        shadow-md rounded-md">
            <Image 
            src={ordernow}
            alt="shop now image"
            width={600}
            height={600}
            className="object-cover"
            />

            <div className="flex items-center justify-center">
                <h2 className="text-4xl font-bold">
                Oops! You haven't placed any order!
                </h2>
                <Image src={concern} alt="emoji" className="w-20 h-20" />
            </div>
            <p>Nothing In Order Summary To Show</p>
            <Link href={"/"}>
            <button
              className="bg-black text-slate-100 
                    w-44 h-12 rounded-full text-base 
                    font-semibold hover:bg-red-600 duration-200"
            >
              Continue Shopping
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default OrderDetails;
