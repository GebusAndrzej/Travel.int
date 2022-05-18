import { NavLink } from "react-router-dom";
import styled from "styled-components";
import img from '../../../../assets/svg/searchDots.svg'

export const PopularSearchWrapper = styled.div`
    max-width: ${props => props.theme.breakpoints.tablet};
    margin:auto;
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-bottom:50px;
`;

export const Title = styled.h2`
    display:block;
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 44px;
    text-align:center;
    margin-top:0;

    color: ${props => props.theme.colors.black};
    position: relative;

    ::before{
        content:'';
        position: absolute;
        right:-26px;
        width:26px;
        height:40px;
        border-radius: 10px;
        background-image:url(${img});
    }
`;

export const SearchChipsBox = styled.div`
    /* max-width:1059px; */
    display:flex;
    justify-content: center;
    column-gap: 30px;
    row-gap: 20px;
    flex-wrap: wrap;
    box-sizing:border-box;
`;

export const SearchChip = styled(NavLink)`
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 33px;
    text-decoration: none;

    color: ${props => props.theme.colors.gray};
    padding: 7px 22px;

    border: 2px solid ${props => props.theme.colors.gray};
    box-sizing: border-box;
    border-radius: 15px;

    cursor: pointer;
    transition-duration: .2s;

    :hover{
        background: ${props => props.theme.colors.gray};
        color: ${props => props.theme.colors.white};
    }
`;