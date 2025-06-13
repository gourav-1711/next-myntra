"use client";
import React, { use } from 'react'
import { useSelector } from 'react-redux';

export default function page() {
    const cart = useSelector((state) => state.cart.items);
  return (
    <>
    <h1>wishlist</h1>

    <p>this is wishlist page</p>
    
    <div className="">
        <h2>products</h2>

        <div className="grid grid-cols-1">
            {
                cart.map((item, index) => (
                    <div key={index} className="border p-4 m-2 flex justify-between items-center">
                        <img src={item.image} alt={item.name} width={100} height={100} />
                        <h3>{item.name}</h3>
                        <p>Price: ${item.price}</p>
                        <button className="bg-blue-500 text-white px-4 py-2">Add to Cart</button>
                    </div>
                ))
            }
        </div>
    </div>
    </>
  )
}
