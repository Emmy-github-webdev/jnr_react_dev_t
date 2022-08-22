import React, {useState} from 'react'
import './App.css'
import 'h8k-components'

import { Movieform, Movieslist, Search } from './components'

const title = 'Favorite Movie Directory'

function App() {
  const [movieData, setMovieData] = useState([]);
  const [searchField, setSearchField] = useState("");
  let moviesFilter = movieData;

  
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
  
  if(searchField.length >= 2){
    moviesFilter = movieData.filter((movie) => 
      movie.name.toLoweCase().startsWith(searchField.toLocaleLowerCase())
    );
  }

  const filteredMovieInDesc = moviesFilter.sort((a, b) => b.duration - a.duration);
  return (
    <div>
      <h8k-navbar header={ title } />
      <div className='layout-row justify-content-center mt-100'>
        <div className='w-30 mr-75'>
          <Movieform addMovie={addMovie} />
        </div>
        <div className='layout-column w-30'>
          <Search searchField={searchField} setSearchField={setSearchField}/>
          {filteredMovieInDesc.length !== 0 && <Movieslist movieData={filteredMovieInDesc} /> }
          {filteredMovieInDesc.length ===0 && movieData.length !== 0 && (
            <div data-testid='noResult'>
              <h3 className='text-center'>No Results Found</h3>
            </div>
          )}
        </div>
      </div> 
    </div>
  )
}

export default App;
