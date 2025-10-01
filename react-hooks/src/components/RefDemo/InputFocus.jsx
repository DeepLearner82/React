import { useRef } from "react";

function InputFocus() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus(); // directly focus input element
  }

  return (
    <div>
      <input ref={inputRef} placeholder="Type here..." />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}

export default InputFocus;
