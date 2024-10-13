import React, { useState } from "react";

export default function Clicker() {
  const [value, setValue] = useState(0);
  return (
    <div>
      <p>You pressed {value}</p>
      <button onClick={() => setValue(value + 1)}>Press</button>
    </div>
  );
}
