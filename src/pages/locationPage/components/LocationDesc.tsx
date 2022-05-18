import React from 'react'
import { DescriptionWrapper } from './LocationDesc.styled'
import PhotoSlider from './PhotoSlider'

const LocationDesc = () => {
  return (
    <DescriptionWrapper>
        <PhotoSlider></PhotoSlider>
        <div>
            <h1>Snow Forest</h1>
            <p>Taste the cold and beauty of the Russian forest in winter.</p>
            <p>Taste the cold and beauty of the Russian forest in winter.</p>
        </div>
    </DescriptionWrapper>
  )
}

export default LocationDesc