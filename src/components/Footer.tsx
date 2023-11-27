import {
    BsYoutube,
    BsGithub,
    BsLinkedin,
} from "react-icons/bs";
import payment from "@/images/payment.png";
import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full bg-darkText text-slate-100">
        <Container className="grid grid-cols-1 md:grid-cols-2 
        lg:grid-cols-4 gap-20">
            <div className="flex flex-col">
                <p className="text-2xl font-bold text-white">Welcome To <Logo /></p> 
                <p className="text-2xl font-semibold text-red-500">Your Premier E-Commerce Hub!</p>
                <p className="text-red-100">At Flippy, we redefine online shopping with a curated 
                selection of premium products and a user-friendly platform.
                Happy Shopping!
                </p>
            </div>
            <div className="w-fit">
                <p className="text-lg">Latest Posts</p>
                <ul className="text-sm font-light mt-2 flex flex-col gap-y-2">
                    <li className="flex flex-col">
                        <span className="text-slate 
                        hover:text-red-600 
                        cursor-pointer duration-200"
                        >
                            Where Music is Headed Next
                        </span>
                        <span className="text-red-600">December 28, 2022</span>
                    </li>
                    <li className="flex flex-col">
                        <span className="text-slate 
                        hover:text-red-600 
                        cursor-pointer duration-200"
                        >
                            Where Film is Headed Next
                        </span>
                        <span className="text-red-600">May 20, 2022</span>
                    </li>
                    <li className="flex flex-col">
                        <span className="text-slate 
                        hover:text-red-600 
                        cursor-pointer duration-200"
                        >
                            Where Gaming is Headed Next
                        </span>
                        <span className="text-red-600">January 12, 2022</span>
                    </li>
                </ul>
            </div>
            <div className="w-fit">
                <p className="text-lg font-bold text-red-500">Links</p>
                <ul>
                    <Link href={'/'}>
                        <li className="hover:text-red-500 
                        cursor-pointer duration-200">
                            Home
                        </li>
                    </Link>
                    <Link href={'/cart'}>
                        <li className="hover:text-red-500 
                        cursor-pointer duration-200">
                            Cart
                        </li>
                    </Link>
                    <Link href={'/about'}>
                        <li className="hover:text-red-500 
                        cursor-pointer duration-200">
                            About
                        </li>
                    </Link>
                    <Link href={'/newsletter'}>
                        <li className="hover:text-red-500 
                        cursor-pointer duration-200">
                            Newsletter
                        </li>
                    </Link>
                    <Link href={'/contacts'}>
                        <li className="hover:text-red-500 
                        cursor-pointer duration-200">
                            Contacts
                        </li>
                    </Link>
                </ul>
            </div>
            <div>
                <p className="text-lg mb-2">Pay us with your trusted services</p>
                <Image 
                src={payment}
                alt="payment banner image"
                className="w-full h-10 object-cover"
                />

                <p className="text-lg text-red-600 mt-10">Social Media Links</p>
                <div className="flex mt-4 items-center gap-x-4">
                    <a 
                    href="https://github.com/PawanEpisode/E-Commerce"
                    target="_blank"
                    >
                        <span className="socialLink">
                            <BsYoutube />
                        </span>
                    </a>
                    <a 
                    href="https://github.com/PawanEpisode"
                    target="_blank"
                    >
                        <span className="socialLink">
                            <BsGithub />
                        </span>
                    </a>
                    <a 
                    href="https://www.linkedin.com/in/pawan-kumar-9a79071ab/"
                    target="_blank"
                    >
                        <span className="socialLink">
                            <BsLinkedin />
                        </span>
                    </a>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Footer