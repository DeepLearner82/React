import { useState } from "react";
// import { useMemo } from "react";

function Calculator({ num }) {
  const expensiveValue = () => {
    console.log("Calculating...");
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += i % num;
    }
    return result;
  };

  return <p>Calculated Value: {expensiveValue()}</p>;
}

// function Calculator({ num }) {
//   const expensiveValue = useMemo(() => {
//     console.log("Calculating...");
//     let result = 0;
//     for (let i = 0; i < 100000000; i++) {
//       result += i % num;
//     }
//     return result;
//   }, [num]); // only re-run if num changes

//   return <p>Calculated Value: {expensiveValue}</p>;
// }

function ExpensiveCalculator() {
  const [num, setNum] = useState(5);
  const [count, setCount] = useState(0);

  return (
    <div>
      <Calculator num={num} />
      <p>Count: {count}</p>
      <button onClick={() => setNum(num + 1)}>Change Num</button>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}
export default ExpensiveCalculator;
