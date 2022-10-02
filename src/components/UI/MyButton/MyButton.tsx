import React from "react";
import styles from "./MyButton.module.scss";

interface MyButtonProps {
    children: React.ReactNode;
    isPending?: boolean;
    click?: () => void;
}

const MyButton = ({ children, isPending = false, click }: MyButtonProps) => {
    return (
        <button
            disabled={isPending}
            className={`${styles.button} ${styles.pending}`}
            onClick={click}
        >
            {!isPending && children}
            {isPending && <div className={styles.loader}></div>}
        </button>
    );
};

export default MyButton;
