import styled, { css } from "styled-components";

export const LoginWrapper = styled.div`
    box-sizing: border-box;
    margin: auto;
    margin-top: 40px;
    margin-bottom: 18px;
    padding: 0px;
    max-width: 640px;
    min-height: 200px;
    border: 3px solid #313131;
    border-radius: 25px;
`;

export const ButtonsContainer = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
`;

export const LoginButtons = styled.button<{ active: boolean, variant: "login" | "register" }>`
    height: 86px;
    margin: 0;
    border: none;
    font-size: 1.4rem;
    cursor: pointer;
    

    ${(props => props.active == true && css`
        background-color: #313131;
        color: ${props => props.theme.colors.white};
    `)}
    ${(props => props.active == false && css`
        background-color: ${props => props.theme.colors.white};
    `)}

    ${(props => props.variant == "login" && css`
        border-radius: 21px 0 25px 0;
    `)}
    ${(props => props.variant == "register" && css`
        border-radius: 0 21px 0 25px;
    `)}
`;

export const LoginContainer = styled.div`
    margin: auto;
    margin-top: 40px;
    margin-bottom: 60px;
    gap: 20px;
    align-items: center;
    display: flex;
    flex-direction: column;
    width: min(100%, 250px);
`

export const LoginInput = styled.input`
    border: none;
    padding: none;
    outline: none;
    width: min(252px, 100%);
    border-bottom: 1px solid ${props => props.theme.colors.gray};
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    margin: 10px 0;

    :focus {
        border-bottom: 2px solid ${props => props.theme.colors.gray};
    }
`

export const SubmitButton = styled.button`
    border: none;
    padding: none;
    background: ${props => props.theme.colors.black};
    border-radius: 10px;
    width: min(252px, 100%);
    cursor: pointer;
    height:50px;
    color: ${props => props.theme.colors.white};
    font-size: 18px;
    margin-top:10px;
`

export const ExternalLoginContainer = styled.div`
    margin:auto;    
    display:flex;
    align-items:center;
    justify-content:center;
    gap:45px;
    margin-bottom: 90px; 
`

export const ExternalLoginButton = styled.button<{variant: "black" | "primary" }>`
    padding: none;

    border: 3px solid ${props => props.variant == "black" ? `${props.theme.colors.black}` : `${props.theme.colors.main}` };
    color: ${props => props.variant == "black" ? `${props.theme.colors.black}` : `${props.theme.colors.main}` };
    background: ${props => props.theme.colors.white};
    border-radius: 10px;

    width: min(252px, 100%);
    cursor: pointer;
    height:50px;

    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
`