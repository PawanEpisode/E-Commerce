import payment from "@/images/payment.png";
import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";
import Image from "next/image";
import { 
  LatestPosts, 
  LinksFooter, 
  SocialMediaLinks 
} from "@/constants/data";

const Footer = () => {
  
  return (
    <div className="w-full bg-darkText text-slate-100">
      <Container
        className="grid grid-cols-1 md:grid-cols-2 
        lg:grid-cols-4 gap-20"
      >
        <div className="flex flex-col">
          <p className="text-2xl font-bold text-white">
            Welcome To <Logo />
          </p>
          <p className="text-2xl font-semibold text-red-500">
            Your Premier E-Commerce Hub!
          </p>
          <p className="text-red-100">
            At Flippy, we redefine online shopping with a curated selection of
            premium products and a user-friendly platform. Happy Shopping!
          </p>
        </div>
        <div className="w-fit">
          <p className="text-lg">Latest Posts</p>
          <ul className="text-sm font-light mt-2 flex flex-col gap-y-2">
            {LatestPosts.map((post) => (
              <li className="flex flex-col">
                <span
                  className="text-slate 
                        hover:text-red-600 
                        cursor-pointer duration-200"
                >
                  {post.title}
                </span>
                <span className="text-red-600">{post.subtitle}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-fit">
            <p className="text-lg font-bold text-red-500">Links</p>
            <ul>
                {LinksFooter.map((link) => (
                    <Link href={link.linkurl}>
                    <li className="hover:text-red-500 
                    cursor-pointer duration-200"
                    >
                        {link.linktext}
                    </li>
                    </Link>
                ))}
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
                {
                    SocialMediaLinks.map(link => {
                        const {linkurl, LinkIcon} = link;
                        return (
                            <a
                            href={linkurl}
                            target="_blank"
                            >
                                <span className="socialLink">
                                    <LinkIcon />
                                </span>
                            </a>
                        )
                    })
                }
            </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
