import {  useCart } from "../../context/cartContext"
import { createOrder } from "../../firebase/db"
import { useNavigate } from "react-router-dom"
import { serverTimestamp } from "firebase/firestore"
import Swal from 'sweetalert2'


function Cart(){
    const { cart, getTotal} = useCart()
    const navigate = useNavigate();
    const { removeCart} = useCart()

    const handleSubmit = async(e) =>{
        e.preventDefault()

        const form = e.target
        const nombre = form[0].value
        const email = form[1].value
        const telefono = form[2].value
        const order = {
            buyer: {nombre, email, telefono},
            items: cart,
            dia: serverTimestamp(),
            total: getTotal()
        }
     const idOrder = await createOrder(order)

   
    Swal.fire({
        title:'Muchas gracias por su compra',
        text:'este es su orden de ID: ' + idOrder,
        background:' rgb(90, 90, 90)',
        color:'white',
        confirmButtonText: `Finalizar compra`,
    }).then((result) =>{
        if(result.isConfirmed){
            volverAlInicio()
            removeCart()
        }
    })

    const volverAlInicio = () => {
        navigate('/')
    }
    }

  

    return(
        <div className="containerCarritoProductos">
            {cart.map(prod => (
                <div key={prod.id} className="containerDatosCompra">
                    <img src={prod.thumbnail} className="imgCarritoProductos"/>
                    <p className="parrafoCompra"><b>{prod.title} <br />Cantidad: {prod.quantity}</b></p>
                </div>
            ))}
            <div className="containerForm">
                <form onSubmit={handleSubmit} className="formulario">
                    <input className='inputForm' type="text" placeholder="Nombre" required/>
                    <input className='inputForm' type="email" placeholder="Ejemplo@ejemplo.com" required />
                    <input className='inputForm' type="text" placeholder="Telefono" required/>
                    <button className="botonForm" type="submit">Finalizar Compra</button>
                </form>
            </div>
        </div>
    )
}

export default Cart