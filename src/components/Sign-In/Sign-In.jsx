import React, { useState } from "react";
import { connect } from "react-redux";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user-actions";

import CustomButton from "../Custom-Button/Custom-Button";
import FormInput from "../Form-Input/Form-Input";
import {
  SignInContainer,
  ButtonsContainer,
  TitleContainer,
} from "./Sign-In-styles";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    emailSignInStart(email, password);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInContainer>
      <TitleContainer>Already have an account</TitleContainer>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          onChange={handleChange}
          name='email'
          type='email'
          value={email}
          label='Email'
          required
        />
        <FormInput
          onChange={handleChange}
          name='password'
          type='password'
          value={password}
          label='Password'
          required
        />
        <ButtonsContainer>
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton
            type='button'
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign In With Google
          </CustomButton>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
