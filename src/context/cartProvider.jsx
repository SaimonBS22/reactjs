import { cartContext } from "./cartContext"
import { useState } from "react"

function CartProvider({ children}){
    const [cart, setCart] = useState([])
    const addToCart = (item) => {
        if(item.quantity >= 1){
            setCart([...cart, item])
    } if(cart.some(articulo => articulo.id === item.id)){
        const carritoActualizado = cart.map(articulo => {
                if(articulo.id === item.id){
                    articulo.quantity = item.quantity
            }
            return articulo
        })
        setCart(carritoActualizado)
    }
        
};
    
    const getQuantity = () => {
        const quantityOnly = cart.map(item => item.quantity)
            const total = quantityOnly.reduce((acc, current) => acc + current, 0)
            return total
    }

    const removeCart = () => {setCart([])}

    const getTotal = ()=>{
            const getPrice = cart.map(item => parseInt(item.price) * parseInt(item.quantity))
                const totalPrice = getPrice.reduce((acc, current) => acc + current, 0)
                return totalPrice
    }

    return(
       <cartContext.Provider value={{cart, addToCart, getQuantity, removeCart, getTotal}}>
            {children}
       </cartContext.Provider>
    )
}

export default CartProvider