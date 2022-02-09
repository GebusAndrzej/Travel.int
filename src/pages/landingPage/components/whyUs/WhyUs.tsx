import React from 'react'
import { BannerPopup, BannerTextbox, IconBg, ImageBox, PopupText, WhyUsWrapper } from './WhyUs.styled'
import { ReactComponent as SmileSVG } from "../../../../assets/svg/smile.svg"
import { ReactComponent as SendSVG } from "../../../../assets/svg/send.svg"
import { ReactComponent as FlagSVG } from "../../../../assets/svg/flag.svg"

const WhyUs = () => {
    return (
        <WhyUsWrapper>
            <ImageBox>
                <BannerPopup variant="1">
                    <PopupText variant="right">
                        <IconBg><SmileSVG /></IconBg>
                        <h6>3300+</h6>
                        <p>Customers</p>
                    </PopupText>
                </BannerPopup>

                <BannerPopup variant="2">
                    <PopupText variant="left">
                        <IconBg><SendSVG /></IconBg>
                        <h6>400+</h6>
                        <p>Destinations</p>
                    </PopupText>
                </BannerPopup>

                <BannerPopup variant="3">
                    <PopupText variant="right">
                        <IconBg><FlagSVG /></IconBg>
                        <h6>70+</h6>
                        <p>Tours</p>

                    </PopupText>
                </BannerPopup>
            </ImageBox>
            <BannerTextbox>
                <h2>Why Choose <span>Travel</span>.int?</h2>
                <p>
                    There are always undoubted leaders, professionals in their field, experts of their product - that`s us! Travel agency Verona-tour does not stand still, we work for you! We are developing our network, opening new offices, inspecting hotels and discovering new countries, and most importantly, we provide our tourists with the best service in Ukraine!
                </p>
            </BannerTextbox>
        </WhyUsWrapper>
    )
}

export default WhyUs
