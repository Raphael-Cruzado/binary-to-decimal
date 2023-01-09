import { useState } from "react";

function UserInput() {
  let [value, setValue] = useState('');
  const handleChange = (e) => {
    value = e.target.value;
    setValue(e.target.value);
    console.log(value);
  }

  // tomorrow get the value on submit and analyze it

  return (
    <form>
      <input
      type="text"
      name="binary"
      placeholder="input binary here"
      maxLength="8"
      value={value}
      onChange={handleChange}
      />
      <br/>
      <button>Calculate</button>
    </form>
  )
}

export default UserInput;
