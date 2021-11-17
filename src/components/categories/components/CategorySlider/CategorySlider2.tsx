import React, { Component } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import P1 from '../../../../assets/images/categories/1.png';
import P2 from '../../../../assets/images/categories/2.png';
import P3 from '../../../../assets/images/categories/3.png';
import P4 from '../../../../assets/images/categories/4.png';
import P5 from '../../../../assets/images/categories/5.png';
import P6 from '../../../../assets/images/categories/6.png';
import P7 from '../../../../assets/images/categories/7.png';

import { Fig } from './CategorySlider.styled'

export default class CategorySlider2 extends Component {

    slider: Slider | null = new Slider({})

    cat = [
        { key: 1, val: "Beach", img: P1 },
        { key: 2, val: "Mountain", img: P2 },
        { key: 3, val: "Desert", img: P3 },
        { key: 4, val: "Tower", img: P4 },
        { key: 5, val: "Temple", img: P5 },
        { key: 6, val: "Forest", img: P6 },
        { key: 7, val: "City", img: P7 },

    ]

    settings = {
        accessibility: true,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6.5,
        slidesToScroll: .5,
    };

    next(): void {
        this.slider?.slickNext();
    }

    back(): void {
        this.slider?.slickPrev()
    }



    render(): JSX.Element {
        return (
            <Slider {...this.settings} ref={c => (this.slider = c)}>
                {this.cat.map(({ key, val, img }) => {
                    return (
                        <Fig key={key}>
                            <img src={img}></img>

                            <figcaption>
                                <h3>{val}</h3>
                            </figcaption>
                        </Fig>
                    )
                })}
            </Slider>
        )
    }
}
