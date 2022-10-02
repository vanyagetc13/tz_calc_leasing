import React from 'react';
import styles from "./InputWrapper.module.scss"

interface InputWrapperProps {
    children: React.ReactNode;
    title: string;
}
const InputWrapper = ({children, title}:InputWrapperProps) => {
    return (
        <div>
            <h4 className={styles.title}>{title}</h4>
            <div className={styles.input}>
                {children}
            </div>
        </div>
    );
};

export default InputWrapper;