import { Route, Routes } from 'react-router-dom';
import NotFound from '../Pages/NotFound/NotFound';
import HomePage from '../Pages/HomePage/HomePage';
import AboutUsPage from '../Pages/AboutUsPage/AboutUsPage';
import CatalogPage from '../Pages/CatalogPage/CatalogPage';
import RegistrationPage from '../Pages/RegistrationPage/RegistrationPage';

import './Main.scss';

const Main = () => {
    return (
        <main className="main">
            <div className="main__content">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutUsPage />} />
                    <Route path="/registration" element={<RegistrationPage />} />
                    <Route path="/catalog" element={<CatalogPage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </main>
    );
};

export default Main;
