import React from 'react'
import { useState,useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
const ArivingToday = () => {
  let [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  let allMovie = async () => {
      try {
          const data = await fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=1665407252326530351ed5a76c30158f&language=en-US&page=1`)
          const json = await data.json();
          setMovie(json.results)
      } catch (error) {
          console.log("NOt Fetch")
      }finally {
        setLoading(false);
      }
  }
  useEffect(() => {
      allMovie();
  }, [])
  return (
    <>
    <Navbar/>
    {loading ? (
        <p className='absolute top-2/4	left-1/2'>Loading...</p>
      ) : (
    <div className='flex flex-wrap gap-10 items-center justify-center p-5'>
    {movie && movie.map((m) => (
        <div className='w-52 border-2 border-black p-1 flex flex-col items-center justify-center text-center' key={m.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`} width="100%" className='border-2 border-black' key={m.id}></img>
            <div className='movieDetail'>
            <Link href={`/TvShows/${m.id}`}>
                <h4>{m.name}</h4>
        </Link>
                <h3>{m.vote_count} Peoples like this </h3>

            </div>
        </div>
    ))}
</div>
 )}
    </> 
  )
}

export default ArivingToday