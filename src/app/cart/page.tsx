"use client";

import Container from "@/components/Container";
import { useSelector, useDispatch } from "react-redux";
import { StateProps } from "../../../type";
import CartItem from "@/components/CartItem";
import { resetCart } from "@/redux/shoppingSlice";
import PaymentForm from "@/components/PaymentForm";
import Image from "next/image";
import emptycart from "@/images/emptycart.jpg";
import Link from "next/link";

const CartPage = () => {
  const { productData } = useSelector((state: StateProps) => state?.shopping);
  const dispatch = useDispatch();

  return (
    <Container>
      {productData?.length ? (
        <Container>
          <h2 className="text-2xl font-semibold mb-2">Cart</h2>
          <div className="flex flex-col gap-5">
            <CartItem />
            <div className="flex items-center justify-end">
              <button
                onClick={() => dispatch(resetCart())}
                className="bg-red-500 text-base font-semibold 
          text-slate-100 py-2 px-6 hover:bg-red-700 
          hover:text-white duration-200"
              >
                Reset Cart
              </button>
            </div>
            {/* Payment Form */}
            <PaymentForm />
          </div>
        </Container>
      ) : (
        <div className="w-full flex flex-col items-center justify-center gap-y-2">
          <Image src={emptycart} alt="empty-cart-image" className="object-cover" width={416} height={400} />
          <span className="text-xl font-bold animate-bounce text-red-600">
            Your cart is empty!
          </span>
          <span className="text-lg font-semibold">
            Explore our wide selection and find something you like
          </span>
          <Link href={'/'}>
              <button className="bg-red-800 text-white 
              py-2 px-6 rounded-md hover:bg-red-600 
              duration-200 font-medium"
              >
                Return to Shop
              </button>
          </Link>
        </div>
      )}
    </Container>
  );
};

export default CartPage;
