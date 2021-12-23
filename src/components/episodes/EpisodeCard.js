import React from 'react'

const EpisodeCard = ( {episode, add} ) => {
    return (
        <div>
            <h2>{episode.name}</h2>
            <strong>{episode.episode}</strong>
            <br></br>
            <button onClick={ () => {add(episode.episode)} }>
                Agregar a watchlist
            </button>
        </div>
    )
}

export default EpisodeCard
