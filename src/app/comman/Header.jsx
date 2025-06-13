"use client";
import Link from "next/link";
import React from "react";
import { CiUser, CiHeart } from "react-icons/ci";
import { IoBagOutline, IoSearchOutline } from "react-icons/io5";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { FaBars } from "react-icons/fa";
import { useSelector } from "react-redux";



export default function Header() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <aside className=" ">
        <ul className=" uppercase font-bold text-foreground text-[16px] flex flex-col space-y-4 px-3.5 py-2 ">
          <Link href={"/products"}>
            <li className="cursor-pointer ">man</li>
          </Link>
          <Divider />
          <li className="cursor-pointer ">woman</li>
          <Divider />
          <li className="cursor-pointer ">kids</li>
          <Divider />
          <li className="cursor-pointer ">home</li>
          <Divider />
          <li className="cursor-pointer ">beauty</li>
          <Divider />
          <li className="cursor-pointer ">genZ</li>
          <Divider />
          <li className="cursor-pointer mt-2 relative">
            studio
            <span className=" text-red-400 absolute top-[-40%] left-[20%]">
              new
            </span>
          </li>
        </ul>
      </aside>
    </Box>
  );

  const cart = useSelector((state) => state.cart.items);

  return (
    <header className="max-w-[100%] z-50 mx-auto p-[5px_10px] sticky top-0 shadow-[0px_0px_10px_1px_gray]  bg-background  ">
      <nav className="  grid grid-cols-[5%_auto] lg:grid-cols-[5%_auto_23%_20%] gap-2.5">
        {/* logo */}
        <aside className="">
          <figure className=" w-[100%] ">
            <Link href={"/"}>
              <img className=" size-[100%] " src="images/images.png" alt="" />
            </Link>
          </figure>
        </aside>
        {/* menu */}
        <aside className=" hidden lg:block">
          <ul className=" uppercase font-bold text-foreground text-[14px] flex justify-evenly  items-center h-full ">
            <Link href={"/products"}>
              <li className="cursor-pointer py-6">man</li>
            </Link>
            <li className="cursor-pointer py-6">woman</li>
            <li className="cursor-pointer py-6">kids</li>
            <li className="cursor-pointer py-6">home</li>
            <li className="cursor-pointer py-6">beauty</li>
            <li className="cursor-pointer py-6">genZ</li>
            <li className="cursor-pointer py-6 relative">
              studio
              <span className=" text-red-400 absolute top-[20%] right-[-50%]">
                new
              </span>
            </li>
          </ul>
        </aside>
        {/* search */}
        <div className="hidden lg:block">
          <aside className=" flex items-center">
            <div
              autoFocus
              className="flex items-center w-full  bg-gray-100 rounded-[6px] px-2 gap-2.5  focus:bg-white focus:shadow "
            >
              <IoSearchOutline />
              <div>
                <input
                  placeholder="search for products"
                  type="text"
                  className=" outline-0 w-full py-2 "
                />
              </div>
            </div>
          </aside>
        </div>

        {/* icons */}
        <div className="hidden lg:block">
          <aside className=" capitalize font-medium grid grid-cols-3 items-center justify-center-safe">
            <div className="flex flex-col justify-center items-center">
              <CiUser className="text-2xl" />
              <span className=" cursor-pointer text-[14px]   ">profile</span>
            </div>
           <Link href={"/wishlist"}>
            <div className="flex flex-col justify-center items-center">
              <CiHeart className="text-2xl" />
              <span className=" cursor-pointer text-[14px]   ">wishlist {cart.length} </span>
              </div>
           </Link>
            <div className="flex flex-col justify-center items-center">
              <span className=" cursor-pointer  text-[14px]   ">
                <IoBagOutline className="text-2xl" />
                bag
              </span>
            </div>
          </aside>
        </div>

        {/* bar icon and off canvas */}
        <div className="block lg:hidden">
          <div className="border flex justify-end">
            {["right"].map((anchor) => (
              <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}>
                  {<FaBars />}
                </Button>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
