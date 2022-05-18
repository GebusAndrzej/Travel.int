import React from 'react'
import Footer from '../../components/footer/Footer'
import LocationGridComponent from '../../components/locationGrid/LocationGridComponent'
import NavBar from '../../components/navBar/NavBar'
import { locationPageLocations } from '../../data/locationsData'
import LocationDesc from './components/LocationDesc'

const LocationPage = (): JSX.Element => {
    return (
        <>
            <NavBar></NavBar>
            <LocationDesc></LocationDesc>
            <LocationGridComponent locations={locationPageLocations}></LocationGridComponent>
            <Footer></Footer>
        </>
    )
}

export default LocationPage