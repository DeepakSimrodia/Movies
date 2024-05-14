import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const MoviesCard = () => {
    let [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);

    let allMovie = async () => {
        try {
            const data = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=1665407252326530351ed5a76c30158f`)
            const json = await data.json();
            setMovie(json.results)
        } catch (error) {
            console.log("Not fetch")
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        allMovie();
    }, [])

    return (<>
        {loading ? (
            <p className='absolute top-2/4	left-1/2'>Loading...</p>
        ) : (

            <div className='flex flex-wrap gap-10 items-center justify-center p-5'>
                {movie && movie.map((m) => (
                    <div className='w-52 border-2 p-1 border-black	rounded flex flex-col items-center justify-center text-center overflow-hidden' key={m.id}>
                        <img src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`} width="100%" key={m.id} className='border-black	border-2'></img>
                        <div>
                            <Link href={`/Movies/${m.id}`}>
                                <h4>{m.title}</h4>
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

export default MoviesCard

