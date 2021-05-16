import styled from "styled-components";

export const SpinnerOverlay =styled.div`
width :100%;
height: 60vh ;
display:flex;
justify-content:center;
align-items:center;
`

export const SpinnerContainer = styled.div`
  width: 50px;
  height: 50px;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #636767;
  animation: spinnerAnimation 1s ease-in-out infinite;
  -webkit-animation: spinnerAnimation 1s ease-in-out infinite;

  @keyframes spinnerAnimation {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;