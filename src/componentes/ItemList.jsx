import React from 'react'
import Item from './Item';

const ItemList = ({ productos }) => {
    console.log(productos);
    return (
        <div>

            {
                productos.map((p) => {
                    return(
                        <Item 
                            key={p.id}
                            name={p.name}
                            image={p.image}
                        />
                    )
                })
            }
        </div>
  )
}

export default ItemList