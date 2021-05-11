import styled, { css } from "styled-components";

const googleSignIn_Style = css`
  background-color: #4285f4;
  color: white;
  border: none;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;
const normal_Style = css`
  background-color: black;
  color: white;
  border: none;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const inverted_Style = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`

const getStyle=props=>{
    if(props.isGoogleSignIn) return googleSignIn_Style ;
    return props.inverted ? inverted_Style : normal_Style
}


export const Styled_Button = styled.button`
  text-transform: uppercase;
  padding: 0 35px 0 35px;
  height: 50px;
  font-family: "Open Sans Condensed";
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
  line-height: 50px;
  letter-spacing: 0.5px;
  min-width: 165px;
  width: auto;
  display: flex;
  justify-content: center;

  
  ${getStyle}
`;