import { useParams } from "react-router-dom"
import { getDetail } from "../../firebase/db"
import { useState, useEffect } from "react"
import ItemDetail from "../itemDetail/ItemDetail"



function ItemDetailContainer(){
    const [detail, setDetail] = useState() 
    const {id} = useParams()
    
    useEffect(()=>{
        getDetail(id)
        .then(res => setDetail(res))
    },[id])
    return(
        <ItemDetail detail={detail}></ItemDetail>
    )
}

export default ItemDetailContainer