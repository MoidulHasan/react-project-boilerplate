import React, { useEffect, useState } from 'react'
import "./styles.scss"
import { courses, ICourse, categorys } from '../../../constants/courses'
import { CourseCard } from '../../CourseCard'
import { NavLink } from 'react-router-dom'

export const CoursesList = () => {

    const [activeCategory, setActiveCategory] = useState(categorys[0]);
    const [courseList, SetCourseList] = useState([] as ICourse[]);



    const handleCategoryChange = (category: string): void => {
        setActiveCategory(category);

        const fileteredCourseList = courses.filter((course) => course.category === category);

        SetCourseList(fileteredCourseList)
    }

    const courseCategories = categorys.map((category) => {
        return <button onClick={() => handleCategoryChange(category)} className={`category  m-1 ${activeCategory === category ? 'category-active' : ""}`}>{category}</button>
    })



    useEffect(() => {
        handleCategoryChange(categorys[0])
    }, [])





    return (
        <div className='cousrse-list-container'>
            <div className='cousrse-list-content'>
                <div className='text-center'>
                    <h1 className='title'>
                        Our <span style={{ color: "#00B2FF" }}>Courses</span>
                    </h1>
                    <div className="flex flex-wrap justify-center ">
                        {courseCategories}
                    </div>
                </div>


                <div className='course-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-2  md:mx-5 '>
                    {
                        courseList.slice(0, 9).map((course) => {
                            return <CourseCard course={course} />
                        })
                    }
                </div>

                <div className='flex justify-center mt-12'>
                    <NavLink className='category category-active' to="/courses">View More</NavLink>
                </div>



            </div>
        </div >
    )
}
