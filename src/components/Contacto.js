import React from 'react'

const Contacto = () => {

    const onClickHandler = (event) => {
        console.log('hizo click')
        console.log(event);
    }

    return (
        <div>
            <h2>Esta sería una forma de contacto</h2>
            <textarea></textarea>
            <br/>
            <button onClick={onClickHandler}>Enviar</button>
        </div>
    )
}

export default Contacto
