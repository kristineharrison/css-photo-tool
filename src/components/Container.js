import { useState, useEffect } from "react";
import StyleExample from "./StyleExample";
import StyleList from "./StyleList";

function Container() {
  const [newStyle, setNewStyle] = useState([]);
  const [newTitle, setNewTitle] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/examples")
      .then((res) => res.json())
      .then((data) =>{
            setNewStyle(data)
            setNewTitle(data)})
  }, []);

  function handleClick(newStyle) {
    setNewStyle(newStyle)
  }

  return (
    <div className="container">
      <aside>
        <StyleList handleClick={handleClick} newTitle={newTitle} />
      </aside>
      <section>
        <StyleExample newStyle={newStyle} />
      </section>
    </div>
  );
}

export default Container;
