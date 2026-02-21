import { CONTENT_TYPE } from '../../../constants';
import './MainArticle.css';

const MainArticle = ({ type }) => {
    return (
        <main>
            {type === CONTENT_TYPE.NEWS && (
                <span>
                    NEWS
                </span>
            )}
            {type === CONTENT_TYPE.ABOUT && (
                <span>
                    ABOUT
                </span>
            )}
            {type === CONTENT_TYPE.CONTACTS && (
                <span>
                    CONTACTS
                </span>
            )}
        </main>
    );
};

export default MainArticle;
