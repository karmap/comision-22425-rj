import React from 'react'

const CardList = () => {

    const names = ['Ana', 'Juan', 'Maria']
    // const namesList = names.map( n => <li>{n}</li> )

    return (
        <div>
            {names.map( n => <li>Nombre: {n}</li> )}
        </div>
    )
}

export default CardList
