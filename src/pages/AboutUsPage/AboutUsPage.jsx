import { aboutMetrics } from "../../models/about-us-page";

import "./style.scss";

const AboutUsPage = () => {
    return (
        <section className="about-us-page">
            <div className="surface-soft-block">
                <h1>Trail Run 2026 - это не просто забег</h1>
                <p>
                    Мы создаем событие на стыке спорта, природы и сообщества. Наша команда развивает
                    культуру трейлраннинга через безопасные маршруты, качественную организацию и 
                    и теплую атмосферу спорта.
                </p>
            </div>
            <div className="about-us-page__metrics">
                {aboutMetrics.map((metrica) => (
                    <div
                        key={metrica.label}
                        className="about-us-page__metric"
                    >
                        <span>{metrica.value}</span>
                        <p>{metrica.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AboutUsPage;
