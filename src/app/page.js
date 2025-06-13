"use client";
import Image from "next/image";
import Header from "./comman/Header";
import Btn from "./comman/Btn";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* header */}
      <Header />

      <section id="section-1" className=" mt-5 max-w-[85vw] mx-auto  ">
        {/* banner */}
        <div className="top flex w-full">
          <img
            className="w-[50%]"
            src="/images/d3d9e13b-7843-49b4-acbf-12edee9b259b1746874498577-Desktop_Home_Prebuzz-----11_01 (1).gif"
            alt=""
          />
          <img
            className="w-[50%]"
            src="/images/fc9cd4e9-e783-45d7-b67f-d2582acca8451746874498552-Desktop_Home_Prebuzz-----11_02 (1).gif"
            alt=""
          />
        </div>
        {/* payment */}
        <div className="payment w-full">
          <figure>
            <img className="w-full" src="/images/payment.gif" alt="" />
          </figure>
        </div>
        {/* coupen */}
        <div className="coupen w-full">
          <figure>
            <img
              className="w-full"
              src="/images/Ikl0QMfv_b930545eedfc4a63a646325026823d88.webp"
              alt=""
            />
          </figure>
        </div>
        {/* offer */}
        <div className="offer w-full flex">
          <figure className="w-full">
            <img
              className="w-[100%]"
              src="images/cbfa28ff-2b54-4a2f-813e-c43c32baa5a21746791959636-Flat-200-Off-----1--1-.jpg"
              alt=""
            />
          </figure>
          <figure className="w-full">
            <img
              className="w-[100%]"
              src="images/c4924746-cecd-47dc-9584-2fe2a93a394e1746791959611-Flat-100-Off.jpg"
              alt=""
            />
          </figure>
        </div>
        {/* flash sale drop */}
        <div className="w-full sale">
          <figure className="w-full">
            <img
              src="/images/PDeWvYrx_8ff5983f132948049a4387460669621a.jpg"
              alt=""
              className="w-full"
            />
          </figure>
        </div>
      </section>
    </>
  );
}
