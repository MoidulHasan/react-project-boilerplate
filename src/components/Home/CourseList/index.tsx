import React from 'react'
import "./styles.scss"
import { courses } from '../../../constants/courses'
import { CourseCard } from '../../CourseCard'

export const CoursesList = () => {




    return (
        <div className='cousrse-list-container'>
            <div className='cousrse-list-content'>
                <h1 className='title'>
                    Our <span style={{ color: "#00B2FF" }}>Courses</span>
                </h1>


                <CourseCard course={courses[0]} />
            </div>
        </div>
    )
}
