import React from 'react'
import Cards from '../Cards/Cards'
import {useJakan} from '../../context/Context'

function Random() {
    const {data, error, loading} = useJakan()

    if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const random = Array.isArray(data?.data3) ? data.data3 : [data?.data3];
  

    
  
    return (
    <div className='h-full bg-black relative overflow-hidden w-full mx-4'>
        <h1 className='text-3xl md:text-6xl font-bold my-16 text-white text-center'>Have a Random watch!</h1>
        <div className='flex justify-center'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-screen-lg'>
            {random.map((item) => (
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

export default Random
