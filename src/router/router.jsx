import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../layout/Layout';
import AboutUsPage from '../pages/AboutUsPage/AboutUsPage';
import HomePage from '../pages/HomePage/HomePage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import RaceDistancePage from '../pages/RaceDistancePage/RaceDistancePage';
import RacesPage from '../pages/RacesPage/RacesPage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            { index: true, Component: HomePage },
            { path: 'races', Component: RacesPage },
            { path: 'races/:slug/:distanceKm', Component: RaceDistancePage },
            { path: 'registration', Component: RegistrationPage },
            { path: 'about', Component: AboutUsPage },
            { path: '*', Component: NotFoundPage },
        ],
    },
])
