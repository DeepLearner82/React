import { useState, useEffect } from "react";

function DepChange() {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  useEffect(() => {
    console.log(`Effect runs ONLY when count changes: count = ${count}`);
  }, [count]); // runs only when count changes

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

export default DepChange;
