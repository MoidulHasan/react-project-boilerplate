import React from 'react';
import { PageLayout } from '../../layouts/PageLayout';
import { HeroSlider } from "../../components/Home/HeroSlider"
import { CoursesList } from '../../components/Home/CourseList';

const HomePage = () => {
  return (
    <PageLayout>
      <HeroSlider />
      <CoursesList />
    </PageLayout>
  );
};



export default HomePage;