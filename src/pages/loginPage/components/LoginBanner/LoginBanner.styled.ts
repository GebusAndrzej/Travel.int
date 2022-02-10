import styled, { css } from "styled-components";

export const LoginContainer = styled.div`
    box-sizing: border-box;
    margin:auto;
    padding:0px;
    display:block;
    max-width: 640px;
    min-height:200px;
    border: 3px solid #313131;
    border-radius: 25px;
`;

export const ButtonsContainer = styled.div`
    display:flex;
`;

export const LoginButtons = styled.button<{ active: boolean, variant: "login" | "register"}>`
    height:86px;
    width:100%;
    margin:0;
    border:none;

    ${(props => props.active == true && css`
        background-color: #313131;
        color:white;
    `)}
    ${(props => props.active == false && css`
        background-color: white;
    `)}

    ${(props => props.variant == "login" && css`
        border-radius: 20px 0 25px 0;
    `)}
    ${(props => props.variant == "register" && css`
        border-radius: 0 20px 0 25px;
    `)}
`;