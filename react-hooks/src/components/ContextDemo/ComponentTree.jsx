import { useContext } from "react";
import { ColorContext } from "../../Context/MyContext";

function Parent() {
  return <Child />;
}

function Child() {
  return <GrandChild />;
}

function GrandChild() {
  const color = useContext(ColorContext);
  return <p style={{ color }}>I am {color}!</p>;
}
export default Parent;
