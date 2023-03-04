import React from 'react'
import './styles.scss'

export const CategoryCard = (props: { category: { name: string; totalCourse: number } }) => {
    const categorie = props.category;

    return (
        <div className='categorie-card'>
            <h6 className='categories-title'>{categorie.name}</h6>
            <h1 className='categories-courses '>{categorie.totalCourse} Courses</h1>
        </div>
    )

}