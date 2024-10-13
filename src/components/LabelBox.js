import React, { useState } from "react";

export default function LabelBox() {
  const [isChecked, setIsChecked] = useState(false);

  function onChange() {
    setIsChecked(!isChecked);
  }

  return (
    <div>
      <label className={isChecked ? "checked" : "unchecked"}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={onChange}
          data-testid="checkbox"
        />
        Hello
      </label>
    </div>
  );
}
