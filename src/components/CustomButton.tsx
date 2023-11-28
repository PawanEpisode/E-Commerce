import Link from 'next/link';
import React from 'react';
interface ButtonProps{
    href: string;
    btnText: string;
    className?: string;
}

const CustomButton = ({href, btnText, className}: ButtonProps) => {
    return (
        <Link 
        href={href}
        >
            <button
            className={
            `${className} bg-black text-slate-100 w-44 h-12 
            rounded-full text-base font-semibold flex py-2 px-6
            items-center justify-center hover:bg-red-600 
            hover:text-white duration-200`
            }
            >
                {btnText}
            </button>
        </Link>
    )
}

export default CustomButton