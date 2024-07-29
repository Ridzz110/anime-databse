import React from 'react'
import { useJakan } from '../../context/Context'
import GenreCards from './genreCards';


function Genre() {

const {data, error, loading} = useJakan();
if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

    const genre = data?.data4 || [];
    //console.log("😎😎😊😉" + JSON.stringify(data.data4, null, 2))

  return (
    <div className=' h-screen bg-black relative overflow-hidden w-full text-white'>
      <p className='text-3xl font-poppins font-semibold mt-24 my-10 ml-10 '>GENRE</p>
      <div className='flex justify-center h-full'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-screen-lg mt-10'>
        {genre.map((item) => (
          <GenreCards
          key={item.mal_id}
          id={item.mal_id}
          title = {item.name}
          />
        ))}
    </div>
    </div>
    </div>
  )
}

export default Genre
