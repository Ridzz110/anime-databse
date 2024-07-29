import React from 'react';
import img3 from '../../assests/1357798.jpeg';
import Recommendation from '../recommendation/recommendation';
import Popular from '../popular/popular';
import Random from '../Random/Random';
import { useJakan } from '../../context/Context';
import QueryResults from './QueryResults';

function Home() {
  const { setSearchQuery, searchQuery } = useJakan();

  return (
    <>
      <div className="h-screen w-full flex relative pt-16 overflow-x-hidden overflow-y-auto">
        <img src={img3} alt="image3" className="object-cover w-full h-full" />
        <div className="bg-black opacity-70 absolute inset-0 mt-16"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-10">
          <h1 className="text-3xl md:text-6xl font-bold">Wanna watch some Anime? :3</h1>
          <div className="flex flex-row mt-6 rounded-full w-full max-w-lg">
            <input
              type="text"
              placeholder="search something >.<"
              className="border-none text-black w-full px-4 rounded-l-full"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              className="px-6 py-4 bg-black text-white flex justify-center items-center rounded-r-full"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      {/*<QueryResults />*/}
      <Recommendation />
      <Popular />
      <Random />
      
    </>
  );
}

export default Home;
