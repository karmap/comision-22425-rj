import React, {useState} from 'react'
import { useEffect } from 'react/cjs/react.development'
import ItemColors from './ItemColors'
import ItemCount from './ItemCount'
import OrderButton from './OrderButton'

const ItemDetail = () => {

    const [added, setAdded] = useState(false)

    const product = {id: 1, nombre: 'DVD', precio: '10' }

    const colors = ['blue','green','red']

    const onAdd = () => {
        setAdded(true)
    }

    useEffect(()=>{
        console.log('added', added);
    }, [added])

    return (
        <div>
            <h1>{product.nombre}</h1>
            <ItemColors colors={colors}></ItemColors>
            <h2>{product.precio}</h2>
            {!added && 
                <ItemCount onAdd={onAdd}></ItemCount>   
            }
            {added &&
                <OrderButton></OrderButton>
            }
        </div>
    )
}

export default ItemDetail
