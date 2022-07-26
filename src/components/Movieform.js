import React from 'react';

function Movieform({ form, setForm }) {
  
  // const [duration, setDuration] = useState();
  // const [active, setActive] = useState(false);
  // const [error, setError] = useState(false);

  const handleChange = (e) => {
    // setActive(true);
    setForm({
      ...form,
      [e.target.id]: (e.target.value),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello from handle submit", form );
    if(form){
      setForm({
        ...form,
      });
      setForm("");
    }
  }

  return (
    <section>
      <div className='card pa-30'>
        <form onSubmit={ handleSubmit }>
          <div className='layout-column mb-15'>
            <label htmlFor='name' className='mb-3'>Movie Name</label>
            <input 
              type='text' 
              id='name'
              placeholder='Enter Movie Name'
              data-testid='nameInput'
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div className='layout-column mb-15'>
            <label htmlFor='ratings' className='mb-3'>Ratings</label>
            <input 
              type='number' 
              id='ratings'
              placeholder='Enter Rating on a scale of 1 to 100'
              data-testid='ratingsInput'
              value={form.ratings}
              onChange={handleChange}
            />
          </div>
          <div className='layout-column mb-30'>
            <label htmlFor='duration' className='mb-3'>Duration</label>
            <input 
              type='text' 
              id='duration'
              placeholder='Enter duration in hours or minutes'
              data-testid='durationInput'
              value={form.duration}
              onChange={handleChange}
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
          </form>
      </div> 
    </section>
  )
}

export default Movieform
