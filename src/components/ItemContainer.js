import React from 'react'
import { useEffect, useState } from 'react'
import Item from './Item'

const ItemContainer = () => {

    const [characters, setCharacters] = useState([])

    const getItems = () => {
        const URL = 'https://rickandmortyapi.com/api/character'
        fetch(URL)
            .then( res => res.json() )
            .then( data => {
                setCharacters(data.results)
            })
    }

    useEffect( ()=>{
        getItems()
    }, [])

    return (
        <div>
            {characters.map(c =>
               <Item char={c}></Item>
            )}
        </div>
    )
}

export default ItemContainer
