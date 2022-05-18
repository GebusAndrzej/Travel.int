import React, { useState } from 'react'
import { BannerSearchButton, LandingBanner, SearchBanner, SearchBarSeparator, SearchItem, SearchItemIcon } from './Banner.styled'

import { ReactComponent as SVGLocation } from '../../../../assets/svg/location.svg'
import { ReactComponent as SVGCallendar } from '../../../../assets/svg/callendar.svg'
import { ReactComponent as SVGSearch } from '../../../../assets/svg/search.svg'

const Banner = (): JSX.Element => {
    const [counter, setCounter] = useState(0)
    return (
        <LandingBanner>
            <p>Travel.int is all you need</p>
            <h1>Explore The World</h1>

            <SearchBanner>

                <SearchItem>
                    <SearchItemIcon><SVGLocation /></SearchItemIcon>

                    <h4>Location</h4>
                    <input type="text" className="desc" placeholder="Where do you want to go?" />

                </SearchItem>

                <SearchBarSeparator></SearchBarSeparator>

                <SearchItem>
                    <SearchItemIcon><SVGCallendar /></SearchItemIcon>
                    <h4>Date</h4>
                    <input
                        placeholder="Choose date"
                        className="desc"
                        type="text"
                        onMouseOver={x => x.currentTarget.type = "date"}
                    >
                    </input>

                </SearchItem>

                <SearchBarSeparator></SearchBarSeparator>

                <SearchItem>
                    <SearchItemIcon><SVGLocation /></SearchItemIcon>
                    <h4>People</h4>
                    <div className="desc">
                        <button onClick={() => setCounter(counter <= 0 ? 0 : counter - 1)}>-</button>
                        <span>{counter <= 0 ? "Add people" : counter}</span>
                        <button onClick={() => setCounter(counter + 1)}>+</button>
                    </div>
                </SearchItem>

                <div>
                    <BannerSearchButton to="/search">
                        <SVGSearch />
                    </BannerSearchButton>
                </div>
            </SearchBanner>

        </LandingBanner>
    )
}

export default Banner
