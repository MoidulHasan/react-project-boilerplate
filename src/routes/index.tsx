import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes ,Route } from 'react-router-dom';

import { PATH } from '../constants/paths';
import { Loading } from '../components/Loading';
import { MainLayout } from '../layouts/MainLayout';

// ---> Static pages
import HomePage from '../pages/HomePages/HomePage';



// ---> Error pages
// const NotFoundPage = lazy(() => import('src/pages/ErrorPages/404Pages'));

export const AllRoutes = () => {
  return (
    <BrowserRouter>
        <MainLayout>
          <Suspense fallback={<Loading />}>
            <Routes>
              {/* Static pages routes */}
              <Route  path={PATH.HOME} element={<HomePage/>} />


              {/* Error routes */}
              {/* <Route element={NotFoundPage} /> */}
            </Routes>
          </Suspense>
        </MainLayout>
    </BrowserRouter>
  );
};
