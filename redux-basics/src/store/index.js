import { createStore } from "redux";

const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  // if (action.type === "increase") {
  //   return {
  //     counter: state.counter + action.amount,
  //     showCounter: state.showCounter,
  //   };
  // }

  // if (action.type === "toggle") {
  //   return {
  //     showCounter: !state.showCounter,
  //     counter: state.counter,
  //   };
  // }

  return state;
};

const store = createStore(counterReducer);

// ---------------- Multiple states -----------------
// const initialState = { counter: 0, showCounter: true, isAuthenticated: false };

// const MyReducer = (state = initialState, action) => {
//   if (action.type === "login") {
//     return {
//       isAuthenticated: true,
//       counter: state.counter,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "logout") {
//     return {
//       isAuthenticated: false,
//       counter: state.counter,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }

//   return state;
// };

// const store = createStore(MyReducer);

export default store;
