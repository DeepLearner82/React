// --------------------------- useState Demo ------------------------------

// // -----------  Counter with Class Component -----------
// import CounterClass from "./components/StateDemo/CounterClass/Counter";

// // -----------  Counter with Functional Component -----------
// import Counter from "./components/StateDemo/Counter/Counter";

// const App = () => {
//   return (
//     <div>
//       <Counter />
//     </div>
//   );
// };

// export default App;

// --------------------------- ToDo List App ------------------------------

// import { useState } from "react";

// import ToDoList from "./components/ToDoList/ToDoList";
// import NewItem from "./components/NewItem/NewItem";
// import "./App.css";

// const App = () => {
//   console.log("App Component Rendered");
//   const [list, setToDoList] = useState([
//     { id: "item1", text: "Finish ReactJS" },
//     { id: "item2", text: "Learn new technologies" },
//     { id: "item3", text: "Attend meeting" },
//   ]);

//   const addNewItemHandler = (newItem) => {
//     console.log("adding new item");
//     // setToDoList(list.concat(newItem));
//     setToDoList((prevList) => prevList.concat(newItem));
//   };

//   return (
//     <div className="todo-list">
//       <h2>To Do List</h2>
//       <NewItem onAddItem={addNewItemHandler} />
//       <ToDoList list={list} />
//     </div>
//   );
// };

// export default App;

// --------------------------- useEffect Demo ------------------------------

// import OnlyOnce from "./components/EffectDemo/OnceOnMount";
// import Everytime from "./components/EffectDemo/EveryRender";
// import StateChanges from "./components/EffectDemo/DepChange";
// import Cleanup from "./components/EffectDemo/CleanTimer";
// import MultipleEffects from "./components/EffectDemo/MultipleEffects";

// const App = () => {
//   return (
//     <div>
//       <OnlyOnce />
//     </div>
//   );
// };

// export default App;

// --------------------------- useRef Demo ------------------------------

// import InputFocus from "./components/Ref/InputFocus";
// import Timer from "./components/Ref/Timer";
// import PreviousValueDemo from "./components/Ref/PreviousValueDemo";

// const App = () => {
//   return (
//     <div>
//       <PreviousValueDemo />
//     </div>
//   );
// };

// export default App;

// --------------------------- Why Context --------------------------------------

// function App() {
//   const user = "Linux";

//   return (
//     <>
//       <h1>{`Hello ${user}!`}</h1>
//       <Component2 user={user} />
//     </>
//   );
// }

// function Component2({ user }) {
//   return (
//     <>
//       <h1>Component 2</h1>
//       <Component3 user={user} />
//     </>
//   );
// }

// function Component3({ user }) {
//   return (
//     <>
//       <h1>Component 3</h1>
//       <h2>{`Hello ${user} again!`}</h2>
//     </>
//   );
// }

// export default App;

// --------------------------- useContext Demo --------------------------------------

// -------------------------- Avoiding Prop Drilling in Deep Trees -----------------------------

// import { ColorContext } from "./Context/MyContext";
// import Parent from "./components/ContextDemo/ComponentTree";

// function App() {
//   return (
//     <ColorContext.Provider value="green">
//       <Parent />
//     </ColorContext.Provider>
//   );
// }
// export default App;

// -------------------------- Theme Switcher App -----------------------------

// import { useState } from "react";
// import { ThemeContext } from "./Context/MyContext";
// import Header from "./components/ContextDemo/Header";

// function App() {
//   const [theme, setTheme] = useState("light");

//   return (
//     <ThemeContext.Provider value={"dark"}>
//       <Header />
//       <ThemeContext.Provider value={theme}>
//         <Header />
//         <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
//           Toggle Theme
//         </button>
//       </ThemeContext.Provider>
//     </ThemeContext.Provider>
//   );
// }
// export default App;

// -------------------------- Pass User Info  -----------------------------
// import { UserContext } from "./Context/MyContext";
// import Navbar from "./components/ContextDemo/NavBar";
// import Dashboard from "./components/ContextDemo/Dashboard";

// function App() {
//   const user = { name: "Siddharth", role: "Admin" };

//   return (
//     <UserContext.Provider value={user}>
//       <Navbar />
//       <Dashboard />
//     </UserContext.Provider>
//   );
// }
// export default App;

// -------------------------- Language / Localization  -----------------------------
// import { LanguageContext } from "./Context/MyContext";
// import { useState } from "react";
// import Greeting from "./components/ContextDemo/Greeting";

// function App() {
//   const [lang, setLang] = useState("en");
//   const translations = {
//     en: { greeting: "Hello" },
//     fr: { greeting: "Bonjour" },
//   };

//   return (
//     <LanguageContext.Provider value={translations[lang]}>
//       <Greeting />
//       <button onClick={() => setLang(lang === "en" ? "fr" : "en")}>
//         Switch Language
//       </button>
//     </LanguageContext.Provider>
//   );
// }
// export default App;

// -------------------------- useReducer Demo  -----------------------------

// import Counter from "./components/ReducerDemo/Counter";
// import Form from "./components/ReducerDemo/Form";
// import TodoApp from "./components/ReducerDemo/ToDo";

// function App() {
//   return (
//     <>
//       {/* <Counter /> */}
//       {/* <Form /> */}
//       <TodoApp />
//     </>
//   );
// }
// export default App;

// -------------------------- Memo Demo  -----------------------------

// import Parent from "./components/Memo/Parent";

// function App() {
//   return (
//     <>
//       <Parent />
//     </>
//   );
// }
// export default App;

// -------------------------- useCallback Demo  -----------------------------

// import Parent from "./components/CallbackMemoDemo/Parent";

// function App() {
//   return (
//     <>
//       <Parent />
//     </>
//   );
// }
// export default App;

// -------------------------- useMemo Demo  -----------------------------
// import ExpensiveCalculator from "./components/CallbackMemoDemo/ExpensiveCalculator";
// function App() {
//   return (
//     <>
//       <ExpensiveCalculator />
//     </>
//   );
// }
// export default App;

// -------------------------- Custom Hook Demo -1  -----------------------------
// import useCounter from "./components/CustomHooks/useCounter";

// const CounterComponent = ({ initialCount }) => {
//   // Each component gets its own 'count' state
//   const { count, increment, decrement, reset } = useCounter(initialCount);

//   return (
//     <div>
//       <h3>Count: {count}</h3>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div>
//       <CounterComponent initialCount={0} />
//       <CounterComponent initialCount={10} />
//     </div>
//   );
// };

// export default App;

// -------------------------- Custom Hook Demo -1  -----------------------------
import useFetch from "./components/CustomHooks/useFetch";

const DisplayList = ({ type, url }) => {
  const { data, loading, error } = useFetch(url);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data[type].map((item) => (
        <li key={item.id}>{type === "users" ? item.firstName : item.title}</li>
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div style={{ display: "flex", gap: "5rem" }}>
      <div>
        <h2>Users</h2>
        <DisplayList type="users" url="https://dummyjson.com/users" />
      </div>

      <div>
        <h2>Products</h2>
        <DisplayList type="products" url="https://dummyjson.com/products" />
      </div>
    </div>
  );
};

export default App;
