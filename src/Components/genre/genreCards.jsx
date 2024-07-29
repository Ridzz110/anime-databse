import React from 'react'
import { Link } from 'react-router-dom';
import { useJakan } from '../../context/Context';

function GenreCards(props) {

const {id, title} = props
const displayTitle = title ? title.slice(0, 25) : "No Title Available";
const {setSelectedGenreId} = useJakan();

const handleClick = () => {
  setSelectedGenreId(id)
}

  return (
    <Link to={`/genre/${id}`} onClick={handleClick}>
    <div className='bg-zinc-900 h-24 w-60 rounded-xl flex justify-center items-center'>
      <p className='font-poppins text-2xl font-semibold'>{displayTitle}</p>
    </div>
    </Link>
  )
}

export default GenreCards
