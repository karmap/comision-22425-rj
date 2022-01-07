import React, {useState} from 'react'

const ItemCount = ({onAdd}) => {

    const [counter, setCounter] = useState(0);

    function incrementCounter() {
        setCounter(counter + 1);
     }
 
     function decrementCounter() {
        setCounter(counter - 1);
     }

    return (
        <>
            <div>
                <button onClick={decrementCounter}>-</button>
                <span>{counter}</span>
                <button onClick={incrementCounter}>+</button>
            </div>
            <button onClick={onAdd}>Agregar al Carrito</button>
        </>
    )
}

export default ItemCount
