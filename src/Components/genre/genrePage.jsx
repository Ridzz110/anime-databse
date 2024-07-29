import React from 'react';
import Cards from '../Cards/Cards';
//import { useParams } from 'react-router-dom';
import { useJakan } from '../../context/Context';

function GenrePage() {
  //const { mal_id } = useParams();
  const { data, error, loading } = useJakan();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const genreAnimes = data?.data5 || [];
  //console.log("🤩🤗🙂" + JSON.stringify(data.data5, null, 2));

  return (
    <div className='h-screen overflow-y-auto bg-black relative overflow-hidden w-full'>
      <h1 className=' relative text-3xl mx-10 md:text-4xl font-bold my-16 mt-24 text-white text-center'>
        Popular Right Now!
      </h1>
      <div className='flex justify-center'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-screen-lg'>
          {genreAnimes.map((item) => (
            <Cards
              key={item.mal_id}
              id={item.mal_id}
              image={item.images.jpg.large_image_url}
              title={item.title}
              content={item.synopsis}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default GenrePage;

