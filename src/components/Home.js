import { useState } from "react";

export default function Home() {
  
const [polaroidImage, setPolaroidImage] = useState(true)
const [polaroidContainer, setPolaroidContainer] = useState(true)

function handleClick() {
  setPolaroidImage(!polaroidImage)
  setPolaroidContainer(!polaroidContainer)
}

  return (
  <div>
    <h1>Why Using CSS Styles Is Helpful</h1>
    {polaroidContainer ?
        <div id="polaroid-container">
        {polaroidImage ?
            <img onClick={handleClick} className="polaroid" src="https://images.unsplash.com/photo-1596999233004-6ffb15fc364c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80"></img>
            :
            <img onClick={handleClick} src="https://images.unsplash.com/photo-1596999233004-6ffb15fc364c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80"></img>
        }
        <div id="polaroidText"> 
          <p>Sullivan's Island, South Carolina.<br></br>This was created with a polaroid effect.</p>
        </div>
      </div>
      :
      <div>
      {polaroidImage ?
          <img onClick={handleClick} className="polaroid" src="https://images.unsplash.com/photo-1596999233004-6ffb15fc364c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80"></img>
          :
          <img onClick={handleClick} src="https://images.unsplash.com/photo-1596999233004-6ffb15fc364c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80"></img>
      }
      <div id="polaroidText"> 
      <p>Sullivan's Island, South Carolina.<br></br>This was created with a polaroid effect.</p>
      </div>
    </div>
    }
    <p>Click to view the original image.</p>
    <p>Styling images using CSS may seem more time consuming than editing an image in Photoshop, but there are many advantages to being able to control the 
      appearance of images straight from the code. Manipulating content from CSS allows it to be more dynamic and change as users interact with the webpage. 
      It also makes applying different effects to multiple images at once extremely easy by using class names.
    </p>
  </div>
  )
}
