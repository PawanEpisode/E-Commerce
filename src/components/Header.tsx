"use client";
import React, { useState, useEffect } from "react";
import Container from "./Container";
import Logo from "./Logo";
import { IoMdCart } from "react-icons/io";
import { FiSearch, FiLogOut } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { useSelector, useDispatch } from 'react-redux';
import { Products, StateProps } from "../../type";
import FormattedPrice from "./FormattedPrice";
import Link from "next/link";
import { addUser, deleteUser } from "@/redux/shoppingSlice";
// we are using nextjs hooks that is used in server side rendering,
// so we have to MAKE this file Client side

const Header = () => {
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const { productData } = useSelector(
    (state: StateProps) => state.shopping);

  useEffect(() => {
    if(session) {
      dispatch(
        addUser({
          name: session?.user?.name,
          email: session?.user?.email,
          image: session?.user?.image,
        })
      )
    } else {
      dispatch(deleteUser());
    }
  },[session, dispatch]);

  const [totalAmount, setTotalAmount] = useState(0);

  const getTotalAmount = ( productData: Products[]) => {
    let amount =0;
    for( const product of productData) {
      amount += product.price*product.quantity;
    }
    return amount;
  }

  useEffect(()=> {
    setTotalAmount(getTotalAmount(productData));
  }),[productData];

  return (
    <div className="bg-bodyColor h-20 top-0 sticky z-50">
      <Container
        className="h-full flex items-center md:gap-x-5 
        justify-between md:justify-start"
      >
        <Logo />
        {/* {search field} */}
        <div
          className="w-full bg-white hidden md:flex items-center 
            gap-x-1 border-[1px] border-lightText/50 rounded-full 
            px-4 py-1.5 focus-within:border-red-600 
            group"
        >
          <FiSearch
            className="text-gray-500 group-focus-within:text-darkText 
                duration-200"
          />
          <input
            autoComplete="off"
            type="text"
            placeholder="Search for Products..."
            className="placeholder:text-sm flex-1 outline-none"
          />
        </div>
        {/* {Login/register} */}

        {!session && (
          <div onClick={() => signIn()} className="headerDiv cursor-pointer">
            <AiOutlineUser className="text-2xl" />
            <p className="text-sm font-semibold">Login/register</p>
          </div>
        )}

        {/* {Cart Button} */}
        <Link href={'/cart'}>
          <div
            className="bg-black hover:bg-slate-950 rounded-full 
              text-slate-100 hover:text-white flex items-center 
              justify-center gap-x-1 px-3 py-1.5 border-[4px] 
              border-black hover:border-red-600 duration-200 relative"
          >
            <IoMdCart className="text-2xl" />
            <p className="text-sm font-semibold">
              <FormattedPrice amount={totalAmount || 0}/>
            </p>
            <span
              className="bg-white text-red-600 rounded-full text-xs 
                  font-semibold absolute -right-2 -top-1 w-5 h-5 
                  flex items-center justify-center shadow-xl shadow-black"
            >
              {productData ? productData?.length : 0}
            </span>
          </div>
        </Link>
        

        {/* {User Image} */}
        {session && (
          <Image
            src={session?.user?.image as string}
            alt="user image"
            width={50}
            height={50}
            className="rounded-full object-cover"
          />
        )}

        {/* {Logut Button} */}
        {session && (
          <div
            onClick={() => signOut()}
            className="headerDiv px-2 gap-x-1 cursor-pointer"
          >
            <FiLogOut className="text-2xl" />
            <p className="text-sm font-semibold">Logout</p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Header;
