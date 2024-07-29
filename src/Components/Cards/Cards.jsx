import React from 'react';
import { Link } from 'react-router-dom';
import {useJakan} from '../../context/Context'

function Cards(props) {
  const { image, title, content, id } = props;
  const displayTitle = title ? title.slice(0, 25) : "No Title Available";
  const displayContent = content ? content.slice(0, 200) : "No Content Available";

  const {setSelectedAnime} = useJakan()

  const handleClick = () => {
    console.log('Selected Anime ID:', id);
    setSelectedAnime(id)
  }

  return (
    <Link to={`/anime/${id}`} onClick={handleClick}>
    <div className='my-10'>
      <div className='relative h-64 w-48 bg-zinc-800 mb-4 overflow-hidden rounded-xl'>
        <img src={image} alt='display' className='object-cover h-full w-full' />
        <div className='absolute inset-0 p-4 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300'>
          <p className='text-sm text-white'>{displayContent}...</p>
        </div>
      </div>
      <h1 className='text-xl font-bold text-white font-poppins mt-4 tracking-wide'>{displayTitle}</h1>
    </div>
    </Link>
  );
}

export default Cards;


