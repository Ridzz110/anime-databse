import React from 'react';
import { useJakan } from '../../context/Context';
import { ClipLoader } from 'react-spinners'; // Make sure to install react-spinners

function AnimePage() {
  const { data, error, loading } = useJakan();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-black">
        <ClipLoader color="#ffffff" loading={loading} size={50} />
      </div>
    );
  }

  if (error) return <p>Error: {error.message}</p>;

  const AnimeData = data?.data6 || {};

  const imageUrl = AnimeData.images?.jpg?.large_image_url;
  const title = AnimeData.title;


  return (
    <div className='bg-black relative overflow-hidden w-full h-full flex flex-col md:flex-row pt-16 overflow-x-hidden overflow-y-auto max-w-screen-lg mx-auto'>
      <div className='w-full md:w-1/2 mx-3 flex flex-col justify-start mt-16 items-start'>
        {imageUrl ? (
          <img src={imageUrl} alt={title || 'Anime Image'} className=' rounded-2xl h-2/4 object-cover'/>
        ) : (
          <p>No image available</p>
        )}
        <div className='flex flex-wrap gap-2 mt-4'>
          {AnimeData.genres?.map((item, index) => (
            <span
              key={index}
              className='bg-gray-800 text-white font-poppins rounded-full px-3 py-1 text-sm'
            >
              {item.name}
            </span>
          ))}
        </div>
        <div className='flex flex-col'>
        <div className='py-2 px-4 bg-zinc-800 border border-white rounded-lg text-white font-poppins mt-2 w-auto tracking-wide text-sm'>Episodes: {AnimeData.episodes}</div>
        <div className='py-2 px-4 bg-zinc-800 border border-white rounded-lg text-white font-poppins mt-2 w-auto tracking-wide text-sm'>Duration: {AnimeData.duration}</div>
        <div className='py-2 px-4 bg-zinc-800 border border-white rounded-lg text-white font-poppins mt-2 w-auto tracking-wide text-sm'>Ratings: {AnimeData.rating}</div>
        </div>
      </div>
      <div className='font-poppins md:text-3xl lg:text-4xl text-2xl flex flex-col justify-center md:mt-10 mt-16 items-start w-full h-4/5 text-white'>
        <h1 className=''>{AnimeData.title_english}</h1>
        <p className='mt-2 text-lg'>{AnimeData.title_japanese}</p>
        <p className='mt-4 text-sm tracking-wide'>{AnimeData.synopsis}</p>
        <a href={AnimeData.url}
            target='_blank'
            className='py-2 px-4 bg-black border border-white text-lg mt-4'>
            View AnimeList Prof
          </a>
          <div className='mt-4 w-full aspect-video'>
            <iframe
              className='w-full h-full'
              src={AnimeData?.trailer?.embed_url}
              title="Trailer"
              allowFullScreen={false} // Disallow fullscreen
            ></iframe>
          </div>
      </div>
    </div>
  );
}

export default AnimePage;
