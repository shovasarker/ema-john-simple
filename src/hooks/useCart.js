import { useEffect, useState } from 'react'
import { getShoppingdCart } from '../utilities/fakedb'

const useCart = (products) => {
  const [cart, setCart] = useState([])

  useEffect(() => {
    const storedCart = getShoppingdCart()
    if (Object.keys(storedCart).length < 1) return
    // const savedCart = Object.entries(storedCart).map(([id, quantity]) => {
    //   return {
    //     ...products?.find((product) => product.id === id),
    //     quantity: quantity,
    //   }
    // })
    setCart(
      Object.entries(storedCart).map(([id, quantity]) => {
        return {
          ...products?.find((product) => product.id === id),
          quantity: quantity,
        }
      })
    )
    // const savedCart = []

    // for (const id in storedCart) {
    //   const product = products?.find((item) => item.id === id)
    //   if (!product) continue
    //   product.quantity = storedCart[id]
    //   savedCart.push(product)
    // }
    // setCart(savedCart)
  }, [products])

  return [cart, setCart]
}

export default useCart