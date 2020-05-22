import React from "react";

import SignIn from "../../components/Sign-In/Sign-In";
import SignUp from "../../components/Sign-Up/Sign-Up";
import { SignInPageContainer } from "./SignInPage-styles";

const SignInPage = () => (
  <SignInPageContainer>
    <SignIn />
    <SignUp />
  </SignInPageContainer>
);

export default SignInPage;
