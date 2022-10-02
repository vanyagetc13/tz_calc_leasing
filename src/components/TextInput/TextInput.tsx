import React, { useRef } from "react";
import styles from "./TextInput.module.scss";
import { useState, useEffect } from "react";
// import { separater } from "../../utilities/separater";

interface TextInputProps {
    valueR: (t: number) => void;
    connect: string | number;
    min: number;
    max: number;
}

const TextInput = ({ valueR, connect, min, max }: TextInputProps) => {
    const [text, setText] = useState(connect);

    useEffect(() => {
        setText(connect);
        // setText(
        //     new Intl.NumberFormat("ru-RU")
        //         .format(parseInt(connect.toString()))
        //         .toString()
        // );
        // Работает также как мой separater.ts
    }, [connect]);

    useEffect(() => {
        if (timerID !== null) clearTimer(timerID);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text]);

    const [timerID, setTimerID] = useState<NodeJS.Timeout | null>(null);

    const textInputRef = useRef<HTMLInputElement | null>(null);

    const closestMAXMIN = (val: string) => {
        const num = parseInt(val);
        if (num > max) return max;
        else return min;
    };

    const typed = async (val: string) => {
        if (timerID !== null) {
            await clearTimer(timerID);
        }
        let ID: NodeJS.Timeout | null = null;
        ID = await setTimeout(() => {
            const c = closestMAXMIN(val);
            valueR(c);
            setText(c);
            textInputRef?.current?.blur();
        }, 2000);
        if (ID !== null) await setTimerID(ID);
    };

    const clearTimer = (id: NodeJS.Timeout) => {
        clearTimeout(id);
        setTimerID(null);
    };

    return (
        <input
            type="text"
            value={text}
            className={styles.input}
            onChange={(e) => {
                let val = e.target.value;
                val = val.replace(/\D/, "");
                const num = parseInt(val);
                if (num <= max && num >= min && !isNaN(num)) {
                    valueR(num);
                    if (timerID !== null) clearTimer(timerID);
                } else {
                    typed(val);
                    setText(val);
                }
            }}
            ref={textInputRef}
        />
    );
};

export default TextInput;
