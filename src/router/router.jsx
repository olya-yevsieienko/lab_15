import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../layout/Layout';
import AboutUsPage from '../pages/AboutUsPage';
import HomePage from '../pages/HomePage/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import RacesPage from '../pages/RacesPage';
import RegistrationPage from '../pages/RegistrationPage';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            { index: true, Component: HomePage },
            { path: 'races', Component: RacesPage },
            { path: 'registration', Component: RegistrationPage },
            { path: 'about', Component: AboutUsPage },
            { path: '*', Component: NotFoundPage },
        ],
    },
])