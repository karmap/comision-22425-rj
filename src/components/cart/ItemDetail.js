import React, {useState} from 'react'
import { useEffect } from 'react/cjs/react.development'
import ItemCount from './ItemCount'

const ItemDetail = () => {

    const [added, setAdded] = useState(false)

    const product = {id: 1, nombre: 'DVD', precio: '10' }

    const onAdd = () => {
        setAdded(true)
    }

    useEffect(()=>{
        console.log('added', added);
    }, [added])

    return (
        <div>
            <h1>{product.nombre}</h1>
            <h2>{product.precio}</h2>
            {!added && 
                <ItemCount onAdd={onAdd}></ItemCount>   
            }
            {added &&
                <button>Terminar compra</button>
            }
        </div>
    )
}

export default ItemDetail
