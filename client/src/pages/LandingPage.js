import React from "react";
import LandingJumbotron from "../components/LandingJumbotron/index";
import LoginButton from "../components/LogIn/loginbutton";
import SignUpButton from "../components/LogIn/signupbutton";
import styled from "styled-components";


const backColor = "#82464b";
const buTextColor = "#d2d6ce";
const submitColor = "RGB(49, 107, 132)";
const BackDrop = styled.article`

 {
  background-color: ${backColor}
}
.btn {
  background-color: ${submitColor} !important;
  opacity: 1;
  color: ${buTextColor};
  border-color: ${submitColor};
  align: center;
  margin: 20px;
}
h1 {
  font-family: 'Coming Soon', cursive;
}
`
function Home () {

    return (
       <> 
       <BackDrop>
       <LandingJumbotron>  
         <h1>Welcome to PetArray!</h1>
         <h3>If you have an account, please log in. If you are new to PetArray, feel free to create an account!</h3>
       </LandingJumbotron>
        <LoginButton />
        <SignUpButton />
        </BackDrop>
      </>  
    
    )
}

export default Home;