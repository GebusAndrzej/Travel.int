import React from 'react'
import { FooterGrid, FooterItem, FooterSection, FooterWrapper, Footer_SocialMedia, Rights } from './Footer.styled'

import { ReactComponent as SVGFacebook } from '../../assets/svg/fbicon.svg'
import { ReactComponent as SVGTelegram } from '../../assets/svg/telegramicon.svg'
import { ReactComponent as SVGInstagram } from '../../assets/svg/instagramicon.svg'
import Logo from '../Logo'

const Footer = (): JSX.Element => {
    return (
        <FooterWrapper>
            <FooterGrid>
                <FooterSection>
                    <Logo></Logo>
                    <FooterItem to="">Enjoy by triping<br /> with Travelint.</FooterItem>
                    <Footer_SocialMedia>
                        <SVGFacebook />
                        <SVGTelegram />
                        <SVGInstagram />
                    </Footer_SocialMedia>
                </FooterSection>

                <FooterSection>
                    <h5>Menu</h5>
                    <FooterItem to="#">Home</FooterItem>
                    <FooterItem to="#">Tour</FooterItem>
                    <FooterItem to="#">Category</FooterItem>
                    <FooterItem to="#">About Us</FooterItem>
                </FooterSection>

                <FooterSection>
                    <h5>Booking plan</h5>
                    <FooterItem to="#">Personal Trip</FooterItem>
                    <FooterItem to="#">Group Trip</FooterItem>
                </FooterSection>

                <FooterSection>
                    <h5>Support</h5>
                    <FooterItem to="#">FAQ</FooterItem>
                    <FooterItem to="#">Terms & Conditions</FooterItem>
                    <FooterItem to="#">Privacy Policy</FooterItem>
                </FooterSection>

                <FooterSection>
                    <h5>Get App</h5>
                    <FooterItem to="#">Google Play Store</FooterItem>
                    <FooterItem to="#">App Store</FooterItem>
                    <FooterItem to="#">Other Stores </FooterItem>
                </FooterSection>
            </FooterGrid>

            <Rights>2021 (c) — Travelint. All Rights Reserved</Rights>
        </FooterWrapper>
    )
}

export default Footer
