import React, { Component } from 'react';

import './Courses.css';
import { Route } from 'react-router-dom';
import Course from '../Course/Course';


class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    courseClickHandler = (id, title) => {
        const courseUrl = '/courses/' + id + '?title=' + title;
        this.props.history.push(courseUrl);
    }

    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return <article className="Course" key={course.id} onClick={() => this.courseClickHandler(course.id, course.title)}>{course.title}</article>;
                        } )
                    }
                </section>

                <Route path="/courses/:id" component={Course}></Route>
            </div>
        );
    }
}

export default Courses;