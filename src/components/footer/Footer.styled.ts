import { NavLink } from 'react-router-dom';
import styled from "styled-components";

export const FooterWrapper = styled.footer`
    margin:auto;
    max-width: ${props => props.theme.breakpoints.tablet};
`;

export const FooterGrid = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

    h5{
        font-family: Nunito Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 27px;
        margin:15px 10px;
    }

    a{
        margin:10px;
    }

    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
        grid-template-columns: auto auto auto;
        grid-template-areas: 
            "a a b"
            "c d e";
    }
`;

export const FooterItem = styled(NavLink)`
    font-family: Nunito Sans;
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 22px;
            margin:10px;
            transition-duration: .2s;

            color: ${props => props.theme.colors.gray};
            text-decoration:none;

            :hover {
                color: ${props => props.theme.colors.black};
                font-weight: bolder;
            }
`;

export const FooterSection = styled.div`
        max-width: 173px;
        display:flex;
        flex-direction: column;
        box-sizing: border-box;
`;

export const Footer_SocialMedia = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top:10px;

    svg {
        path{
            fill:red;
        }
    }
`;

export const Rights = styled.p`
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;

    width:100%;
    text-align:center;
    
    margin-top:58px;

    color: ${props => props.theme.colors.gray};
`;