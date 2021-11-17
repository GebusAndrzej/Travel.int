import React from 'react'
import Footer from '../../components/footer/Footer'
import NavBar from '../../components/navBar/NavBar'
import LoginComponent from './components/LoginComponent/LoginComponent'

function LoginPage(): JSX.Element {
    return (
        <>
            <NavBar></NavBar>
            <LoginComponent></LoginComponent>
            <Footer></Footer>
        </>
    )
}

export default LoginPage
