import React from "react";
import styles from "./MyTitle.module.css"

const MyTitle = () => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>
                Рассчитайте стоимость автомобиля <span>в лизинг</span>
            </h1>
        </div>
    );
};

export default MyTitle;
