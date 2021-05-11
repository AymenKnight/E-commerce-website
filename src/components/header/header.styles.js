import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  align-items: center;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`; 

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;


export const OptionLink = styled(Link)`
  padding: 10px 15px;
  font-weight: 600;
  cursor: pointer;
`;
