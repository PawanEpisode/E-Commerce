import Container from "@/components/Container";
import Image from "next/image";
import success from "@/images/success.png";
import party from "@/images/party.jpg";
import CustomButton from "@/components/CustomButton";

const SuccessPage = () => {
  return (
    <Container className="flexcss py-20">
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
        <div className="flexcss">
          <h2 className="text-4xl font-bold">
            Thank You! Your Order has been placed
          </h2>
          <Image src={party} alt="emoji" className="w-20 h-20" />
        </div>
        <p>Now You can view Your Orders or continue shopping with us!</p>
        <div className="flex items-center gap-x-5">
          <CustomButton href="/order" btnText="View Order"/>
          <CustomButton href="/" btnText="Continue Shopping"/>
        </div>
      </div>
    </Container>
  );
};

export default SuccessPage;
