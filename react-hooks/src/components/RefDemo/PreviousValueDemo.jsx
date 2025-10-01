import { useState, useEffect, useRef } from "react";

function PreviousValueDemo() {
  const [value, setValue] = useState("");
  const prevValueRef = useRef("");

  useEffect(() => {
    prevValueRef.current = value; // store previous value
  }, [value]);

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <p>Current: {value}</p>
      <p>Previous: {prevValueRef.current}</p>
    </div>
  );
}

export default PreviousValueDemo;
