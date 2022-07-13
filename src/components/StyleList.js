export default function StyleList({newTitle, handleClick}) {

  return (
    <ul className="styles">
      {newTitle.map(titleObj => {
        return <li onClick={(e) => handleClick(titleObj)} key={titleObj.id}>{titleObj.title}</li>
      })}
    </ul>
  );
}
