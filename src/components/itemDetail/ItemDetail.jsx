import ItemCount from "../itemCount/ItemCount"
function ItemDetail({detail}){
    return(
        <div className="contenedorDetail">
            <img src={detail?.thumbnail} className="imgDetail" />
            <h2>{detail?.title}</h2>
            <p className="parrafoDetailPrecio">${detail?.price}</p>
            <p>Rating: <b>{detail?.rating}</b></p>
            <p>Stock: <b>{detail?.stock}</b></p>
            <p className="parrafoDescripcion"><b className="tituloDescripcion">Descripcion del Producto:</b><br />{detail?.description}</p>
            <ItemCount detail={detail}/>
        </div>
    )
}

export default ItemDetail