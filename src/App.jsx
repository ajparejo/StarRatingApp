import { useState } from 'react'
import './App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function App({ noStars = 10 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (value) => {
    setRating(value);
  };

  const handleMouseEnter = (value) => {
    setHover(value);
  };

  const handleMouseLeave = () => {
    setHover(rating);
  };

  const handleReset = () => {
    setRating(0);
    setHover(0);
  };

  return (
    <>
      <div className='container'>
        <div className='title'>
          <h1>Your own ratings!!!</h1>
        </div>
        <div>
        {
          [...Array(noStars)].map((_, index) => {
            index += 1
            return <FontAwesomeIcon
            key={index}
            icon={faStar}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size="4x"/>
          })
        }
        </div>
        <button className='reset' onClick={() => handleReset()}>Reset</button>
      </div>
    </>
  )
}

export default App
