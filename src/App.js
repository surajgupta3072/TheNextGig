import HomePage from "./HomePage/HomePage";
import MasterClassPage from "./MasterClassPage/MasterClassPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MasterClassDetails from "./MasterClassPage/MasterClassDetails";
import Header from "./Header";

function App() {
  return (
    <div>
      <Header/>
      <Router>
        <Switch>
          <Route path="/masterclass/id">
            <MasterClassDetails/>
          </Route>
          <Route path="/masterclass">
            <MasterClassPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
