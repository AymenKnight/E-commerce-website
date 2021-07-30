import React from 'react'
import { SpinnerContainer, SpinnerOverlay } from './With_Spinner.styles'

export  const With_Spinner=WrappedComponent=>({isLoading,...props})=> {
    return  isLoading ?  (
        <SpinnerOverlay >
            <SpinnerContainer/>
        </SpinnerOverlay>
    )
    :
    <WrappedComponent  {...props} />
}
