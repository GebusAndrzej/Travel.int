import styled, { css } from "styled-components";

export const Nav = styled.header`
    height:36px;
    margin:45px 60px;
    /* max-width: ${props => props.theme.breakpoints.tablet}; */
    display:grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-areas: "logo menu login";
    align-items: center;
`;

export const Menu = styled.div`
    display:flex;
    justify-content: space-evenly;
    align-items: center;

    a{
        font-family: Nunito Sans;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 25px;
        text-decoration:none;
        transition-duration: .3s;

        color: ${props => props.theme.colors.gray};

        :hover{
            color: ${props => props.theme.colors.black};
            font-weight: bolder;
        }
    }

`;

export const NavBar_ButtonBox = styled.div`
    display:flex;
    justify-content: flex-end;
    align-items: center;
    gap:16px;
`;

export const NavBar_Button = styled.a<{ variant: "primary" | "transparent" }>`
    padding:11px 17px;
    border-radius:5px;
    font-weight: bolder;

    ${props => props.variant == "primary" && css`
        color:white;
        background-color: ${props => props.theme.colors.main};
    `}

    ${props => props.variant == "transparent" && css`
        color: ${props => props.theme.colors.main};
        background-color: transparent;
    `}

`;