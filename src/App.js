import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// components imports
import Events from "./pages/Events/Events";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Header />
        <Switch>
          <Route path="/">
            <Events />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
