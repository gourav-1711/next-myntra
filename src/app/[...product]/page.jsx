"use client"
import axios from 'axios';
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

export default function page() {

    let paraMeters = useParams().product

    console.log(paraMeters);
    
// 'https://dummyjson.com/products/1'

    const displayData=()=>{

        axios.get(`https://wscubetech.co/ecommerce-api/products.php?id=${paraMeters}&limit=1`)
        .then((ress)=>{
            console.log(ress.data.data);
            
        })
    }
    useEffect(()=>{
        displayData()
    },[])

    return (
        <div> {paraMeters[0]}/{paraMeters[1]} </div>
    )
}
