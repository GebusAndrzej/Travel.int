import React from 'react'
import Footer from '../../components/footer/Footer'
import NavBar from '../../components/navBar/NavBar'
import LoginBanner from './components/LoginBanner/LoginBanner'

function LoginPage(): JSX.Element {
    return (
        <>
            <NavBar></NavBar>
            <LoginBanner></LoginBanner>
            <Footer></Footer>
        </>
    )
}

export default LoginPage
