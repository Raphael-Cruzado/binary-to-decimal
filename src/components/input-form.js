import { useState } from "react";

function UserInput() {
  let [value, setValue] = useState('');
  const handleChange = (e) => {
    value = e.target.value;
    setValue(e.target.value);
    console.log(value);
  }

  const handleSubmit = (e) => {
    const input = e.target[0].value;
    const binary = parseInt(input);
    e.preventDefault();
  }
  // tomorrow get the value on submit and analyze it

  return (
    <form onSubmit={handleSubmit}>
      <input
      type="number"
      name="binary"
      placeholder="input binary here"
      maxLength="8"
      value={value}
      onChange={handleChange}
      />
      <br/>
      <input type="submit" value="Calculate"/>
    </form>
  )
}

export default UserInput;
