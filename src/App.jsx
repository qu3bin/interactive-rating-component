import React, { useState } from 'react'
import starIcon from './assets/icon-star.svg'
import thankYou from './assets/illustration-thank-you.svg'
import './App.css'

function App() {

  const [rate, setRate] = useState(0);

  const [disabled, setDisabled] = useState(true);

  const saveRate = (e) => {

    let allNum = document.querySelectorAll(".numbers");
    let isActive = document.querySelectorAll(".active");

    setRate(e.target.value);
    setDisabled(false);

    if (isActive) {
      for (let i = 0; i < allNum.length; i++) {
        allNum[i].classList.remove("active");
      }
      e.target.classList.add("active");
    } else {
      e.target.classList.add("active");
    }

  }

  const submitRate = () => {
    document.querySelector(".rating").classList.add("hidden");
    document.querySelector(".thanks").classList.remove("hidden");
  }

  return (
    <main className="App">
      <section className="rating">
        <img className="star-icon" src={starIcon} alt="" />
        <h1>How did we do?</h1>
        <p>Please let us know how we did with your support request. 
        All feedback is appreciated to help us improve our offering!</p>
        <div className="buttons">
          <button onClick={saveRate} className="numbers" value={1}>1</button>
          <button onClick={saveRate} className="numbers" value={2}>2</button>
          <button onClick={saveRate} className="numbers" value={3}>3</button>
          <button onClick={saveRate} className="numbers" value={4}>4</button>
          <button onClick={saveRate} className="numbers" value={5}>5</button>
        </div>
        <button onClick={submitRate} className="submit-rating" type="submit" disabled={disabled}>Submit</button>
      </section>
      <section className="thanks hidden">
        <img className="thanks-img" src={thankYou} alt="" />
        <p className="thanks-selected">You selected {rate} out of 5</p>
        <h2>Thank you!</h2>
        <p>We appreciate you taking the time to give a rating. 
        If you ever need more support, don’t hesitate to get in touch!</p>
      </section>
    </main>
  )
}

export default App
