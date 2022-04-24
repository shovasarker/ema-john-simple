import React from 'react'
import { Link } from 'react-router-dom'
import useCart from '../../hooks/useCart'
import useProducts from '../../hooks/useProducts'
import { addToDb } from '../../utilities/fakedb'
import Cart from '../Cart'
import Product from '../Product'
import './shop.css'

const Shop = () => {
  const [products] = useProducts()
  const [cart, setCart] = useCart(products)

  const handleAddToCart = (product) => {
    const findProduct = cart?.find(({ _id }) => product._id === _id)
    let newCart = []
    if (findProduct) {
      newCart = cart?.map((item) =>
        product._id === item._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )

      //Alternate Method
      // const restProducts = cart?.filter((item) => item.id !== product.id)
      // newCart = [
      //   ...restProducts,
      //   { ...findProduct, quantity: findProduct.quantity + 1 },
      // ]
    } else {
      newCart = [...cart, { ...product, quantity: 1 }]
    }
    setCart(newCart)
    addToDb(product._id)
  }

  return (
    <div className='shop-container'>
      <div className='products-container'>
        {products?.map((product) => {
          return (
            <Product
              key={product?._id}
              product={product}
              handleClick={handleAddToCart}
            />
          )
        })}
      </div>
      <div className='cart-summary-container'>
        <Cart cart={cart}>
          <Link to={'/orders'} className='custom-btn'>
            Review Order
          </Link>
        </Cart>
      </div>
    </div>
  )
}

export default Shop
