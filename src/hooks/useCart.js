import { useEffect, useState } from 'react'
import { getShoppingdCart } from '../utilities/fakedb'

const useCart = () => {
  const [cart, setCart] = useState([])

  useEffect(() => {
    const storedCart = getShoppingdCart()
    if (Object.keys(storedCart).length < 1) return

    const keys = Object.keys(storedCart)
    fetch('http://localhost:5000/productByKeys', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(keys),
    })
      .then((res) => res.json())
      .then((products) => {
        setCart(
          Object.entries(storedCart).map(([id, quantity]) => {
            return {
              ...products?.find((product) => product._id === id),
              quantity: quantity,
            }
          })
        )
      })

    // const savedCart = Object.entries(storedCart).map(([id, quantity]) => {
    //   return {
    //     ...products?.find((product) => product.id === id),
    //     quantity: quantity,
    //   }
    // })

    // const savedCart = []

    // for (const id in storedCart) {
    //   const product = products?.find((item) => item.id === id)
    //   if (!product) continue
    //   product.quantity = storedCart[id]
    //   savedCart.push(product)
    // }
    // setCart(savedCart)
  }, [])

  return [cart, setCart]
}

export default useCart
