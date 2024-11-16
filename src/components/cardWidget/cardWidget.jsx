import { Link } from "react-router-dom"
import { useCart } from "../../context/cartContext"




const CardWidget = ()=>{
    const { getQuantity} = useCart()

    return(
        <div className='divCardWidget'>
        <Link to='/cart'><img className='imgCarrito' src="../imagenes/carritoCompras.png"/></Link>
        {getQuantity()}
        </div>
        
        
    )
}

export default CardWidget