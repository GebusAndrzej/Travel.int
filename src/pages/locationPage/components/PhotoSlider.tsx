import P1 from '../../../assets/images/location/92.png';
import P2 from '../../../assets/images/location/93.png';
import P3 from '../../../assets/images/location/94.png';
import P4 from '../../../assets/images/location/95.png';

import React, { Component } from 'react'
import Slider from "react-slick";
import { ImagesWrapper, Thumbnail, Image } from './LocationDesc.styled';

interface State {
    nav1: Slider | null;
    nav2: Slider | null;
}

export default class AsNavFor extends Component<unknown, State> {
    constructor(props: never) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }

    slider1: Slider | null = null;
    slider2: Slider | null = null;

    componentDidMount(): void {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }

    render():JSX.Element {
        return (
            <ImagesWrapper>
                <Slider
                    ref={slider => (this.slider1 = slider)}
                >
                    {[P1,P2,P3,P4].map(p => (
                        <Image key={p} src={p}/>
                    ))}
                </Slider>
                <Slider
                    asNavFor={this.state.nav1 ?? undefined}
                    ref={slider => (this.slider2 = slider)}
                    slidesToShow={3}
                    swipeToSlide={true}
                    focusOnSelect={true}
                >
                    {[P1,P2,P3,P4].map(p => (
                        <Thumbnail key={p} src={p}/>
                    ))}
                </Slider>
            </ImagesWrapper>
        );
    }
}