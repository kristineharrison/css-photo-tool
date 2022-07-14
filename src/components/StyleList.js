export default function StyleList({newTitle, handleClick, setImagePlaceholder, setDescriptionPlaceholder, setTitlePlaceholder, setCodePlaceholder}) {

  return (
    <ul className="styles">
      {newTitle.map(titleObj => {
        return <li 
          onClick={(e)=>{ 
          setCodePlaceholder(false)
          setTitlePlaceholder(false)
          setImagePlaceholder(false)
          setDescriptionPlaceholder(false)
          handleClick(titleObj)}}
          key={titleObj.id}
          >{titleObj.title}
          </li>
      })}
    </ul>
  );
}
