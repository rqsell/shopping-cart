import logo from "./logo.svg";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import "./App.css";

import {
  BrowserRouter,
  Switch,
  Route,
  NavLink,
  useHistory,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
      </div>
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
