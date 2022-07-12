import styled from "styled-components"

export default function CSSRounded() {
  return (
    <div>
      <h1>Rounded Corners</h1>
      <RoundedCSSImage></RoundedCSSImage>
      <p>Steps on how to do it</p>
    </div>
  );
}

const RoundedCSSImage = styled.img.attrs(() => ({
  src: "../../public/assets/PZAA6984.JPG",
  alt: "roses",
}))`
  border-radius: 8px;
  `