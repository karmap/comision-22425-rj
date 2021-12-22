import React from 'react'

const Item = ({char}) => {
    return (
        <div>
            <div><strong>{char.name}</strong>- {char.origin.name}</div>
        </div>
    )
}

export default Item
