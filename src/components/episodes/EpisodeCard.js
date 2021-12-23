import React from 'react'

const EpisodeCard = ( {episode, add} ) => {
    return (
        <div>
            <h2>{episode.title}</h2>
            <strong>{episode.id}</strong>
            <br></br>
            <button onClick={ () => {add(episode.id)} }>
                Agregar a watchlist
            </button>
        </div>
    )
}

export default EpisodeCard
