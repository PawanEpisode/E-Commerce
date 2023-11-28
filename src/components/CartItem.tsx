import { useSelector, useDispatch } from "react-redux";
import { Products, StateProps } from "../../type";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import {
  decreaseQuantity,
  deleteProduct,
  increaseQuantity,
} from "@/redux/shoppingSlice";
import FormattedPrice from "./FormattedPrice";

const CartItem = () => {
  const { productData } = useSelector((state: StateProps) => state?.shopping);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-y-2">
      <div
        className="hidden lg:inline-flex items-center 
        justify-between font-semibold bg-white p-2"
      >
        <p className="w-1/3">Product</p>
        <p className="w-1/3 flexcss">Quantity</p>
        <p className="w-1/3 flex items-center justify-end">Subtotal</p>
      </div>

      <div className="flex flex-col gap-y-2">
        {productData?.map((product: Products) => (
          <div
            key={product._id}
            className="w-full bg-white p-4 flex 
                    flex-col md:flex-row items-center 
                    justify-between gap-4"
          >
            <div className="flex items-center gap-x-3 w-full md:w-1/3">
              <span
                onClick={() => dispatch(deleteProduct(product?._id))}
                className="text-lg hover:text-red-600 
                cursor-pointer duration-200 hover:bg-red-300 hover:rounded-full"
              >
                <AiOutlineClose />
              </span>
              <Image
                src={product?.image}
                alt="product image"
                width={500}
                height={500}
                className="w-20 h-20 object-cover"
                loading="lazy"
              />
            </div>

            {/* Quantity */}
            <div
              className="flex items-center 
                        justify-start gap-x-3 border-[1px] 
                        border-slate-300 py-2 px-4 
                        w-full md:w-auto"
            >
              <p>Quantity</p>
              <div
                className="flex items-center 
                            text-lg w-20 justify-between"
              >
                <span
                  onClick={() => dispatch(decreaseQuantity(product))}
                  className="cursor-pointer"
                >
                  <FiChevronLeft />
                </span>
                <span>{product?.quantity}</span>
                <span
                  onClick={() => dispatch(increaseQuantity(product))}
                  className="cursor-pointer"
                >
                  <FiChevronRight />
                </span>
              </div>
            </div>
            {/* Price */}
            <div
              className="w-full md:w-1/3 flex 
                        items-end justify-start md:justify-end"
            >
              <p className="text-lg font-semibold">
                <FormattedPrice amount={product?.price * product?.quantity} />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartItem;
