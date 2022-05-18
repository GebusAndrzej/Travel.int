import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const LocationWrapper = styled(NavLink)`
    position:relative;

    background: #FFFFFF;
    box-shadow: 0px 4px 45px -15px rgba(0, 0, 0, 0.15);
    border-radius: 25px;

    min-height: 343px;

    display:grid;
    grid-template-rows: 4fr 1fr 1fr 1fr;

    padding-bottom: 10px;
    cursor:pointer;

    text-decoration: none;

    ::after{
        content: 'Book Trip Now ->';
        color:white;
        z-index: 99;

        display:flex;
        justify-content:center;
        align-items:center;

        position:absolute;

        width:100%;
        height:0px;
        transition-duration: .2s;

        top: calc(100% - 20px);
        background: white;
        border-radius: 0 0 20px 20px;
        
        
        box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.05);
    }

    :hover:after {
        background: #3075C6;
        height:50px;
    }

    figure{
        box-sizing: border-box;
        margin:auto;
        padding:auto;
        width:100%;

        img{
            max-width:100%;
            margin:2px;
        }
    }
`;

export const LocTitle = styled.div`
    padding: 0px 20px;

    display:flex;
    align-items:center;

    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;

    color: #313131;
`

export const LocDescription = styled.div`
    padding: 0px 20px;
    
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;

    color: #AEAEAE;
`

export const LocMisc = styled.div`
    padding: 0px 20px;

    display:flex;
    align-items:center;
    
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;

    color: #AEAEAE;
    
    span {
        display:flex;
        justify-content:center;
        gap:2px;

        span {
            font-style: normal;
            font-weight: normal;
            font-size: 10px;
            line-height: 14px;
            display:flex;
            justify-content:center;
        }
    }

    span:last-child{
        margin-left:auto;
    }
`
