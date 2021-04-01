import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Pokemon from "./Pages/Pokemon";
import About from "./Pages/About";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/db" component={About} />
        <Route path="/pokemon" component={Pokemon} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
