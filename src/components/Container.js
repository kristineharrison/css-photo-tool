import { useState, useEffect } from "react";
import StyleExample from "./StyleExample";
import StyleList from "./StyleList";

function Container() {
  const [newStyle, setNewStyle] = useState([]);
  const [newTitle, setNewTitle] = useState([]);
  const [imagePlaceholder, setImagePlaceholder] = useState(true);
  const [descriptionPlaceholder, setDescriptionPlaceholder] = useState(true);
  const [titlePlaceholder, setTitlePlaceholder] = useState(true);
  const [codePlaceholder, setCodePlaceholder] = useState(true);

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
        <StyleList 
          setCodePlaceholder={setCodePlaceholder}
          setTitlePlaceholder={setTitlePlaceholder}
          setDescriptionPlaceholder={setDescriptionPlaceholder}
          setImagePlaceholder={setImagePlaceholder}
          handleClick={handleClick} 
          newTitle={newTitle} 
        />
      </aside>
      <section>
        <StyleExample 
          codePlaceholder={codePlaceholder}
          titlePlaceholder={titlePlaceholder}
          descriptionPlaceholder={descriptionPlaceholder}
          imagePlaceholder={imagePlaceholder} 
          newStyle={newStyle} 
        />
      </section>
    </div>
  );
}

export default Container;
