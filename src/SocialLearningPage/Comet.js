import { CometChat } from "@cometchat-pro/chat";
import { CometChatUI } from "../cometchat-pro-react-ui-kit/CometChatWorkspace/src/";
import "./rough.css"
function Comet(props) {
  if(props.props.isAuthenticated===true) {
    const appID = "1978771690ebf1c6";
    const region = "us";
    const authKey = "aaeb53bed00ebcebacf3694c9ea88712d49603a1";
    const uid = props.props.user.username;
    const appSetting = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(region).build();
      CometChat.init(appID, appSetting).then(() => {
        CometChat.login(uid, authKey).then(user => {console.log("Login Successful:", user)}).catch(error => {
            console.log("Login failed with exception:", error);
            var uname = props.props.user.attributes.name;
            var user = new CometChat.User(uid);
            user.setName(uname);
            CometChat.createUser(user, authKey).then(user => {
                console.log("User Created", user);
                window.location.reload();
              }).catch(error => {
                console.log("error", error);
              });
          });
        }).catch((error)=> {console.log("Initialization failed with error:", error)});
  }
  else {
    /* window.location.href = "/login"; */
  } 
  return (
    (props.props.isAuthenticated===true) &&
      <div style={{margin:"2%", border:"2px solid rgb(242, 108, 79)",height:"600px"}}>
        <CometChatUI />
    </div>)
 }       
export default Comet;