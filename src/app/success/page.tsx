import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import success from "@/images/success.png";
import party from "@/images/party.jpg";

const SuccessPage = () => {
  return (
    <Container className="flex items-center justify-center py-20">
      <div
        className="min-h-[400px] flex flex-col 
        items-center jus gap-y-5 rounded-[16px] shadow-2xl p-5 bg-white"
      >
        <Image
          src={success}
          alt="sucsess-image"
          width={400}
          height={400}
          className="object-cover"
        />
        <div className="flex items-center justify-center">
          <h2 className="text-4xl font-bold">
            Thank You! Your Order has been placed
          </h2>
          <Image src={party} alt="emoji" className="w-20 h-20" />
        </div>
        <p>Now You can view Your Orders or continue shopping with us!</p>
        <div className="flex items-center gap-x-5">
          <Link href={"/order"}>
            <button
              className="bg-black text-slate-100 
                    w-44 h-12 rounded-full text-base 
                    font-semibold hover:bg-red-600 duration-200"
            >
              View Order
            </button>
          </Link>
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
      </div>
    </Container>
  );
};

export default SuccessPage;
