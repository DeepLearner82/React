import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h2>Counter App</h2>
      <p style={{ fontSize: "2em", margin: "1em 0" }}>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
export default Counter;
