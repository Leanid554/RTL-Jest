import { useEffect, useState } from "react";
import "./App.css";
import Clicker from "./components/Clicker";
import LabelBox from "./components/LabelBox";

function App() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState("");

  const onClick = () => setToggle((prev) => !prev);
  useEffect(() => {
    setTimeout(() => {
      setData({});
    }, 500);
  }, []);
  return (
    <div className="App">
      <LabelBox />
      <Clicker />
      <div>
        <h1 data-testid="value-elem">{value}</h1>
        {toggle === true && <div data-testid="toggle-elem">toggle</div>}
        {data && <div style={{ color: "red" }}>data</div>}
        <h1>Hello world</h1>
        <button data-testid="toggle-btn" onClick={onClick}>
          click me
        </button>
        <input
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="input value......"
        ></input>
      </div>
    </div>
  );
}

export default App;
