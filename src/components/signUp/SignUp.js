/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import { useState } from 'react'
import { auth ,createUserProfileDocument} from '../../firebase/firebase.utils'
import Custom_Button from '../custom_Button/Custom_Button'
import Form_Input from '../form_input/Form_Input'
import "./SignUp.styles.scss"


export default function SignUp() {
    const [state, setstate] = useState({
        displayName :"",
        email : "",
        password :"",
        confirmPassword:"",
    })

    const hundleSubmit= async (e)=>{
        e.preventDefault();
        const {displayName,email,password,confirmPassword}=state
        if(password !== confirmPassword){
              alert("Passwords don't match!");
              return;
        }
        try {
            const {user}= await auth.createUserWithEmailAndPassword(email,password);
             await createUserProfileDocument(user,{displayName});
             setstate({
               displayName: "",
               email: "",
               password: "",
               confirmPassword: "",
             });
        } catch (error) {
             console.log("error ! ",error.message);
        }
    }
    const hundleChange=(e)=>{
        const {name,value}=e.target;
      setstate(prev=>{
          return {
              ...prev,[name]:value
          }
      })
    }

    return (
      <div className="signUP">
        <h1 className="title"> I don't have an account </h1>
        <span className="sign_Span">
          {" "}
          Sign Up with your Email and Password{" "}
        </span>
        <form className="form" onSubmit={hundleSubmit}>
          <Form_Input
            label="Name"
            name="displayName"
            value={state.displayName}
            type="text"
            required
            hundleChange={hundleChange}
          />
          <Form_Input
            label="Email"
            name="email"
            value={state.email}
            type="email"
            required
            hundleChange={hundleChange}
          />
          <Form_Input
            label="Paswword"
            name="password"
            value={state.password}
            type="password"
            required
            hundleChange={hundleChange}
          />
          <Form_Input
            label="Confirm Password"
            name="confirmPassword"
            value={state.confirmPassword}
            type="password"
            required
            hundleChange={hundleChange}
          />
          <Custom_Button type="submit"> SIGN UP </Custom_Button>
        </form>
      </div>
    );
}
