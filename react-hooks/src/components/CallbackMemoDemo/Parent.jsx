import { useState, memo } from "react";
// import { useCallback } from "react";

const Child = memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Click Me</button>;
});

function Parent() {
  const [count, setCount] = useState(0);

  // without useCallback → new function created every render → child re-renders
  const handleClick = () => {
    console.log("Button clicked");
  };

  // with useCallback → new function created only if dependencies change
  // const handleClick = useCallback(() => {
  //   console.log("Button clicked");
  // }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child onClick={handleClick} />
    </div>
  );
}
export default Parent;
