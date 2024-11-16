import NavBar from './components/navBar/navBar.jsx'
import ItemListContainer from './components/itemListConteiner/ItemListConteiner.jsx'
import Cart from './components/cart/cart.jsx'
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer.jsx'
import './styles.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
 
  return (
    <>
    <BrowserRouter>
    <NavBar/>
       <br />
       <hr/>
       <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
       <Route path='/category/:id' element={<ItemListContainer/>}/>
       <Route path='/item/:id' element={<ItemDetailContainer/>}/>
       <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<h1>Error 484</h1>}/>
       </Routes>
      </BrowserRouter> 
    </>
  
  )
}

export default App
