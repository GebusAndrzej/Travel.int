import styled, { css } from "styled-components";
import bannerimg from "../../../../assets/images/whyusimg.png"
import bgPoints from "../../../../assets/images/bgPoints.png"

export const WhyUsWrapper = styled.div`
    width:1100px;
    min-height:493px;
    margin:auto;

    position: relative;
    margin-bottom:134px;
    margin-top:183px;
    
    display:grid;
    grid-template-columns: 1fr 1fr;

    @media(max-width: ${props => props.theme.breakpoints.tablet}) {
        grid-template-columns: 1fr;
        width:100%;
    }
`



export const BannerTextbox = styled.div`
    padding:10px;
    position: relative;
    span{
        color:#3075C6;
    }  
    h2{
        font-family: Nunito Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 42px;
        line-height: 57px;
    }
    p{
        width:80%;
        font-family: Nunito Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 33px;

        /* Grey */

        color: #AEAEAE;
    }
    @media(max-width: ${props => props.theme.breakpoints.tablet}) {
        h2{
            text-align:center;
        }
        p{
            text-align:center;
            margin:auto;
            width:90%;
        }
    }

    :before{
        content:'';
        position: absolute;
        left:-20px;
        bottom:0;
        width: min(605px, 100vw);
        height: 590px;
        background: url(${bgPoints});
        z-index:-1;
        overflow: clip;
    }
`;

export const ImageBox = styled.div`
    background: url(${bannerimg});
    background-repeat: no-repeat;
    background-position-x: center;
    position: relative;
    min-height: 493px;
    /* max-width: 90vw; */
`;

export const BannerPopup = styled.div<{ variant: "1" | "2" | "3" }>`
    position: absolute;
    
    width: 182px;
    height: 81px;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(25px);
    border-radius: 25px;

    ${(props) => props.variant == "1" && css`
        right:20px;
        bottom:295px;
        border-radius: 5px 25px 5px 100px;
    `}
    ${(props) => props.variant == "2" && css`
        left:30px;
        bottom:165px;
        border-radius: 25px 5px 100px 5px;
    `}
    ${(props) => props.variant == "3" && css`
        right:20px;
        bottom:-20px;
        border-radius: 5px 25px 5px 100px;
    `}
`;

export const PopupText = styled.div<{ variant: "left" | "right" }>`
    padding:15px;
    display:grid;
    grid-template-columns: 36px 1fr;
    grid-template-rows: 33px 20px;
    grid-template-areas: 
        "icon number"
        "space desc";
    column-gap: 20px;

    ${(props) => props.variant == "right" && css`
        float:right;
    `}
    ${(props) => props.variant == "left" && css`
        float:left;
    `}

    h6{
        margin:0;
        grid-area: number;
        font-family: Nunito Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 33px;
    }

     p{
        margin:0;
        grid-area: desc;
        font-family: Nunito Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 16px;

        color: #5F5F5F;
     }
`;

export const IconBg = styled.div`
    width:30px;
    height:30px;
    background: rgba(66, 0, 255, 0.05);
    border-radius: 5px;
    grid-area: icon;

    display: flex;
    align-items: center;
    justify-content: center;
`;