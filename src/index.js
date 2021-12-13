import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
// import 'react-quill/dist/quill.snow.css';
import Amplify from "aws-amplify";
import config from "./config.json";
import 'font-awesome/css/font-awesome.min.css';

const isLocalhost = Boolean(
  window.location.hostname === "localhost" ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === "[::1]" ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

// Assuming you have two redirect URIs, and the first is for localhost and second is for production
const [localRedirectSignIn, productionRedirectSignIn] = [localStorage.getItem("lastURL"), localStorage.getItem("lastURL")]
const [localRedirectSignOut, productionRedirectSignOut] = ["http://localhost:3000/", "https://www.thenextgig.net/"]

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID,
  },
  oauth: {
    domain: "thenextgig.auth.ap-south-1.amazoncognito.com",
    scope: ["email", "profile", "openid"],
    redirectSignIn: isLocalhost ? localRedirectSignIn : productionRedirectSignIn,
    redirectSignOut: isLocalhost ? localRedirectSignOut : productionRedirectSignOut,
    responseType: "token", // or 'token', note that REFRESH token will only be generated when the responseType is code
  }
});

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <h1 style={{textAlign:"center", marginTop:"15%"}}>We're Upgrading!</h1>
    <h2 style={{textAlign:"center"}}>Hang in there, we'll be back super soon!</h2>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
