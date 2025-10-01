// --------------------------- Student List App ------------------------------

// import Student from "./components/Student/Student";
// const App = () => {
//   return (
//     <>
//       <Student name="Aditi" branch="Computer" />
//       <Student name="Rahul" branch="IT" />
//     </>
//   );
// };

// export default App;

// --------------------------- Shopping List App ------------------------------
// import ShoppingList from "./components/ShoppingList/ShoppingList";

// const App = () => {
//   return (
//     <div>
//       <ShoppingList />
//     </div>
//   );
// };

// export default App;

// --------------------------- Setting "STATE" value "RIGHT" way ------------------------------
// import { useState } from "react";
// function App() {
//   const [list, setToDoList] = useState([]);

//   function addItemWrong() {
//     setToDoList(list.concat("A"));
//     setToDoList(list.concat("B"));
//   }

//   function addItemRight() {
//     setToDoList((prev) => prev.concat("A"));
//     setToDoList((prev) => prev.concat("B"));
//   }

//   return (
//     <div>
//       <button onClick={addItemWrong}>Add Wrong</button>
//       <button onClick={addItemRight}>Add Right</button>
//       <p>{list.join(", ")}</p>
//     </div>
//   );
// }
// export default App;

// --------------------------- Demonstarte importance of "key" in a list ------------------------------

import { useState } from "react";

const App = () => {
  const [list, setList] = useState([
    { id: "item1", text: "Finish ReactJS" },
    { id: "item2", text: "Learn new technologies" },
    { id: "item3", text: "Attend meeting" },
  ]);

  function addItem() {
    const newId = `item${list.length + 1}`;
    setList([...list, { id: newId, text: `New item ${list.length + 1}` }]);
  }

  function removeItem(id) {
    setList(list.filter((item) => item.id !== id));
  }

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            {item.text}
            <button
              onClick={() => removeItem(item.id)}
              style={{ marginLeft: "1em" }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
