import { useState } from "react";
// import { memo } from "react";

const Child = ({ value }) => {
  console.log("Child rendered");
  return <p>Value: {value}</p>;
};

// Child component wrapped with React.memo
// const Child = memo(({ value }) => {
//   console.log("Child rendered");
//   return <p>Value: {value}</p>;
// });

function Parent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Parent Count: {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment Parent
      </button>
      {/* <Child> re-renders only if props change */}
      <Child value="Hello" />
    </div>
  );
}
export default Parent;
