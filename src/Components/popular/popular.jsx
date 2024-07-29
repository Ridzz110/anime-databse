import React from 'react'
import Cards from '../Cards/Cards';
import {useJakan} from '../../context/Context'

function Popular() {
    //const [popular, setPopular] = useState([]);

    /*useEffect(() => {
    setTimeout(()=>{ axios
        .get('https://api.jikan.moe/v4/top/anime')
        .then((res) => {
          console.log(res.data.data); // Adjusted based on the response structure
          setPopular(res.data.data);})
        }, 1000);
        
    }, []);*/

    const {data, error, loading} = useJakan()

    if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

    const popular = data?.data2 || [];
    
  
    return (
    <div className='h-full bg-black relative overflow-hidden w-full relative'>
        <h1 className='text-3xl md:text-6xl font-bold my-16 text-white text-center'>Popular Right Now!</h1>
        <div className='flex justify-center'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-screen-lg'>
            {popular.slice(0, 8).map((item) => (
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

export default Popular
