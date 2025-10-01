import { useState, useEffect } from "react";

function EveryRender() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effect runs after EVERY render");
  }); // no dependencies

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setCount(count - 1)}>Decrement Count</button>
    </div>
  );
}

export default EveryRender;
