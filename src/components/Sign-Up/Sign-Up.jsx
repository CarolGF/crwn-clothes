import React from "react";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user-actions";

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

    const { signUpStart } = this.props;
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    signUpStart({ displayName, email, password });
  };

  handleChange = (event) => {
    const { name, value } = event.target;

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
            onChange={this.handleChange}
            name='displayName'
            type='text'
            value={displayName}
            label='Name'
            required
          />
          <FormInput
            onChange={this.handleChange}
            name='email'
            type='email'
            value={email}
            label='Email'
            required
          />
          <FormInput
            onChange={this.handleChange}
            name='password'
            type='password'
            value={password}
            label='Password'
            required
          />
          <FormInput
            onChange={this.handleChange}
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

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
