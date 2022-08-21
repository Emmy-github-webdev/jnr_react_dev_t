import React, {useState} from 'react'
import './App.css'
import 'h8k-components'

import { Movieform, Movieslist, Search } from './components'

const title = 'Favorite Movie Directory'

function App() {
  const [formInput, setFormInput] = useState({
    name: "",
    ratings: "",
    duration: ""
   });
  
  //  const [movieData, setMovieData] = useState([]);
  
   const changeHandler = (e) => {
      e.preventDefault();
      setFormInput({
        ...formInput,
        [e.target.id]: e.target.value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      //console.log(formInput)
      if(formInput){
        setMovieData((list) => [...list, formInput]);
        setFormInput({
          name: '',
          ratings: '',
          duration: ''
        });
      }
    }
  
   const [movieData, setMovieData] = useState([]);
  

  return (
    <div>
      <h8k-navbar header={ title } />
      <div className='layout-row justify-content-center mt-100'>
        <div className='w-30 mr-75'>
          <Movieform changeHandler={changeHandler} formInput={formInput} handleSubmit={handleSubmit}/>
        </div>
        <div className='layout-column w-30'>
          <Search />
          <Movieslist movieData={movieData} /> 
          <div data-testid='noResult'>
            <h3 className='text-center'>
              {movieData.length < 1 ? ("No Results Found"): null}
            </h3>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default App;
