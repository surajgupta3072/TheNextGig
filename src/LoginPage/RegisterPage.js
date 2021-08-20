import Auth from "@aws-amplify/auth";
import { useState } from "react";
import { Button } from "react-bootstrap";

function RegisterPage() {
  const [name, setName] = useState("Harsh Lohia");
  const [password, setPassword] = useState("harsh1");
  const [email, setEmail] = useState("harsh.lohia11@gmail.com");
  const [phone_number, setPhoneNumber] = useState("+919831030617");
  const [username, setUserName] = useState(email);

  async function handleSubmit() {
    try {
      const signUpResponse = await Auth.signUp({
        username,
        password,
        phone_number,
        attributes: {
          email,
          name,
        },
      });
      console.log(signUpResponse);
    } 
    catch (error) {
      console.log(error);
    }
  }
  
  return (
  <div>
    <Button onClick={handleSubmit}>Register</Button>
  </div>
  )
}

export default RegisterPage;
