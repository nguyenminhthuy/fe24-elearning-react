import React, { Component } from 'react'
import SliderCarousel from './Pages/SliderCarousel';
import CoursePopular from './Courses/CoursePopular';

export default class HomePage extends Component {
    
    render() {
        return (
            <div>
                <SliderCarousel />
                {/* <CourseOwlCarousel /> */}
                <CoursePopular/>
            </div>
        )
    }
}
