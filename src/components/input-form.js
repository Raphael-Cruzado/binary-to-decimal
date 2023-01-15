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
    console.log(binary);
    if (isNaN(binary)) {
      alert('input must be a number')
    } else {
      console.log('its a number')
    }
    e.preventDefault();
  }

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
