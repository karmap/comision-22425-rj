import React from 'react'
import EpisodeCard from './EpisodeCard'

const EpisodesList = () => {

    const episodes = [
        {
            title: 'Pilot',
            id: 'S01E01'
        },
        {
            title: 'Segundo episodio',
            id: 'S01E02'
        }
    ]

    return (
        <div>
            <h1>Lista de Episodios</h1>
            {episodes.map( e => 
                <EpisodeCard episode={e}/>
            )}
        </div>
    )
}

export default EpisodesList
