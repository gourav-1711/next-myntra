"use client"
import React, { useEffect, useState } from 'react'
import Header from '../comman/Header'
import axios from 'axios'

export default function page() {

    // https://wscubetech.co/ecommerce-api/products.php
    // https://wscubetech.co/ecommerce-api/categories.php
    // https://wscubetech.co/ecommerce-api/brands.php

    // drop text
    let [text,setText] = useState('recommended')

    // category data
    let [catData, setCatData] = useState([])

    // brand data
    let [brand, setBrand] = useState([])

    // product data
    let [proData, setProData] = useState([])

    // price
    let [price, setPrice] = useState('')

    // discount
    let [discount, setdiscount] = useState('')

    // sorting

    let [sorting, setSorting] = useState('')

    console.log(price);

    // category array for filter

    let [catInputValue, setCatInputValue] = useState([]);


    // brand array
    let [brandValue, setBrandValue] = useState([])

    //  category input filter fun
    const CatInputFun = (e) => {
        // console.log(e.target.value);

        if (e.target.checked) {
            setCatInputValue(prev => [...prev, e.target.value])
        }
        else {
            let newInputValue = catInputValue.filter((v) => {
                return v != e.target.value
            })
            setCatInputValue(newInputValue)
        }

    }

    // brand input filter fun

    const brandInputFun = (e) => {

        if (e.target.checked) {
            setBrandValue(prev => [...prev, e.target.value])
        }
        else {
            let newBrandValue = brandValue.filter((v) => {
                return v != e.target.value
            })
            setBrandValue(newBrandValue)
        }
    }

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
        axios.get(`https://wscubetech.co/ecommerce-api/products.php?limit=200&categories=${catInputValue}&brands=${brandValue}&${price}${discount}&sorting=${sorting}`)
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
    }, [catInputValue, brandValue, price, discount, sorting])
    // console.log(proData);

    // console.log(sorting);

    const clear = () => {

        setBrandValue([])
        setCatInputValue([])
        setSorting('')
        setdiscount('')
        setPrice('')
    }


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

                <div className="grid grid-cols-[25%_auto] justify-between">
                    <div className="my-4 flex justify-between">
                        <div className=" capitalize text-2xl font-medium ps-2.5">
                            filter
                        </div>
                                            <div className="">
                        <button onClick={clear}
                        className=' capitalize text-red-400 font-medium text-[14px] cursor-pointer'
                        >
                            clear all
                        </button>
                    </div>
                    </div>

                    <div>
                        <div className=" px-[40px] box grid justify-end ">
                            <div className="group relative">
                                <button className=' capitalize bg-white shadow p-[5px_10px] font-medium  '> {text} </button>
                                <ul className='w-[300px] bg-white  capitalize space-y-1 font-medium text-[17px] right-0 p-2.5 absolute top-[100%] invisible opacity-0 duration-300 group-hover:visible group-hover:opacity-100 shadow-2xl '>
                                    <li className=' cursor-pointer hover:bg-gray-100 ' onClick={() => setSorting(1)}>name : a to z</li>
                                    <li className=' cursor-pointer hover:bg-gray-100 ' onClick={() => setSorting(2)}>name : z to a</li>
                                    <li className=' cursor-pointer hover:bg-gray-100 ' onClick={() => setSorting(3)}>price : low to high</li>
                                    <li className=' cursor-pointer hover:bg-gray-100 ' onClick={() => setSorting(4)}>price : high to low</li>
                                    <li className=' cursor-pointer hover:bg-gray-100 ' onClick={() => setSorting(5)}>discounted price : low to high</li>
                                    <li className=' cursor-pointer hover:bg-gray-100 ' onClick={() => setSorting(6)}>discounted price : high to low</li>
                                    <li className=' cursor-pointer hover:bg-gray-100 ' onClick={() => setSorting(7)}>rating : high to low</li>
                                    <li className=' cursor-pointer hover:bg-gray-100 ' onClick={() => setSorting(8)}>rating : low to high</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product-section  grid grid-cols-[25%_auto] ">
                    <div className="left h-screen overflow-y-scroll scroll">
                        {/* categories */}
                        <div className="pb-2.5">
                            <ul className=' border border-gray-200 scroll-containor h-[150px] overflow-y-scroll '>
                                <li>
                                    <h1 className='px-4.5 capitalize font-medium text-[15px] my-1.5 '>categories</h1>

                                </li>
                                {
                                    catData.length > 0 ?
                                        catData.map((v, i) => {


                                            return (
                                                <li key={i} className='py-0.5 px-4.5 flex items-center gap-2'>
                                                    <input
                                                        checked={catInputValue.includes(v.slug)}
                                                        value={v.slug} onChange={(e) => CatInputFun(e)}
                                                        className=' size-4' type="checkbox" name="checkbox" id={v.id} />
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
                        <div className="pb-2.5">
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
                                                <li key={i} className='py-0.5 px-4.5 flex items-center gap-2'>
                                                    <input
                                                    checked={brandValue.includes(v.slug)}
                                                        value={v.slug} onChange={(e) => brandInputFun(e)}
                                                        className=' size-4' type="checkbox" name="checkbox" id={v.id} />
                                                    {v.name}
                                                </li>
                                            )
                                        })
                                        :
                                        "loading"
                                }
                            </ul>
                        </div>
                        {/* price */}
                        <div className="price px-4.5">
                            <h1 className='font-bold text-[17px] capitalize '>
                                price
                                <div className="input-section h-[100px]">
                                    <label className='text-[17px] font-medium flex gap-2 ' htmlFor="">
                                        <input type="radio" name='price'
                                            onChange={() => setPrice('price_from=0&price_to=300')}
                                        />
                                        price from 0 to 300
                                    </label>
                                    <label className='text-[17px] font-medium flex gap-2 ' htmlFor="">
                                        <input type="radio" name='price'
                                            onChange={() => setPrice('price_from=300&price_to=1000')}
                                        />
                                        price from 300 to 1000
                                    </label>

                                    <label className='text-[17px] font-medium flex gap-2 ' htmlFor="">
                                        <input type="radio" name='price'
                                            onChange={() => setPrice('price_from=1000&price_to=4000')}
                                        />
                                        price from 1000 to 4000
                                    </label>

                                    <label className='text-[17px] font-medium flex gap-2 ' htmlFor="">
                                        <input type="radio" name='price'
                                            onChange={() => setPrice('price_from=4000&price_to=1000000')}
                                        />
                                        price from 4000 to above
                                    </label>
                                </div>
                            </h1>
                        </div>
                        {/* rating */}
                        <div className="rating py-3 px-4.5">
                            <h1 className='font-bold text-[17px] capitalize '>
                                price
                                <div className="input-section h-[100px]">
                                    <label className='text-[17px] font-medium flex gap-2 ' htmlFor="">
                                        <input type="radio" name='discount'
                                            onChange={() => setdiscount('discount_from=0%&discount_to=5%')}
                                        />
                                        discount from 0 to 5%
                                    </label>
                                    <label className='text-[17px] font-medium flex gap-2 ' htmlFor="">
                                        <input type="radio" name='discount'
                                            onChange={() => setdiscount('discount_from=5%&discount_to=10%')}
                                        />
                                        discount from 5% to 10%
                                    </label>

                                    <label className='text-[17px] font-medium flex gap-2 ' htmlFor="">
                                        <input type="radio" name='discount'
                                            onChange={() => setdiscount('discount_from=10%&discount_to=20%')}
                                        />
                                        discount from 10% to 20%
                                    </label>

                                    <label className='text-[17px] font-medium flex gap-2 ' htmlFor="">
                                        <input type="radio" name='discount'
                                            onChange={() => setdiscount('discount_from=20%&discount_to=100%')}
                                        />
                                        discount from 20% to above
                                    </label>
                                </div>
                            </h1>
                        </div>
                        {/* discount */}
                        <div className="discount px-4.5"></div>
                    </div>
                    <div className="right  h-screen overflow-y-scroll scroll grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 border px-5 border-gray-200">

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
            <div className=" hover:shadow-2xl rounded-2xl p-2.5 ">
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
