import Container from "./components/Container";
import Header from "./components/Header";
import Random from "./components/Random";
import ImageForm from "./components/ImageForm";

export default function App() {
  return (
    <>
      <Header />
      <Container />
      {/* <Random /> */}
      <ImageForm addNewImage={addNewImage} />
    </>
  );
}
