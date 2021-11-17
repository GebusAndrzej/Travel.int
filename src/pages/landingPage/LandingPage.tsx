import React from 'react'

import Footer from '../../components/footer/Footer'
import QRComponent from '../../components/qr/QRComponent'
import Categories from '../../components/categories/Categories'
import NavBar from '../../components/navBar/NavBar'
import Banner from './components/banner/Banner'
import PopularSearch from './components/popularSearch/PopularSearch'

const LandingPage = (): JSX.Element => {
    return (
        <>
            <NavBar></NavBar>
            <Banner></Banner>
            <PopularSearch></PopularSearch>
            <Categories></Categories>
            <QRComponent></QRComponent>
            <Footer></Footer>
        </>
    )
}

export default LandingPage
