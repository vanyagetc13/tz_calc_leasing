import React from 'react';
import styles from "./MyButton.module.css"

interface MyButtonProps {
    children: React.ReactNode;
    status?: string;
}

const MyButton = ({children, status = "default"}:MyButtonProps) => {
    return (
        <button disabled={status==="disabled"} className={styles.button}>
            {children}
        </button>
    );
};

export default MyButton;