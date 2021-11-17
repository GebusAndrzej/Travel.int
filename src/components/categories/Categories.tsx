import React, { createRef } from 'react'
import { Arrow, ButtonBox, CategoriesHeader, CategoriesWrapper, Desc, Title } from './Categories.styled'
import CategorySlider2 from './components/CategorySlider/CategorySlider2'

function Categories(): JSX.Element {
    const SliderRef = createRef<CategorySlider2>();

    return (
        <CategoriesWrapper>

            <CategoriesHeader>
                <div>—</div>
                <Title>Categotry</Title>

                <ButtonBox>
                    <Arrow className="end" onClick={() => SliderRef.current?.back()}>⭠</Arrow>
                    <Arrow onClick={() => SliderRef.current?.next()}>⭢</Arrow>
                </ButtonBox>
                <div></div>
                <Desc>You don`t have to look for your tour for a long<br /> time. We have grouped them by category</Desc>


            </CategoriesHeader>

            {/* <CategorySlider /> */}
            <CategorySlider2 ref={SliderRef} />

        </CategoriesWrapper>
    )
}

export default Categories
