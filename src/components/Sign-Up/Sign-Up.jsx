import React from "react";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import FormInput from "../Form-Input/Form-Input";
import CustomButton from "../Custom-Button/Custom-Button";
import { SignUpContainer, TitleContainer } from "./Sign-Up-styles";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      alert(error.message);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <SignUpContainer>
        <TitleContainer>I do not have an account</TitleContainer>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit} className='sign-up-form'>
          <FormInput
            handleChange={this.handleChange}
            name='displayName'
            type='text'
            value={displayName}
            label='Name'
            required
          />
          <FormInput
            handleChange={this.handleChange}
            name='email'
            type='email'
            value={email}
            label='Email'
            required
          />
          <FormInput
            handleChange={this.handleChange}
            name='password'
            type='password'
            value={password}
            label='Password'
            required
          />
          <FormInput
            handleChange={this.handleChange}
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
  }
}

export default SignUp;
