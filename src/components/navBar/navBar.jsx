import CardWidget from "../cardWidget/cardWidget"
import { Link } from 'react-router-dom'
const NavBar = () =>{
    return(
        <nav className="contenedorNavBar">
            <Link to='/'>
                <h2 className="tituloNavBar">MusiUniverso</h2>
            </Link>
            <div className="contenedorBotones"> 
                <Link to='/category/celulares'>
                   <button className="botonNavBar">Celulares</button>
                </Link>
                <Link to='/category/consola'>
                    <button className="botonNavBar">Consolas</button>
                </Link>
                <Link to='/category/computadora'>
                    <button className="botonNavBar">Computadoras</button>
                </Link>
                <Link to='/category/auriculares'>
                    <button className="botonNavBar">Auriculares</button>
                </Link>
                <CardWidget/>
            </div>
        </nav>

        
    )
} 

export default NavBar