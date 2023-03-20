import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './Product.css'

export const Product = () => {
 const{ category} =useParams()
const [productcategory, setProductcategory] = useState([])
// const [catdetailes, setCatdetailes] = useState([])
const [categories, setCategories] = useState("electronics")
const [productlist, setProductlist] = useState([])

    useEffect(() => { 
        catgories()
        details()

    }, [categories])

    const catgories = async()=>{
        const res= await fetch("https://fakestoreapi.com/products/categories")
        // console.log(res)
        const data= await res.json()
        // console.log(data)
        setProductcategory(data)

    }

    const details = async()=>{
        const res= await fetch(`https://fakestoreapi.com/products/category/${categories}`)
        // console.log(res)
        const data= await res.json()
        console.log(data)
        setProductlist(data)

    }
    
  return (
    <div className='product'>
        <div className="product-sidebar">
            {
                productcategory.map((ele)=>{
                    return <div className='button-category'>
                        <Link to={ele} onClick={()=>{
                            setCategories(ele)
                            console.log(categories)
                        }}>{ele &&  ele}</Link>
                    </div>
                })
            }
            

        </div>

        <div className='product_maincontainer'>
            <ul>
            {productlist.map((ele)=>{
                console.log(ele)

                return <Link to={`/productdetails/${ele.id}`}><li>{ele && ele.title}</li></Link>
                
            })}
            </ul>

        
        </div>
    </div>
  )
        }