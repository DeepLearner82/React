import { useContext } from "react";
import { LanguageContext } from "../../Context/MyContext";

function Greeting() {
  const text = useContext(LanguageContext);
  return <h1>{text.greeting}</h1>;
}

export default Greeting;
