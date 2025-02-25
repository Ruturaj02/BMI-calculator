import React, { use, useState } from "react";
import "./style.css";

const Home = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);

  const [message, setMessage] = useState("");
  const [bmi, setBmi] = useState("");

  const calcBmi = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Please enter a valid wight and height");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));

      if (bmi < 18.5) {
        setMessage("you are underweight");
      } else if (bmi >= 18.5 && bmi < 25) {
        setMessage("you have normal health");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("you are overweight");
      } else {
        setMessage("you have obesity");
      }
    }
  };

  const reload = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="app">
        <div className="container">
          <h2>BMI Calculator</h2>
          <form onSubmit={calcBmi}>
            <div>
              <label>Wight(lbs)</label>
              <input
                type="text"
                placeholder="Enter weight value"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div>
              <label>Height(in)</label>
              <input
                type="text"
                placeholder="Enter height value"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            <div>
              <button type="submit" className="btn">
                Submit
              </button>
              <button className="btn btn-outline" onClick={reload}>
                Reset
              </button>
            </div>
            <div>
              <h3>Your BMI value is : {bmi}</h3>
              <p>{message}</p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
