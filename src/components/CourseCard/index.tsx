import React from 'react'
import './styles.scss'
import { ICourse } from '../../constants/courses'

export const CourseCard = (props: { course: ICourse }) => {

    const course = { ...props.course }

    return (
        <div className='course-card'>
            <div>
                <img className='w-full cover-image' src={`./courses/${course.coverImage}`} alt={course.title} />
            </div>

            <div className='p-2'>
                <div className=' flex justify-start items-center'>
                    <h6 className='course-metadata'>{`${course.time} | ${course.lessons} Lessons`}</h6>

                    <div className='ml-2 px-1 flex justify-center items-center ratting '>
                        <img src="./icons/star.svg" alt="ratting" />

                        <p className='ml-2 text-white'>
                            {course.ratting}
                        </p>

                    </div>
                </div>

                <div className='course-title'>
                    {course.title}
                </div>

                <div className='m-0'>
                    <span className='course-discount-price'>{`₹ ${course.prices.discountPrice}/-`}</span> <span className='line-through course-regular-price'>{`₹ ${course.prices.regularPrice}/-`}</span>
                </div>
            </div>

        </div>
    )
}
