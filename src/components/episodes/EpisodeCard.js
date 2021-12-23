import React from 'react'

const EpisodeCard = ( {episode} ) => {
    return (
        <div>
            <h2>{episode.title}</h2>
            <strong>{episode.id}</strong>
        </div>
    )
}

export default EpisodeCard
