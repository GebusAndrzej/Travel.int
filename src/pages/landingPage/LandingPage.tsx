import React from 'react'

import Footer from '../../components/footer/Footer'
import QRComponent from '../../components/qr/QRComponent'
import NavBar from '../../components/navBar/NavBar'

const LandingPage = (): JSX.Element => {
    return (
        <>
            <NavBar></NavBar>
            <QRComponent></QRComponent>
            <Footer></Footer>
        </>
    )
}

export default LandingPage
