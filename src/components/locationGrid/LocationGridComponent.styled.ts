import styled from "styled-components";

export const LocationGrid = styled.div`
    margin:auto;
    max-width: ${props => props.theme.breakpoints.tablet};
    min-height:394px;
    gap: 40px;

    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    margin-bottom: 70px;


    @media (max-width: ${props => props.theme.breakpoints.tablet}){
        grid-template-columns: 1fr 1fr 1fr;
        gap: 30px;
    }
    @media (max-width: ${props => props.theme.breakpoints.mobile}){
        grid-template-columns: 1fr 1fr;
        gap: 10px;
    }
`;