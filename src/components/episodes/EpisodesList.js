import React from 'react'
import EpisodeCard from './EpisodeCard'
import { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore } from "firebase/firestore";

const EpisodesList = () => {

    const [episodes, setEpisodes] = useState([])
    const [watchlist, setWatchlist] = useState([])

    const db = getFirestore();

    useEffect( async ()=>{
        await getEpisodes()
    }, [])

    const getEpisodes = async () => {
        let episodes = []
        const querySnapshot = await getDocs(collection(db, "watchlist"));
        querySnapshot.docs.forEach((doc) => {
            const data = doc.data()
            // console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
            episodes.push(
                {
                    episode: data.id ? data.id : data.episodeId,
                    name: data.name
                }
            )
        });
        setEpisodes(episodes)
        console.log('episodes', episodes)
    }

    // const getEpisodes = () => {
    //     const URL = 'https://rickandmortyapi.com/api/episode' 
    //     fetch(URL)
    //         .then( res => res.json() )
    //         .then( data => setEpisodes(data.results) )
    // }

    // const getEpisodes = () => {
    //     const getPromise = new Promise( (res, rej) => {
    //         const episodes = [
    //             {title:'ep 1', id:'s01'},
    //             {title:'ep 2', id:'s02'},
    //             {title:'ep 3', id:'s03'}
    //         ]
    //         setTimeout(() => {
    //             res(episodes)
    //         }, 5000);
    //     })
    //     getPromise.then( res => setEpisodes(res))
    // }

    const addToWatchlist = id => {
        setWatchlist( [...watchlist, id] )
    }

    return (
        <div>
            <h1>Lista de Episodios</h1>
            {episodes.map( e => 
                <EpisodeCard
                    key={e.episode}
                    episode={e}
                    add={addToWatchlist}
                />
            )}
            <h1>Lista por ver</h1>
            {watchlist.map( e => <div>{e}</div> )}
        </div>
    )
}

export default EpisodesList
