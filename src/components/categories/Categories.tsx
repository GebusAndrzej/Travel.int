import React from 'react'
import { CategoriesHeader, CategoriesWrapper, Desc, Title } from './Categories.styled'
import { CategorySlider } from './components/CategorySlider/CategorySlider'

function Categories(): JSX.Element {
    return (
        <CategoriesWrapper>

            <CategoriesHeader>
                <div>—</div>
                <Title>Categotry</Title>
                <></>

                <div></div>
                <div></div>
                <Desc>You don`t have to look for your tour for a long<br /> time. We have grouped them by category</Desc>


            </CategoriesHeader>

            <CategorySlider></CategorySlider>

        </CategoriesWrapper>
    )
}

export default Categories
