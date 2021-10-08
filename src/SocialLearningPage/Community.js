import { CometChat } from "@cometchat-pro/chat";
import { CometChatUI } from "./../cometchat-pro-react-ui-kit/CometChatWorkspace/src";

function Community(props) {
  if(props.redirlog===false) {
    const appID = "195321db052f943d";
    const region = "us";
    const authKey = "73fe83c3cc547f4c2f780760069bdd064627534c";
    const uid = props.curruser.username;
    const appSetting = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(region).build();
      CometChat.init(appID, appSetting).then(() => {
        CometChat.login(uid, authKey).then(user => {console.log("Login Successful:", user)}).catch(error => {
            console.log("Login failed with exception:", error);
            var uname = props.curruser.attributes.name;
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
    window.location.href = "/login"
  }

    return (
      (props.redirlog===false) &&
      <div style={{marginTop:"7%"}}>
        <CometChatUI/>
      </div>
    )
}

export default Community;