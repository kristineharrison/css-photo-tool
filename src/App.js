import Styles from "./components/Styles";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/styles">
          <Styles />
        </Route>
        <Route exact path="/gallery">
          <Gallery />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
