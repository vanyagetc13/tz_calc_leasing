import React from "react";
import styles from "./TextInput.module.css";
import { useState, useEffect } from "react";

interface TextInputProps {
    valueR: (t: number) => void;
    connect: string | number;
    min: number;
    typed: (val:string)=>void;
}

const TextInput = ({ valueR, connect, min, typed }: TextInputProps) => {
    const [text, setText] = useState(connect);
    useEffect(() => {
        setText(connect);
    }, [connect]);

    return (
        <input
            type="text"
            value={text}
            className={styles.input}
            onChange={(e) => {
                let val = e.target.value;
                val = val.replace(/\D/, "");
                const num = parseInt(val);
                if (num && num >= min && !isNaN(num)) {
                    valueR(num);
                } else {
                    typed(val)
                }
                setText(val);
            }}
        />
    );
};

export default TextInput;
