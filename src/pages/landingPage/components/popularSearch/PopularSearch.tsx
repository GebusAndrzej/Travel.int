import React from 'react'
import { PopularSearchWrapper, SearchChip, SearchChipsBox, Title } from './PopularSearch.styled'

const PopularSearch = (): JSX.Element => {

    const searchs = [
        "Eiffel Tower",
        "Bali",
        "Eiffel Tower",
        "Egypt",
        "Turkey",
        "The Grand Canyon",
        "Cappadocia",
        "UAE",
        "The Grand Canyon",
        "London",
        "USA",
        "Temple Japan",
    ]

    return (
        <PopularSearchWrapper>
            <Title>Popular Search</Title>

            <SearchChipsBox>
                {searchs.map(x => (
                    <SearchChip key={Math.random()}>{x}</SearchChip>
                ))}
            </SearchChipsBox>
        </PopularSearchWrapper>
    )
}

export default PopularSearch
