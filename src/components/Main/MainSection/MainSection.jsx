import avatarImage from '../../../assets/avatar_2.png';
import './MainSection.css';

const MainSection = () => {
    return (
        <div className="main-section">
            <img
                src={avatarImage}
                alt="Аватар"
                className="main-section__image"
            />
        </div>
    );
};

export default MainSection;
