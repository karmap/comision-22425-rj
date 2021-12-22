import React from 'react'

const Label = ({title, subtitle}) => {
    return (
        <>
            <span style={{border:'2px solid blue'}}>
                {title}
            </span>
            <span>
                {subtitle}
            </span>
        </>
    )
}

export default Label
