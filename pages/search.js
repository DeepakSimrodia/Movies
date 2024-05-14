import React from 'react'
import axios from 'axios';
import { useState } from 'react'
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const search = () => {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("");
    let getLatestMovies = async (e) => {
        e.preventDefault();
        const { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=1665407252326530351ed5a76c30158f&query=${query}`);
        setMovies(data.results);
    }
 
    return (
                <><Navbar/>
            <div className='w-full flex items-center justify-center p-3'>
                <form onSubmit={(e) => getLatestMovies(e)} >
                    <input type="text" placeholder='Search' value={query} onChange={(e) => { setQuery(e.target.value); console.log(query) }} className='w-72 text-center border-2 border-black rounded-md'/>
                </form>
                </div>
                <div className='flex flex-wrap gap-10 items-center justify-center p-5 '>
                    {movies && movies.map((m) => (
                        <div className='w-52 border-2 border-black p-1 flex flex-col items-center justify-center text-center overflow-hidden' key={m.id}>
                            <img src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`} width="100%" key={m.id} className='border-black border-2'></img>
                            <div className='movieDetail'>
                                <Link href={`/Movies/${m.id}`}>
                                    <h4>{m.title}</h4>
                                </Link>
                            </div></div>
          ))}
     
            </div>
            </>
            )
}

            export default search