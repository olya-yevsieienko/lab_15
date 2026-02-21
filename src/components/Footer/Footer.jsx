import './Footer.css';

const Footer = () => {
    const currentDate  = new Date();
    const formattedDate = currentDate.toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <footer className="footer">
            <p className="footer__info">
                Дата создания: {formattedDate}
            </p>
            <p className="footer__info">
                Автор: Насонова Ольга Сергеевна
            </p>
        </footer>
    );
};

export default Footer;
