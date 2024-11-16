import {useEffect, useState, useContext} from 'react'
import { getItems, getCategoryItems } from '../../firebase/db'
import Loader from '../loader/loader'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

function ItemListContainer(){
    const [items, setItem] = useState([])
    const {id} = useParams()


    useEffect(()=>{
      if(!id){
        getItems()
            .then(res => {
              setTimeout(() =>{
                setItem(res)
              },3000)
            })
      } else{
        getCategoryItems(id)
        .then(res => {
          setTimeout(()=>{
            setItem(res)
          },)
        })
      }
           
    },[id])
  
      
      if(items.length > 0){
          return(
            <div className='conteinerProductos'>
            <ItemList items={items}/>
          </div>
          )
      }else{
        return(
          <div className='containerLoader'>
            <Loader/>
          </div>
        )
      }
      

      
  
}


export default ItemListContainer