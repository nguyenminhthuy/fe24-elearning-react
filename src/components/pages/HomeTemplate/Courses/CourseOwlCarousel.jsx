import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import InfiniteCarousel from 'react-leaf-carousel';
import CourseItem from './CourseItem';
const options = {
    items: 4,
};

export default class CourseOwlCarousel extends Component {
    render() {
        return (
            <div className="mb-5">
                <h2 className="m-5 text-center">Our Popular Courses</h2>
                <InfiniteCarousel
                    breakpoints={[
                        {
                            breakpoint: 500,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2,
                            },
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3,
                            },
                        },
                    ]}
                    dots={false}
                    showSides={true}
                    sidesOpacity={.5}
                    sideSize={.1}
                    slidesToScroll={4}
                    slidesToShow={4}
                    scrollOnDevice={true}
                    loop
                >
                    <div>
                        <CourseItem />
                    </div>
                    <div>
                        <CourseItem />
                    </div>
                    <div>
                        <CourseItem />
                    </div>
                    <div>
                        <CourseItem />
                    </div>
                    <div>
                        <CourseItem />
                    </div>
                    <div>
                        <CourseItem />
                    </div>
                    <div>
                        <CourseItem />
                    </div>
                    <div>
                        <CourseItem />
                    </div>
                    <div>
                        <CourseItem />
                    </div>
                    <div>
                        <CourseItem />
                    </div>
                    <div>
                        <CourseItem />
                    </div>
                    <div>
                        <CourseItem />
                    </div>                 
                </InfiniteCarousel>
            </div>
        )
    }
}
