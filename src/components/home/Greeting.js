import React from 'react'

const Greeting = ({ name = null }) => {


    return (
        <h2>
            { name ?
                `Hola ${name} Bienvenid@!`
            :
                'Registrate para ver más'
            }
        </h2>
    )

    // return (
    //     <>
    //     {name && <h2>Hola {name} Bienvenido!</h2>}
    //     {!name && <h2>Registrate para ver más</h2>}
    //     </>
    // )

    // if (name) {
    //     return (
    //        <h2>Hola {name} Bienvenido!</h2>
    //     )
    // } else {
    //     return (
    //        <h2>Registrate para ver más</h2>
    //     )
    // }

    
}

export default Greeting
