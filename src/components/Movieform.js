import React, { useState } from 'react';

function Movieform() {
 const [formInput, setFormInput] = useState({
  name: "",
  ratings: "",
  duration: ""
 });

 const [movieData, setMovieData] = useState([]);

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

  return (
    <section>
      <div className='card pa-30'>
        <form onSubmit={handleSubmit}>
          <div className='layout-column mb-15'>
            <label htmlFor='name' className='mb-3'>Movie Name</label>
            <input 
              type='text' 
              id='name'
              placeholder='Enter Movie Name'
              data-testid='nameInput'
              onChange={changeHandler}
            />
          </div>
          <div className='layout-column mb-15'>
            <label htmlFor='ratings' className='mb-3'>Ratings</label>
            <input 
              type='number' 
              id='ratings'
              placeholder='Enter Rating on a scale of 1 to 100'
              data-testid='ratingsInput'
              onChange={changeHandler}
            />
          </div>
          <div className='layout-column mb-30'>
            <label htmlFor='duration' className='mb-3'>Duration</label>
            <input 
              type='text' 
              id='duration'
              placeholder='Enter duration in hours or minutes'
              data-testid='durationInput'
              onChange={changeHandler}
            />
          </div>
          {/* Use this div when time format is invalid */}
          {/* <div 
            className='alert error mb-30'
            data-testid='alert'
          >
            Please specify time in hours or minutes (e.g. 2.5h or 150m)
          </div>  */}
          <div className='layout-row justify-content-end'>
            <button 
              type='submit'
              className='mx-0'
              data-testid='addButton'
            >
              Add Movie
            </button>
          </div>
          {movieData.map((movie, i) => {
            return (
              <ul key={i}>
                <li>
                  <div>{movie.name}</div>
                  <div>{movie.ratings}</div>
                  <div>{movie.duration}</div>
                </li>
              </ul>
            )
          })}
          </form>
      </div> 
    </section>
  )
}

export default Movieform
