import React, {useState} from 'react'
import './App.css'
import 'h8k-components'

import { Movieform, Movieslist, Search } from './components'

const title = 'Favorite Movie Directory'

function App() {
  const [movieData, setMovieData] = useState([]);
  
  const addMovie = (name, rating, duration) => {
    setMovieData((movieData) => [
      ...movieData,
      {
        name,
        rating,
        duration,
      },
    ]);
  };
   

  return (
    <div>
      <h8k-navbar header={ title } />
      <div className='layout-row justify-content-center mt-100'>
        <div className='w-30 mr-75'>
          <Movieform addMovie={addMovie} />
        </div>
        <div className='layout-column w-30'>
          <Search />
          <Movieslist movieData={movieData} /> 
          <div data-testid='noResult'>
            <h3 className='text-center'>No Results Found</h3>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default App;
