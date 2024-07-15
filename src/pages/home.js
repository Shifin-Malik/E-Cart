import React from 'react'
import { products } from '../products'
import ProductCart from '../components/productCart'
const Home = () => {
  return (
    <div>
        <h1 className='text-3xl my-5'>List Products</h1>
        <div className='grid lg:grid-cols-4 grid-cols-2 gap-5  '>
            {products.map((product, key) => 
                <ProductCart key={key} data={product} className=""/>
            )}
        </div>
    </div>
  )
}

export default Home