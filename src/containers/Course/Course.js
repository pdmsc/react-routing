import React, { Component } from 'react';
import queryString from 'query-string';

class Course extends Component {
    render () {
        const courseId = this.props.match.params.id;

        const queryParams = queryString.parse(this.props.location.search);
        const courseTitle = queryParams.title;
        
        return (
            <div>
                <h1>{courseTitle}</h1>
                <p>You selected the Course with ID: {courseId}</p>
            </div>
        );
    }
}

export default Course;