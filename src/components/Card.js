import React from 'react'

const Card = ({name, age, miEtiqueta, children}) => {
    return (
        <div>
            <h3>Nombre: {name}</h3>
            <h2>Edad: {age}</h2>
            <p>{children}</p>
            {miEtiqueta({
                title: 'Título de card',
                subtitle: 'Subítulo de card'
            })}
        </div>
    )
}

export default Card
// rafce -> shortcut