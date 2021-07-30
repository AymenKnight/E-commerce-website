import React from 'react'
import SignIn from '../../components/signin/SignIn'
import SignUp from '../../components/signUp/SignUp'
import "./SignPage.styles.scss"

export default function SignPage() {
    return (
        <div  className="signpage" >
            <SignIn />
            <SignUp/>
        </div>
    )
}
