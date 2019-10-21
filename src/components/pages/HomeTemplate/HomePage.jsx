import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import CourseOwlCarousel from './Courses/CourseOwlCarousel';
import SliderCarousel from './Pages/SliderCarousel';

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <SliderCarousel />
                <CourseOwlCarousel />
            </div>

        )
    }
}
