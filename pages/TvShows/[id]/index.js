import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { BsEmojiHeartEyes } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";

import Navbar from '@/components/Navbar';
const index = () => {
    const router = useRouter();
    const { id } = router.query;
    const [selectedMovie, setSelectedMovie] = useState({});
    const [loading, setLoading] = useState(true);

    const SelctedDetail = async () => {
        try {
            const strimage = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=1665407252326530351ed5a76c30158f&language=en-US`);
            const json = await strimage.json();
            setSelectedMovie(json);
            console.log(json);
        } catch (error) {
            console.log("Not fatched",error)
        }finally {
            setLoading(false);
          }
    };
    useEffect(() => {
        SelctedDetail();
    }, [id]);


    return selectedMovie ? (<>
        <Navbar />
        {loading ? (
        <p className='absolute top-2/4	left-1/2'>Loading...</p>
        
      ) : (
        <div className='w-full h-full p-5 flex'>
            <img className='w-96' key={selectedMovie.id} src={`https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`} />
            <div className='p-10'>
                <div className='w-full flex justify-between mb-14'>
                    <div>
                        <h1>{selectedMovie.name}</h1>
                        <h4>{selectedMovie.first_air_date}</h4>
                    </div>
                    <h5><FaHeart />
{selectedMovie.vote_average} </h5>
                    <h5><BsEmojiHeartEyes />{selectedMovie.vote_count}</h5>

                </div>
                <hr />
                <p className='mt-10 mb-5'>{selectedMovie.overview} <br /> <br /> Popularity : "{selectedMovie.popularity}" </p>

                <table className='leading-10'>
                            <tr>
                                <td style={{ width: '30%', color: '#B0A4A4' }}>
                                    Genres:
                                </td>
                                <td style={{ width: '70%' }}>
                                    {selectedMovie.genres ? selectedMovie.genres.map((genre) => genre.name + ", ") : ''}
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: '30%', color: '#B0A4A4' }}>
                                    Languages:
                                </td>
                                <td  style={{ width: '70%' }}>
                                    {selectedMovie.spoken_languages
                                        ? selectedMovie.spoken_languages
                                            .map((lang) => lang.name + ", ") : ''}
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: '30%', color: '#B0A4A4' }}>
                                Production Companies:
                                </td>
                                <td  style={{ width: '70%' }}>
                                {selectedMovie.production_companies ? selectedMovie.production_companies.map((com) => com.name + ", ") : ''}
                                    
                                </td>
                            </tr>
                        </table>


            </div>
        </div>
      )}
    </>
    ) : (<h1>Loading</h1>)
}

export default index