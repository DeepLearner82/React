import React, { useState, useEffect } from "react";

function MultipleEffects() {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  useEffect(() => {
    console.log("Effect 1: Runs on every render");
  });

  useEffect(() => {
    console.log("Effect 2: Runs only once");
  }, []);

  useEffect(() => {
    console.log("Effect 3: Runs only when count changes");
  }, [count]);

  return (
    <div>
      <p>
        Count: {count} | Other: {otherCount}
      </p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setOtherCount(otherCount + 1)}>
        Increment Other Count
      </button>
    </div>
  );
}

export default MultipleEffects;
