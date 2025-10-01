function ShoppingList() {
  const items = ["Fruits", "Oil", "Soaps"];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li> // Each list item is JSX
      ))}
    </ul>
  );
}
export default ShoppingList;
