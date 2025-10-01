import { useState, useEffect } from "react";

function OnceOnMount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effect runs ONLY once");
  }, []); // runs only once when Component mounts

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setCount(count - 1)}>Decrement Count</button>
    </div>
  );
}

export default OnceOnMount;

// function Timer() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setInterval(() => {
//       setCount((c) => c + 1);
//     }, 1000);

//     // ❌ No cleanup
//   }, []);

//   return <h1>{count}</h1>;
// }
// export default Timer;
