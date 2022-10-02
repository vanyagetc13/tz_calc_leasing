import React from "react";
import styles from "./MyButton.module.scss";

interface MyButtonProps {
    children: React.ReactNode;
    status?: string;
    click?: () => void;
}

const MyButton = ({ children, status = "default", click }: MyButtonProps) => {
    return (
        <button
            disabled={status === "disabled"}
            className={`${styles.button} ${styles.pending}`}
            onClick={click}
        >
            {status === "default" && children}
            {status === "pending" && <div className={styles.loader}></div>}
        </button>
    );
};

export default MyButton;
