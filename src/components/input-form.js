import { useState } from "react";
import EvaluateArray from "../components/evaluate-array.js"

function UserInput() {
  let [value, setValue] = useState('');
  const handleChange = (e) => {
    value = e.target.value;
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target[0].value;
    const binary = parseInt(input);
    const inputArray = value.split("");
    if (isNaN(binary)) {
      alert('input must be a number')
    } else {
      EvaluateArray(inputArray);
    }
  }

// evaluate array for 1s and 0s using Evaluate array
// function

  return (
    <form onSubmit={handleSubmit}>
      <input
      name="binary"
      placeholder="input binary here"
      value={value}
      onChange={handleChange}
      maxLength="8"
      />
      <br/>
      <input type="submit" value="Calculate"/>
    </form>
  )
}

export default UserInput;
