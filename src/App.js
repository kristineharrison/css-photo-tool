import Container from "./components/Container";
import Header from "./components/Header";
import Random from "./components/Random";
import EditForm from "./components/EditForm";

export default function App() {
  return (
    <div className="main-container">
      <Header />
      <Container />
      <Random />
    </div>
  );
}
