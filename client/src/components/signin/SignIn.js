/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import { useState } from 'react'
import Custom_Button from '../custom_Button/Custom_Button'
import Form_Input from '../form_input/Form_Input'
import "./SignIn.styles.scss"
import { connect } from 'react-redux'
import { emailSignInStart, googleSignInStart } from '../../redux/user/user.actions'

function SignIn({ googleSignInStart, emailSignInStart }) {
  const [state, setstate] = useState({
    email: "",
    password: "",
  });

  const hundleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = state;
    try {
      emailSignInStart(email,password)
      setstate({ email: "", password: "" });
    } catch (error) {}
  };
  const hundleChange = (e) => {
    const { name, value } = e.target;
    setstate((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <div className="sign_In">
      <h1 className="title"> I already have a account </h1>
      <span className="sign_Span"> Sign in with your email and password </span>
      <form className="form" onSubmit={hundleSubmit}>
        <Form_Input
          label="Email"
          name="email"
          value={state.email}
          type="email"
          required
          hundleChange={hundleChange}
        />
        <Form_Input
          label="Password"
          name="password"
          value={state.password}
          type="password"
          required
          hundleChange={hundleChange}
        />
        <div className="buttons_Contianer">
          <Custom_Button type="submit"> Sign In </Custom_Button>
          <Custom_Button
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign In With Google
          </Custom_Button>
        </div>
      </form>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email,password) => dispatch(emailSignInStart({email,password})),
});

export default connect(null,mapDispatchToProps)(SignIn)
