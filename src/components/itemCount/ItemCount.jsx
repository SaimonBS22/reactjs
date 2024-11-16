import {useState, useContext} from 'react'
import { cartContext } from '../../context/cartContext'

function ItemCount({detail}){
    const [count, setCount] = useState(0);
    const { addToCart, removeCart } = useContext(cartContext)

    const sumar = ()=> {setCount(count + 1)}
    const restar = ()=> {setCount(count - 1 ? 0 : 0)} 
    const handleAddToCart = ()=> addToCart({...detail, quantity: count})

     return(
        <div className='conteinerItemCount'>
            <p>{count}</p>
        <button onClick={restar} className='botonItemCount'>-</button>
        <button onClick={ handleAddToCart} className='botonCarrito'>Agregar al carrito</button>
        <button onClick={sumar} className='botonItemCount'>+</button>
        <button onClick={removeCart} className='botonCarrito'>Eliminar del carrito</button>
        </div>
        
        
        
     )
}

export default ItemCount;