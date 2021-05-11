import React from 'react'
import  Directory  from '../../components/directory/Directory';
import  "./homepage.style.scss"; 
import {HomePageContainer}  from "./homepage.styles"


const HomePage =()=>{
    return (
      <HomePageContainer>
        <Directory />
      </HomePageContainer>
    );
}

export default HomePage ;