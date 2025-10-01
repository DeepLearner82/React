import { useState } from "react";

function List() {
  const [items, setItems] = useState(
    Array.from({ length: 10000 }, (_, i) => "Item " + i)
  );

  function updateItems() {
    console.time("Virtual DOM Paint Time");
    setItems((prevItems) =>
      prevItems.map((item, i) => (i < 10 ? "Updated Item " + i : item))
    );
    requestAnimationFrame(() => {
      console.timeEnd("Virtual DOM Paint Time");
    });
  }

  return (
    <div>
      <h2>Virtual DOM Update</h2>
      <div>
        {items.map((item, i) => (
          <p key={i}>{item}</p>
        ))}
      </div>
      <button onClick={updateItems}>Update 10 Items</button>
    </div>
  );
}

export default List;
