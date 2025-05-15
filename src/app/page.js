"use client"
import Image from "next/image";
import Header from "./comman/Header";
import Btn from "./comman/Btn";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* header */}
      <Header />


      <section className=" max-w-[1100px] mx-auto">
        <Link href={"/products"}>
          <div className="top flex w-full">
            <img className='w-[50%]' src="/images/d3d9e13b-7843-49b4-acbf-12edee9b259b1746874498577-Desktop_Home_Prebuzz-----11_01 (1).gif" alt="" />
            <img className='w-[50%]' src="/images/fc9cd4e9-e783-45d7-b67f-d2582acca8451746874498552-Desktop_Home_Prebuzz-----11_02 (1).gif" alt="" />
          </div>
        </Link>
      </section>

      hello
    </>
  );
}
