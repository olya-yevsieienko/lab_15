import { Route, Routes } from 'react-router-dom';
import { CONTENT_TYPE } from '../../constants';
import MainSection from './MainSection/MainSection';
import MainArticle from './MainArticle/MainArticle';
import NotFound from '../NotFound/NotFound';
import MainAside from './MainAside/MainAside';

import './Main.css';

const Main = () => {
    return (
        <main className="main">
            <div className="main__content">
                <MainSection />
                <div className="main__divider"></div>
                <Routes>
                    <Route path="/" element={<MainArticle type={CONTENT_TYPE.NEWS} />} />
                    <Route path="/about" element={<MainArticle type={CONTENT_TYPE.ABOUT} />} />
                    <Route path="/contacts" element={<MainArticle type={CONTENT_TYPE.CONTACTS} />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <div className="main__divider"></div>
                <MainAside />
            </div>
        </main>
    );
};

export default Main;
