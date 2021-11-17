import styled from "styled-components";

export const CategoriesWrapper = styled.div`
    margin-top:30px;
    max-width: ${props => props.theme.breakpoints.tablet};
    margin:auto;
    background: #F9FBFF;
    border-radius: 30px;
    padding: 70px 50px;
    display:flex;
    flex-direction: column;
`;

export const CategoriesHeader = styled.div`
    display:grid;
    grid-template-columns: 45px 1fr 1fr;
    grid-template-rows: 1fr 44px;
    margin-bottom: 50px;

    div:first-child{
        display:flex;
        justify-content: center;
        align-items: center;
        text-align:center;
        font-weight: bold;
        font-size: 1.6rem;
    }
`;

export const Title = styled.span`
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 44px;

    color: #313131;
`;

export const Desc = styled.p`
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;

    color: #AEAEAE;
`;

export const CategoryImages = styled.div`

`;