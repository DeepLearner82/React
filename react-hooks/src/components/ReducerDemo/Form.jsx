import { useReducer } from "react";

const initialState = { name: "", email: "" };

function reducer(state, action) {
  switch (action.type) {
    case "setName":
      return { ...state, name: action.value };
    case "setEmail":
      return { ...state, email: action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <input
        placeholder="Name"
        value={state.name}
        onChange={(e) => dispatch({ type: "setName", value: e.target.value })}
      />
      <input
        placeholder="Email"
        value={state.email}
        onChange={(e) => dispatch({ type: "setEmail", value: e.target.value })}
      />
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <p>
        Name: {state.name}, Email: {state.email}
      </p>
    </div>
  );
}

export default Form;
