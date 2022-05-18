import styled from "styled-components";

export const DescriptionWrapper = styled.div`
    margin:auto;
    max-width: ${props => props.theme.breakpoints.tablet};
    min-height:394px;
    
    display:grid;
    grid-template-columns: 1fr 1fr;
    position:relative;
`;

export const ImagesWrapper = styled.div`
    position:relative;
    max-width: 40vw;
`;

export const Thumbnail = styled.img`
    aspect-ratio: 1/1;
    max-width: 90%;
    max-height: 90%;
`
export const Image = styled.img`
    aspect-ratio: 16/11;
`