import styled from "styled-components";
import img from '../../assets/images/qrboxbg.png';

export const QRWrapper = styled.div`
    margin:auto;
    max-width: ${props => props.theme.breakpoints.tablet};
    min-height:394px;
    margin-bottom: 90px;

    /* background: #C1D6EE; */
    border-radius: 35px;
    background:   url(${img});
    
    display:flex;
    flex-direction: column;
    align-items: center;
    background-size: 100% 100%;

    padding-bottom: 30px;

    @media (max-width: ${props => props.theme.breakpoints.tablet}){
        background-size: auto;
    }


    h1{
        text-align:center;
        color: ${props => props.theme.colors.black}; 

        font-family: Nunito Sans;
        font-style: normal;
        font-weight: 900;
        font-size: 56px;
        line-height: 76px;
        /* padding:50px; */
    }
`;