import styled from "styled-components";
import bg from '../../../../assets/images/bannerimg.png'

export const LandingBanner = styled.div`
    width:1100px;
    height:514px;
    margin:auto;
    border-radius: 72px;
    position: relative;
    margin-bottom:125px;
    
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.15);
    
    display:flex;
    flex-direction: column;
    align-items: center;

    :before{
        content:'';
        z-index:-1;
        position: absolute;
        width:100%;
        height:100%;
        border-radius: 72px;
        background: linear-gradient(180deg, rgba(255, 190, 190, 0.4) 0%, rgba(255, 169, 169, 0) 73.35%), #B5D2FF;
    }

    :after{
        content:'';
        z-index:-1;
        position: absolute;
        width:100%;
        height:100%;
        border-radius: 72px;
        background-image: url(${bg});
        background-position: bottom;
        background-repeat: no-repeat;
    }

    >p {
        margin:0;
        margin-top:23px;
        font-family: Nunito Sans;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 25px;

        color: ${props => props.theme.colors.main};

    }

    >h1{
        margin:0;
        font-family: Nunito Sans;
        font-style: normal;
        font-weight: 900;
        font-size: 56px;
        line-height: 76px;

        /* Black main */

        color: ${props => props.theme.colors.black};
    }

`;
export const SearchBanner = styled.div`
    width: 820px;
    height: 125px;

    position: absolute;
    bottom:0;
    left:50%;
    transform: translate(-50%, 50%);

    display:flex;
    align-items:center;
    justify-content: center;

    background: ${props => props.theme.colors.white};
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(32px);

    border-radius: 32px;
    gap:25px;
    padding: 20px;
    box-sizing:border-box;
`;

export const SearchBarSeparator = styled.div`
    height: 66px;
    border: none;
    border-right: 1px solid ${props => props.theme.colors.gray};

`;

export const SearchItem = styled.div`
        display:grid;
        align-items: center;
        grid-template-columns: 25px 1fr;
        grid-template-areas: 
            "img title"
            "desc desc";
        gap:10px;
        min-width:175px;

        h4{
            margin:0;
            font-family: Nunito Sans;
            font-style: normal;
            font-weight: 600;
            font-size: 24px;
            line-height: 33px;

            color: ${props => props.theme.colors.black};   
        }

        .desc{
            grid-area: desc;
            font-family: Nunito Sans;
            font-style: normal;
            font-weight: 5  00;
            font-size: 12px;
            line-height: 16px;
            outline: none;
            border:none;
            color:${props => props.theme.colors.gray};
            
            text-align:center;
            display:flex;
            align-items: center;
            justify-content: center;
            gap:10px;

            span{
                min-width: 63px;
            }
            button{
                outline:none;
                border:none;
                color:${props => props.theme.colors.main};
                background: transparent;
                font-size:220%;
                font-weight: lighter;
                cursor: pointer;

            }

            ::placeholder {
                color:${props => props.theme.colors.gray};
                font-family: Nunito Sans;
                font-style: normal;
                font-weight: 5  00;
                font-size: 12px;
                line-height: 16px;

            }
        }
`;

export const SearchItemIcon = styled.div`
            width: 25px;
            height: 25px;

            display:flex; 
            align-items: center;
            justify-content: center;

            background: #D6DFFF;
            border-radius: 50%;

            svg{
                width:15px;
                height:15px;
            }
`;

export const BannerSearchButton = styled.button`
    padding: 22px 36px;
    outline:none;
    border:none;
    background:${props => props.theme.colors.main};
    cursor: pointer;
    border-radius: 10px;
`;
