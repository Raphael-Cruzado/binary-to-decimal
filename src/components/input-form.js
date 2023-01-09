import { useState } from "react";

function UserInput() {
  const [value, setValue] = useState('');

  return (
    <form>
      <input
      type="text"
      name="binary"
      placeholder="input binary here"
      maxLength="8"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      />
      <br/>
      <button>Calculate</button>
    </form>
  )
}

export default UserInput;
