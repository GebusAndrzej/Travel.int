import React from 'react'
import Categories from '../../components/categories/Categories'
import Footer from '../../components/footer/Footer'
import LocationGridComponent from '../../components/locationGrid/LocationGridComponent'
import NavBar from '../../components/navBar/NavBar'
import QRComponent from '../../components/qr/QRComponent'
import { searchPageLocations } from '../../data/locationsData'
import PopularSearch from '../landingPage/components/popularSearch/PopularSearch'

const SearchPage = (): JSX.Element => {
  return (
    <>
        <NavBar></NavBar>
        <Categories></Categories>
        <PopularSearch></PopularSearch>
        <LocationGridComponent locations={searchPageLocations}></LocationGridComponent>
        <QRComponent></QRComponent>
        <Footer></Footer>
    </>
  )
}

export default SearchPage