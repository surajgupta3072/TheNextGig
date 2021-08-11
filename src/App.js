import HomePage from "./HomePage/HomePage";
import GigsPage from "./GigsPage/GigsPage";
import MasterClassPage from "./MasterClassPage/MasterClassPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GigsDetails from "./GigsPage/GigsDetails";
import MasterClassDetails from "./MasterClassPage/MasterClassDetails";
import Header from "./Header";
import Page2 from './ExpertPage/Page2/Page2';
import ExpertPage from './ExpertPage/ExpertPage';
import CompanyPage from './CompanyPage/ComapnyPage';
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <Router>
        <Switch>
          <Route path="/company/:id">
            <CompanyPage/>
          </Route>
          <Route path="/expert/:id">
            <ExpertPage/>
          </Route>
          <Route path="/expert">
            <Page2/>
          </Route>
          <Route path="/gigs/:id">
            <GigsDetails/>
          </Route>
          <Route path="/gigs">
            <GigsPage />
          </Route>
          <Route path="/masterclass/:id">
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
