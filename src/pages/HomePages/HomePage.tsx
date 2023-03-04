import React from 'react';
import { PageLayout } from '../../layouts/PageLayout';
import { HeroSlider } from "../../components/Home/HeroSlider"
import { CoursesList } from '../../components/Home/CourseList';
import { CategoriesList } from '../../components/Home/CategoriesList';

const HomePage = () => {
  return (
    <PageLayout>
      <HeroSlider />
      <CoursesList />
      <CategoriesList />
    </PageLayout>
  );
};



export default HomePage;