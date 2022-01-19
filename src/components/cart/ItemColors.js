import React from 'react'

const ItemColors = ({colors}) => {

    console.log(`El componente ItemColors hizo render`);

    return (
        <div >
            {colors.map((c) => 
                <ColorCircle key={c} color={c}></ColorCircle>
            )}
        </div>
    )
}

const ColorCircle = React.memo( ({color}) => {

    console.log(`El componente para color ${color} hizo render`);

    const circleStyles = {
        height: '25px',
        width: '25px',
        backgroundColor: color,
        borderRadius: '50%',
        display: 'inline-block'
    }

    return (
        <div style={circleStyles}>
        </div>
    )
})

export default ItemColors
