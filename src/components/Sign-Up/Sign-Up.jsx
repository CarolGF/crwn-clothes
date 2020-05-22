import React, { useState } from "react";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user-actions";

import FormInput from "../Form-Input/Form-Input";
import CustomButton from "../Custom-Button/Custom-Button";
import { SignUpContainer, TitleContainer } from "./Sign-Up-styles";

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    signUpStart({ displayName, email, password });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignUpContainer>
      <TitleContainer>I do not have an account</TitleContainer>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit} className='sign-up-form'>
        <FormInput
          onChange={handleChange}
          name='displayName'
          type='text'
          value={displayName}
          label='Name'
          required
        />
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
        <FormInput
          onChange={handleChange}
          name='confirmPassword'
          type='password'
          value={confirmPassword}
          label='Confirm Password'
          required
        />
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
