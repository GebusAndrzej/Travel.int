import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

export const Nav = styled.header`
    min-height:36px;
    margin:45px 60px;
    /* max-width: ${props => props.theme.breakpoints.tablet}; */
    display:grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-areas: "logo menu login";
    align-items: center;

    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
        grid-template-columns: 1fr 1fr;
        grid-template-areas: 
            "logo  login"
            "menu menu";

    }
`;

export const Menu = styled.div`
    grid-area: menu;
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
    grid-area: login;
    display:flex;
    justify-content: flex-end;
    align-items: center;
    gap:16px;
`;

export const NavBar_Button = styled(NavLink) <{ variant: "primary" | "transparent" }>`
    padding:11px 17px;
    border-radius:5px;
    text-align:center;
    font-weight: bolder;
    text-decoration:none;

    ${props => props.variant == "primary" && css`
        color:white;
        background-color: ${props => props.theme.colors.main};
    `}

    ${props => props.variant == "transparent" && css`
        color: ${props => props.theme.colors.main};
        background-color: transparent;
    `}

`;