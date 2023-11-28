"use client";
import { useSelector, useDispatch } from "react-redux";
import { Products, StateProps } from "../../type";
import Image from "next/image";
import FormattedPrice from "./FormattedPrice";
import { resetOrder } from "@/redux/shoppingSlice";
import concern from "@/images/concern.jpg";
import ordernow from "@/images/ordernow.jpg";
import useTotalAmount from "@/hooks/useTotalAmount";
import CustomButton from "./CustomButton";

const OrderDetails = () => {
  const dispatch = useDispatch();
  const { orderData } = useSelector((state: StateProps) => state?.shopping);

  const totalAmount = useTotalAmount(orderData?.order);

  return (
    <div>
      {orderData?.order?.length ? (
        <div>
          <div
            className="grid grid-cols-7 uppercase text-sm 
                font-medium py-2 border-b-[1px] border-b-gray-300"
          >
            <p className="col-span-4">Items</p>
            <p className="flexcss">Quantity</p>
            <p className="flexcss">Unit Price</p>
            <p className="flexcss">Amount</p>
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
                <p className="flexcss">
                  {item?.quantity}
                </p>
                <p className="flexcss">
                  <FormattedPrice amount={item?.price} />
                </p>
                <p className="flexcss">
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
        <div
          className="flex p-4 flex-col gap-y-3 
        items-center bg-white justify-center 
        shadow-md rounded-md"
        >
          <Image
            src={ordernow}
            alt="shop now image"
            width={600}
            height={600}
            className="object-cover"
          />

          <div className="flexcss">
            <h2 className="text-4xl font-bold">
              Oops! You haven't placed any order!
            </h2>
            <Image src={concern} alt="emoji" className="w-20 h-20" />
          </div>
          <p>Nothing In Order Summary To Show</p>
          <CustomButton href="/" btnText="Continue Shopping"/>
        </div>
      )}
    </div>
  );
};

export default OrderDetails;
