"use client"
import Link from 'next/link';
import React from 'react'
import { CiUser, CiHeart } from "react-icons/ci";
import { IoBagOutline, IoSearchOutline } from "react-icons/io5";

export default function Header() {
    return (
        <header className='max-w-[100%] mx-auto p-[5px_10px] sticky top-0 shadow-[0px_0px_5px_1px] shadow-foreground bg-background  '>
            <nav className=' grid grid-cols-[5%_auto_23%_20%] gap-2.5'>
                {/* logo */}
                <aside className=''>
                    <figure className='flex justify-end w-[100%] '>
                        <Link href={"/"}>
                            <img className=' size-[60px] ' src="images/images.png" alt="" />
                        </Link>
                    </figure>
                </aside>
                {/* menu */}
                <aside className=''>
                    <ul className=" uppercase font-bold text-foreground text-[14px] flex justify-evenly  items-center h-full ">
                        <li className="cursor-pointer py-6">man</li>
                        <li className="cursor-pointer py-6">woman</li>
                        <li className="cursor-pointer py-6">kids</li>
                        <li className="cursor-pointer py-6">home</li>
                        <li className="cursor-pointer py-6">beauty</li>
                        <li className="cursor-pointer py-6">genZ</li>
                        <li className="cursor-pointer py-6 relative">
                            studio
                            <span className=' text-red-400 absolute top-[20%] right-[-50%]'
                            >new</span>
                        </li>


                    </ul>
                </aside>
                {/* search */}
                <aside className='flex items-center'>
                    <div autoFocus className="flex items-center  bg-gray-100 rounded-[6px] px-2 gap-2.5 align-middle  focus:bg-white focus:shadow ">
                        <IoSearchOutline />
                        <span>
                            <input placeholder='search for products' type="text" className=' outline-0 w-[250px] py-2 ' />
                        </span>
                    </div>
                </aside>
                {/* icons */}
                <aside className='capitalize font-medium grid grid-cols-3'>
                    <div className="flex flex-col justify-center items-center">
                        <CiUser className='text-2xl' />
                        <span className=' cursor-pointer [line-height:14px] text-[14px]   '>
                            profile
                        </span>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <CiHeart className='text-2xl' />
                        <span className=' cursor-pointer [line-height:14px] text-[14px]   '>
                            wishlist
                        </span>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <span className=' cursor-pointer [line-height:14px] text-[14px]   '>
                            <IoBagOutline className='text-2xl' />
                            bag
                        </span>
                    </div>
                </aside>

            </nav>
        </header>
    )
}
