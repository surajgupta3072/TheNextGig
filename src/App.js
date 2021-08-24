import Header from "./Header/Header";
import HomePage from "./HomePage/HomePage";
import GigsPage from "./GigsPage/GigsPage";
import MasterClassPage from "./MasterClassPage/MasterClassPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GigsDetails from "./GigsPage/GigsDetails";
import MasterClassDetails from "./MasterClassPage/MasterClassDetails";
import Page2 from "./ExpertPage/Page2/Page2";
import ExpertPage from "./ExpertPage/ExpertPage";
import CompanyPage from "./CompanyPage/ComapnyPage";
import ProfilePage from "./ProfilePage/ProfilePage";
import LoginPage from "./AuthPage/LoginPage";
import RegisterPage from "./AuthPage/RegisterPage";
import "./App.css";
import { useEffect, useState } from "react";
import Auth from "@aws-amplify/auth";
import ProtectedRoute from "./GuardedRoute";

function App() {
  const [user, setUser] = useState(null);
  const [isAuthenticating, setAuthenticatingStatus] = useState(true);
  const [isAuthenticated, setAuthStatus] = useState(false);

  useEffect(async () => {
    try {
      const session = await Auth.currentSession();
      setAuthStatus(true);
      // console.log(session);
      const user = await Auth.currentAuthenticatedUser();
      setUser(user);
      // console.log(user);
    } catch (error) {
      if (error !== "No current user") {
        console.log(error);
      }
    }
    setAuthenticatingStatus(false);
  }, []);

  const authProps = {
    isAuthenticated: isAuthenticated,
    user: user,
    setAuthStatus: setAuthStatus,
    setUser: setUser,
  };
  // console.log("NIK authProps=", authProps);
  return (
    <div>
      {!isAuthenticating && (
        <div>
          <Header auth={authProps} />
          <Router>
            <Switch>
              <Route path="/login">
                <LoginPage auth={authProps} />
              </Route>
              <Route path="/register">
                <RegisterPage />
              </Route>
              <ProtectedRoute path="/profile" auth={authProps}>
                <ProfilePage auth={authProps}/>
              </ProtectedRoute>
              <Route path="/company/:id">
                <CompanyPage />
              </Route>
              <Route path="/expert/:id">
                <ExpertPage />
              </Route>
              <Route path="/expert">
                <Page2 />
              </Route>
              <ProtectedRoute path="/gigs/:id" auth={authProps}>
                <GigsDetails />
              </ProtectedRoute>
              <ProtectedRoute path="/gigs" auth={authProps}>
                <GigsPage />
              </ProtectedRoute>
              <Route path="/masterclass/:id">
                <MasterClassDetails />
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
      )}
    </div>
  );
}

export default App;
