import styled from "styled-components";

export const CategoriesWrapper = styled.div`
    margin:auto;
    margin-top:40px;
    max-width: ${props => props.theme.breakpoints.tablet};
    margin-bottom: 83px;
    background: #F9FBFF;
    border-radius: 30px;
    padding: 26px 50px;
    display:flex;
    flex-direction: column;

    .slick-arrow{
      display:none;
      /* background-color:red;
      position: absolute;
      top:-100px;
      right:0;
      width:40px;
      height:40px; */

      :before{
          font-size: 40px;
      }

    }
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
    max-width: 350px;
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;

    color: ${props => props.theme.colors.gray};
`;

export const ButtonBox = styled.div`
    display:flex;
    justify-content: flex-end;
    gap:15px;
`;

export const Arrow = styled.button`
    width:40px;
    height:40px;
    color:${props => props.theme.colors.white};
    border-radius: 50%;
    background-color:#3075C6;
    border: 2px solid #3075C6;
    font-weight: bold;
    font-size: 1.5rem;
    text-align:center;
    line-height: 35px;
    cursor: pointer;

    &.end{
        background-color:transparent;
        color: #3075C6;
    }
`;