"use client"
import React, { useEffect, useState } from 'react'
import Header from '../comman/Header'
import axios from 'axios'

export default function page() {

    // https://wscubetech.co/ecommerce-api/products.php
    // https://wscubetech.co/ecommerce-api/categories.php
    // https://wscubetech.co/ecommerce-api/brands.php



    let [catData, setCatData] = useState([])
    let [brand,setBrand] = useState([])
    let [proData, setProData] = useState([])


    // brand fun
      const brandFun = () => {

        // category
        axios.get("https://wscubetech.co/ecommerce-api/brands.php")
            .then((ress) => {
                setBrand(ress.data.data)
                console.log(ress.data.data);


            })
            .catch((err) => {
                console.log(err);

            })
    }

    // category fun

    const catFun = () => {

        // category
        axios.get("https://wscubetech.co/ecommerce-api/categories.php")
            .then((ress) => {
                setCatData(ress.data.data)
                console.log(ress.data.data);


            })
            .catch((err) => {
                console.log(err);

            })
    }

    const apiFun = () => {

        // product api
        axios.get("https://wscubetech.co/ecommerce-api/products.php?limit=50")
            .then((ress) => {
                setProData(ress.data.data)
                // console.log(ress.data);


            })
            .catch((err) => {
                console.log(err);

            })
    }

    useEffect(() => {
        apiFun()
        catFun()
        brandFun()
    }, [])
    // console.log(proData);

    return (
        <>
            {/* header */}
            <Header />

            <section className=''>
                {/* breadcumb */}
                <div className="">
                    home/category/product
                </div>
                <div className=" font-bold text-2xl  caption-bottom">
                    men t shirts
                </div>

                <div className="grid justify-between">
                    <div className="my-4">
                        <span className="">
                            filter
                        </span>
                    </div>
                </div>

                <div className="product-section  h-screen grid grid-cols-[25%_auto] overflow-y-scroll">
                    <div className="left  ">
                        {/* categories */}
                        <div className="">
                            <ul className=' border border-gray-200 scroll-containor h-[150px] overflow-y-scroll '>
                                <li>
                                    <h1 className='px-4.5 capitalize font-medium text-[15px] my-1.5 '>categories</h1>

                                </li>
                                {
                                    catData.length > 0 ?
                                        catData.map((v, i) => {


                                            return (
                                                <li key={i} className='px-4.5 flex items-center gap-2'>
                                                    <input className=' size-4' type="checkbox" name="checkbox" id={v.id} />
                                                    {v.name}
                                                </li>
                                            )
                                        })
                                        :
                                        "loading"
                                }
                            </ul>
                        </div>
                        {/* brand */}
                        <div className="">
                            <ul className=' border border-gray-200 scroll-containor h-[200px] overflow-y-scroll '>
                                <li>
                                    <h1 className='px-4.5 capitalize font-medium text-[15px] my-1.5 '>
                                        brands
                                    </h1>

                                </li>
                                {
                                    brand.length > 0 ?
                                        brand.map((v, i) => {


                                            return (
                                                <li key={i} className='px-4.5 flex items-center gap-2'>
                                                    <input className=' size-4' type="checkbox" name="checkbox" id={v.id} />
                                                    {v.name}
                                                </li>
                                            )
                                        })
                                        :
                                        "loading"
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="right grid grid-cols-4 gap-4 border px-5 border-gray-200">

                        {
                            proData.length > 1 ?
                                proData.map((v, i) => {

                                    return (
                                        <Card value={v} key={i} />

                                    )
                                })
                                :
                                "loading"
                        }

                    </div>
                </div>


            </section>
        </>
    )
}

let Card = ({ value }) => {

    return (
        <>
            <div className=" hover:shadow-2xl rounded-2xl p-2.5 border">
                <img src={value.image} alt="" />
                <h1 className=' mt-1 text-[17px] capitalize font-[600] '>{value.name}</h1>
                <h1 className=' text-gray-800 text-[14px] font-medium '>{value.brand_name}</h1>
                {/* price */}
                <div className="">
                    <div className="flex items-center gap-1">
                        <h1 className=' font-bold text-[13px]  '>Rs. {value.price}</h1>
                        <h1 className=' font-light text-gray-600 line-through text-[11px]  '>Rs. {Number(value.price) + 500}</h1>
                        <h3 className='text-red-500 text-[10px]'> ({value.discount_percentage}
                            <span
                                className="">
                                %off)
                            </span>
                        </h3>
                    </div>

                </div>
            </div>
        </>
    )
}
