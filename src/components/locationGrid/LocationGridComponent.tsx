import React from 'react'
import { LocationModel } from '../../model/locationModel'
import LocationCardComponent from '../locationCard/LocationCardComponent'
import { LocationGrid, MoreLocationButton } from './LocationGridComponent.styled'

interface Props {
  locations: LocationModel[]
}

const LocationGridComponent = ( props: Props ):JSX.Element => {
  return (
    <>
      <LocationGrid>
        {props.locations.map(loc => (
          <LocationCardComponent key={loc.title} {...loc}></LocationCardComponent>
        ))}
      </LocationGrid>
      <MoreLocationButton>View More</MoreLocationButton>
    </>
  )
}

export default LocationGridComponent