import './App.css';
import Home from './Components/home/home.jsx';
import Navbar from './Components/navbar/Navbar.jsx';
import Genre from './Components/genre/genre.jsx';
import GenrePage from './Components/genre/genrePage.jsx';
import AnimePage from './Components/Cards/AnimePage.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="bg-black w-full h-full">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/genre' element={<Genre />} />
        <Route path="/genre/:mal_id" element={<GenrePage/>} />
        <Route path="/anime/:mal_id" element={<AnimePage/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

