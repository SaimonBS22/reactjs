import Items from "../Items/Items"
function ItemList({items}){
    return(
        <>
        <div className="conteinerProductos">
        {items.map(item => <Items item={item} key={item.id}/>)}
        </div>
        </>
          )
}


export default ItemList