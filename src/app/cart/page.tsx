"use client";

import Container from "@/components/Container";
import { useSelector, useDispatch } from "react-redux";
import { StateProps } from "../../../type";
import CartItem from "@/components/CartItem";
import { resetCart } from "@/redux/shoppingSlice";
import PaymentForm from "@/components/PaymentForm";
import CartEmpty from "@/components/CartEmpty";

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
        <CartEmpty />
      )}
    </Container>
  );
};

export default CartPage;
