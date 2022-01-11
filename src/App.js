import Header from "./Header/Header";
import HomePage from "./HomePage/HomePage";
import GigsPage from "./GigsPage/GigsPage";
import MasterClassPage from "./MasterClassPage/MasterClassPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GigsDetails from "./GigsPage/GigsDetails";
import MasterClassDetails from "./MasterClassPage/MasterClassDetails";
import Page2 from "./ExpertPage/Page2/Page2";
import ExpertPage from "./ExpertPage/ExpertPage";
// import CompanyPage from "./CompanyPage/ComapnyPage";
import ProfilePage from "./ProfilePage/ProfilePage";
import LoginPage from "./AuthPage/LoginPage";
import RegisterPage from "./AuthPage/RegisterPage";
import { useEffect, useState } from "react";
import Auth from "@aws-amplify/auth";
import ProtectedRoute from "./GuardedRoute";
import SocialLearningPage from "./SocialLearningPage/SocialLearningPage";
// import SocialBlogPage from "./SocialLearningPage/SocialBlogPage";
import jwt_decode from "jwt-decode";
import docClient from './GigsPage/GigsAWS';
import ForgotPasswordPage from "./AuthPage/ForgotPasswordPage";
import ChangePasswordPage from "./AuthPage/ChangePasswordPage";
import NotALearnerPage from "./NotALearnerPage/NotALearnerPage";
import AboutUs from "./AboutUsPage/AboutUs";
import Legal from "./LegalPage/Legal";
import Privacy from "./LegalPage/Privacy";
import TC from "./LegalPage/TC";
import RedirectPage from './RedirectPage';
import "./App.css";
import LearnCoins from "./LearnCoins/LearnCoins";
import ReferralPage from "./AuthPage/ReferralPage";
import Follow from "./Follow/Follow";
import SkillsVideopage from "./Skills&Videopage/SkillsVideopage";
import PastHistoryPage from "./PastHistoryPage/PastHistoryPage";
// import Comet from "../src/SocialLearningPage/Comet";

function App() {
  const endpoint = "https://yruyprez2g.execute-api.ap-south-1.amazonaws.com/default/TNGMail";
  const [user, setUser] = useState(null);
  const [isAuthenticating, setAuthenticatingStatus] = useState(true);
  const [isAuthenticated, setAuthStatus] = useState(false);

  useEffect(async () => {
    try {
      await Auth.currentSession();
      setAuthStatus(true);
      const user = await Auth.currentAuthenticatedUser();
      // console.log(window.location.href.includes("/Video/"));
      // if (window.location.href.includes("/Video/") != true) {
      //   localStorage.setItem('LoginlastURL', window.location.href);
      // }
      if (user.username.includes("google")) {
        var decoded = jwt_decode(user.signInUserSession.idToken.jwtToken);
        let guser = {
          "attributes": { "name": decoded.name, "email": decoded.email },
          "username": decoded.sub
        };
        setUser(guser);
        var params = {
          TableName: "UsersTable",
          Key: { "UserID": decoded.sub },
          ProjectionExpression: "Gflag",
        };
        docClient.get(params, function (err, data) {
          if (data.Item === undefined) {
            var paramss = {
              TableName: "UsersTable",
              Item: { "UserID": decoded.sub, "FullName": decoded.name, "Email": decoded.email, "RewardP": 0, "RewardE": 0, "RewardW": 0, "RewardS": 0, "RewardC": 0, "TotalRewards": 180, "MasterclassesPurchased": [], "gigsApplications": [], "SocialLearningVideosUploaded": [], "SocialLearningBlogsUploaded": [], "SocialLearningVideosWatched": [], "SocialLearningBlogsRead": [], "VideosSearchHistory": [], "BlogsSearchHistory": [], "SkillsPossessed": [], "SkillsWantToAcquire": [], "ReferralCode": decoded.email.split("@")[0] + String(Math.floor((Math.random() * 1000) + 1)), "ReferredBy": "", "SkillsAcquiredMastersessions": [], "SkillsAcquiredGigs": [], "SkillsAcquiredVideos": [], "SkillsAcquiredBlogs": [], "GigsSearchHistory": [], "Gflag": true, "MasterclassesLiked": [], "SocialLearningVideosLiked": [] }
            }
            docClient.put(paramss, function (err, data) {
              if (err) {
                console.log('Error', err)
              }
              else {
                const body = JSON.stringify({
                  feedback: "",
                  feedback1: paramss.Item.FullName,
                  feedback2: "",
                  title: "You're in! Welcome to TNG 🥳",
                  user: paramss.Item.Email
                });
                const requestOptions = {
                  method: "POST",
                  body,
                };
                fetch(endpoint, requestOptions)
                  .then((response) => {
                    if (!response.ok) {
                      throw new Error("Error in fetch");
                    }
                    else {
                      window.location.href = "/Referral";
                    }
                  })
                  .catch((error) => {
                    console.error("Failed to send feedback. Error: ", error);
                  });
              }
            });
          }
        });
      }
      else {
        setUser(user);
      }
    }
    catch (error) {
      if (window.location.href != "http://localhost:3000/login" && window.location.href != "http://localhost:3000/register" && window.location.href != "http://localhost:3000/Referral" && window.location.href != "https://www.thenextgig.net/login" && window.location.href != "https://www.thenextgig.net/register" && window.location.href != "https://www.thenextgig.net/Referral")
        localStorage.setItem('lastURL', window.location.href);
      if (window.location.href.includes("/SocialLearning/CometChat/") || window.location.href.includes("/SocialLearning/Video/") || window.location.href.includes("http://localhost:3000/Video/") || window.location.href.includes("https://www.thenextgig.net/Video/") || (window.location.href.split("/")[3] !== undefined && window.location.href.split("/")[3].length === 16) || (window.location.href.split("/")[4] !== undefined && window.location.href.split("/")[4].includes("_"))) {
        localStorage.setItem('lastLastURL', window.location.href);
        localStorage.setItem('lastURL', "https://www.thenextgig.net/Redirecting");
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
    <div onContextMenu={e => e.preventDefault()}>
      {!isAuthenticating && (
        <div>
          <Header auth={authProps} />
          <Router>
            <Switch>
              <Route exact path="/login">
                <LoginPage auth={authProps} />
              </Route>
              <Route exact path="/forgotpassword">
                <ForgotPasswordPage />
              </Route>
              <Route exact path="/changepassword/:emailid">
                <ChangePasswordPage />
              </Route>
              <Route exact path="/register">
                <RegisterPage auth={authProps} />
              </Route>
              <ProtectedRoute exact path="/follow" auth={authProps}>
                <Follow auth={authProps} />
              </ProtectedRoute>
              <Route exact path="/SkillsVideo">
                <SkillsVideopage auth={authProps} />
              </Route>
              <Route exact path="/BiteSizedVideos">
                <SocialLearningPage auth={authProps} />
              </Route>
              {/* <Route exact path="/SocialLearning/Blog/:id">
                <SocialBlogPage auth={authProps}/>
              </Route> */}
              <ProtectedRoute exact path="/profile" auth={authProps}>
                <ProfilePage auth={authProps} />
              </ProtectedRoute>
              {/* <Route exact path="/company/:id">
                <CompanyPage />
              </Route> */}
              <Route exact path="/creator/:id">
                <ExpertPage auth={authProps} />
              </Route>
              <Route exact path="/creators">
                <Page2 />
              </Route>
              <ProtectedRoute auth={authProps} exact path="/ExperientialLearning/:id">
                <GigsDetails auth={authProps.user} />
              </ProtectedRoute>
              <ProtectedRoute exact path="/ExperientialLearning" auth={authProps}>
                <GigsPage auth={authProps.user} />
              </ProtectedRoute>
              <Route exact path="/TNGoriginals/:id">
                <MasterClassDetails auth={authProps} />
              </Route>
              <Route exact path="/TNGoriginals">
                <MasterClassPage />
              </Route>
              <Route exact path="/NotALearner">
                <NotALearnerPage />
              </Route>
              <Route exact path="/LearnCoins">
                <LearnCoins />
              </Route>
              <Route exact path="/AboutUs">
                <AboutUs />
              </Route>
              <Route exact path="/Legal">
                <Legal />
              </Route>
              <Route exact path="/Privacy">
                <Privacy />
              </Route>
              <Route exact path="/terms">
                <TC />
              </Route>
              <Route exact path="/Redirecting">
                <RedirectPage />
              </Route>
              <Route exact path="/MyActivity">
                <PastHistoryPage />
              </Route>
              <ProtectedRoute exact path="/Referral" auth={authProps}>
                <ReferralPage auth={authProps.user} />
              </ProtectedRoute>
              {/* <Route exact path="/SocialLearning/Community">
                <Comet props={authProps} />
              </Route> */}
              <Route exact path="/">
                <HomePage auth={authProps} />
              </Route>
              <Route exact path="/:id">
                <HomePage auth={authProps} />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
