import React from 'react';
import Cards from '../Cards/Cards';
import { useJakan } from '../../context/Context'; // Import the custom hook

function Recommendation() {
  const { data, loading, error } = useJakan();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const recommendations = data?.data1 || []; // Access the recommendations data

  return (
    <div className='h-full bg-black relative overflow-hidden w-full'>
      <h1 className='text-3xl md:text-6xl font-bold my-16 text-white text-center'>Recommended for you</h1>
      <div className='flex justify-center'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-screen-lg'>
          {recommendations.slice(0, 8).map((item) => (
            <Cards
              key={item.entry[0].mal_id}
              id={item.entry[0].mal_id}
              image={item.entry[0].images.jpg.large_image_url}
              title={item.entry[0].title}
              content={item.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Recommendation;
