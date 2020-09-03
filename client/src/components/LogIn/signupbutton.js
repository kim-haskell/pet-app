import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const SignUpButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Sign Up</button>;
};

export default SignUpButton;