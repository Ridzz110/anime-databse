import React from 'react';
import Cards from '../Cards/Cards';
import { useJakan } from '../../context/Context';

function QueryResults() {
  const { searchResults } = useJakan();

  return (
    <div className='h-full bg-black relative overflow-hidden w-full mx-4'>
      <h1 className='text-3xl md:text-5xl font-bold my-16 text-white text-center'>Based on your Results!</h1>
      <div className='flex justify-center'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-screen-lg'>
          {searchResults && searchResults.length > 0 ? (
            searchResults.slice(0, 4).map((item) => (
              <Cards
                key={item.mal_id}
                id={item.mal_id}
                image={item.images.jpg.large_image_url}
                title={item.title}
                content={item.synopsis}
              />
            ))
          ) : (
            <p className='text-white text-center'>No results found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default QueryResults;
