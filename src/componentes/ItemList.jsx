import React from 'react'
import Item from './Item';

const ItemList = ({ products }) => {

    return (
        <div>

            {
                products.map((p) => {
                    return(
                        <Item 
                            key={p.id}
                            id={p.id}
                            name={p.name}
                            description={p.description}
                            price={p.price}
                            image={p.image}
                            stock={p.stock}
                        />
                    )
                })
            }
        </div>
  )
}

export default ItemList