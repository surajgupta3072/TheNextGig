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
import { useEffect, useState } from "react";
import Auth from "@aws-amplify/auth";
import ProtectedRoute from "./GuardedRoute";
import SocialLearningPage from "./SocialLearningPage/SocialLearningPage";
import jwt_decode from "jwt-decode";
import docClient from './GigsPage/GigsAWS';
import Community from "./SocialLearningPage/Community";
import ForgotPasswordPage from "./AuthPage/ForgotPasswordPage";
import ChangePasswordPage from "./AuthPage/ChangePasswordPage";
import NotALearnerPage from "./NotALearnerPage/NotALearnerPage";
import AboutUs from "./AboutUsPage/AboutUs";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [isAuthenticating, setAuthenticatingStatus] = useState(true);
  const [isAuthenticated, setAuthStatus] = useState(false);

  useEffect(async () => {
    try {
      const session = await Auth.currentSession();
      setAuthStatus(true);
      const user = await Auth.currentAuthenticatedUser();
      // console.log(user);
      if(user.username.includes("google")) {
        var decoded = jwt_decode(user.signInUserSession.idToken.jwtToken);
        // console.log(decoded);
        let guser = {
          "attributes": {"name": decoded.name},
          "username": decoded.sub
        }
        setUser(guser);
        if(localStorage.getItem("login")!==decoded.sub) {
          var params = {
            TableName: "UsersTable",
            Item: {"UserID":decoded.sub, "FullName":decoded.name, "Email":decoded.email, "RewardP":0, "RewardE":0, "RewardW":0, "RewardS":0, "RewardC":0, "TotalRewards":0, "MasterclassesPurchased":[], "gigsApplications":[], "SocialLearningVideosUploaded":[], "SocialLearningBlogsUploaded":[], "SocialLearningVideosWatched": [], "SocialLearningBlogsRead": [], "VideosSearchHistory": [], "BlogsSearchHistory": [], "SkillsPossessed": [], "SkillsWantToAcquire": [], "ReferralCode": decoded.email.split("@")[0], "ReferredBy": "", "SkillsAcquiredMastersessions": [], "SkillsAcquiredGigs": [], "SkillsAcquiredVideos": [], "SkillsAcquiredBlogs": [], "GigsSearchHistory": []}
          }
          docClient.put(params, function (err, data) {
            if (err) {
              console.log('Error', err)
            }
            else {
              console.log(data);
              localStorage.setItem("login", decoded.sub);
            }
          })
        }
      }
      else {
        setUser(user);
      }
    } 
    catch (error) {
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
              <Route exact path="/login">
                <LoginPage auth={authProps} />
              </Route>
              <Route exact path="/forgotpassword">
                <ForgotPasswordPage/>
              </Route>
              <Route exact path="/changepassword">
                <ChangePasswordPage/>
              </Route>
              <Route exact path="/TheNextGigCommunity">
                <Community auth={authProps} />
              </Route>
              <Route exact path="/register">
                <RegisterPage />
              </Route>
              <Route exact path="/SocialLearning">
                <SocialLearningPage auth={authProps}/>
              </Route>
              <ProtectedRoute exact path="/profile" auth={authProps}>
                <ProfilePage auth={authProps}/>
              </ProtectedRoute>
              <Route exact path="/company/:id">
                <CompanyPage />
              </Route>
              <Route exact path="/expert/:id">
                <ExpertPage />
              </Route>
              <Route exact path="/expert">
                <Page2 />
              </Route>
              <Route exact path="/ExperientialLearning/:id" auth={authProps}>
                <GigsDetails auth={authProps.user}/>
              </Route>
              <Route exact path="/ExperientialLearning" auth={authProps}>
                <GigsPage auth={authProps.user}/>
              </Route>
              <Route exact path="/TNGoriginals/:id">
                <MasterClassDetails auth={authProps.user}/>
              </Route>
              <Route exact path="/TNGoriginals">
                <MasterClassPage />
              </Route>
              <Route exact path="/NotALearner">
                <NotALearnerPage />
              </Route>
              <Route exact path="/AboutUs">
                <AboutUs />
              </Route>
              <Route exact path="/">
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
