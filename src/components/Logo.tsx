import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';

interface Props {
    size?: string;
}

const Logo_Styled = styled(NavLink) <{ size?: string }>`
    text-decoration:none;
    font-family: "Nunito Sans";
    font-weight: 900;
    font-size: ${props => props.size ?? "24px"};
    /* line-height: 33px; */

    color: ${props => props.theme.colors.main};

    :after{
        color: ${props => props.theme.colors.black};
        content:".int"
    }
`;


function Logo(props: Props): JSX.Element {
    return (
        <Logo_Styled to="/" size={props.size}>
            Travel
        </Logo_Styled>
    )
}

export default Logo
