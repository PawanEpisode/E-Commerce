"use client";

import Image from "next/image";
import { ProductProps } from "../../type";
import { calculateOfferPercentage } from "@/helpers";
import FormattedPrice from "./FormattedPrice";
import { IoIosStar } from "react-icons/io";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/shoppingSlice";
import toast, { Toaster } from "react-hot-toast";

const ProductsData = ({ product }: ProductProps) => {

  const dispatch = useDispatch();
  const starArray = Array.from({length: product?.rating}, (_,index) => (
    <span key={index} className="text-yellow-400">
      <IoIosStar />
    </span>
  ));

  return (
    <div className="w-full rounded-lg overflow-hidden">
      <div>
        <Link href={{pathname: '/product', query: {_id: product?._id}}}>
          <div className="w-full h-96 group overflow-hidden relative">
            <Image
              src={product?.image}
              alt="product imaage"
              width={500}
              height={500}
              className="w-full h-full object-cover 
            group-hover:scale-110 duration-200 rounded-t-lg"
            />
            {product?.isNew && (
              <span className="absolute top-2 right-2 font-medium 
              text-xs py-1 px-3 bg-white group-hover:text-white duration-200 rounded-full group-hover:bg-red-600">
                New Arrival
              </span>
            )}
          </div>
        </Link>
        <div className="border-[1px] border-slate-300 
        border-t-0 px-2 py-4 flex flex-col 
        gap-y-2 bg-white rounded-b-lg">
          <p>{product?.title}</p>
          <div className="flex items-center justify-between">
            <div className="border-[1px] border-red-600 
            py-1 px-4 rounded-full text-xs">
              <p>{calculateOfferPercentage(product?.price, product?.oldPrice)}% off</p>
            </div>
            <div className="flex items-center gap-x-2">
              <p className="text-slate-500 line-through text-sm">
                <FormattedPrice amount={product?.oldPrice}/>
              </p>
              <p className="font-semibold">
                <FormattedPrice amount={product?.price}/>
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            {/* add to cart button */}
            <button 
            onClick={() => dispatch(addToCart(product)) &&
            toast.success(
              `${product?.title.substring(0,15)} added To Cart successfully`
            )
            }
            className="bg-red-600 px-4 py-2 text-sm 
            tracking-wide rounded-full text-slate-100 
            hover:bg-red-800 hover:text-white duration-200"
            >
              add to cart
            </button>
            {/* star icons */}
            <div className="flex items-center gap-x-1">
              {starArray}
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default ProductsData;
