import React from 'react'
import "./styles.scss"
// import { ICategories } from '../../../constants/categories'
import { CategoryCard } from '../../CategoryCard';
import { categorys, courses } from '../../../constants/courses';
import { NavLink } from 'react-router-dom';

export const CategoriesList = () => {
    // const [categoriesList, setCategoriesList] = useState([] as ICategories[]);


    return (
        <div className='categories-container'>
            <div className='categories-content'>
                <div className='text-start'>
                    <h1 className='categories-title'>Courses by
                        <span style={{ color: "#008CC9" }}> Categories</span>
                    </h1>
                </div>

                <div className='categories-list grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2'>
                    {
                        categorys.slice(0, 8).map((category) => {
                            return <div className='p-2'>
                                <CategoryCard category={{ name: category, totalCourse: courses.filter((course) => course.category === category).length }} />
                            </div>
                        })
                    }
                </div>

                <div className='flex justify-center mt-12'>
                    <NavLink className='view-more-button' to="/categroies">
                        <button className='button-primary '>
                            View More
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
