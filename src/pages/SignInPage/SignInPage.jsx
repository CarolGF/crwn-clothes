import React from "react";

import SignIn from "../../components/Sign-In/Sign-In";
import SignUp from "../../components/Sign-Up/Sign-Up";
import "./SignInPage.scss";

const SignInPage = () => {
  return (
    <div className='sign-in-page'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInPage;
