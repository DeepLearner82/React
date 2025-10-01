import { useState, useRef, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => setCount((c) => c + 1), 1000);
    return () => clearInterval(intervalRef.current); // cleanup
  }, []);

  return <h1>Timer: {count}</h1>;
}

export default Timer;
