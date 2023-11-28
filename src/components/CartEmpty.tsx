import Image from "next/image";
import emptycart from "@/images/emptycart.jpg";
import CustomButton from "./CustomButton";

const CartEmpty = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-y-2">
      <Image
        src={emptycart}
        alt="empty-cart-image"
        className="object-cover"
        width={600}
        height={600}
      />
      <span className="text-xl font-bold animate-bounce text-red-600">
        Your cart is empty!
      </span>
      <span className="text-lg font-semibold">
        Explore our wide selection and find something you like
      </span>
      <CustomButton href="/" btnText="Return to Shop"/>
    </div>
  );
};

export default CartEmpty;
