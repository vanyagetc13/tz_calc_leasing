import React, { useMemo, useState } from "react";
import TextInput from "../TextInput/TextInput";

import styles from "./DragInput.module.css";

interface DragInputProps {
    min?: number;
    max?: number;
    step?: number;
    defaultValue?: number;
    title: string;
    after?: string;
}

const DragInput = ({
    min = 1,
    max = 10,
    step = 1,
    defaultValue = Math.round((max - min) / 2),
    title = "&",
    after,
}: DragInputProps) => {
    const [inputValue, setInputValue] = useState(defaultValue.toString());

    const setInputValueFromTextHandle = (num: number) => {
        if (num) {
            if (num > max) setInputValue(max.toString());
            else if (num < min) setInputValue(min.toString());
            else setInputValue(num.toString());
        }
    };

    const progressValue = useMemo(() => {
        const result = ((parseInt(inputValue) - min) / (max - min)) * 88;
        return result.toString() + "%";
    }, [inputValue, min, max]);

    const typedHandle = (val:string) => {

    }

    return (
        <div className={styles.wrapper}>
            <h4 className={styles.title}>{title}</h4>
            <div className={styles.input}>
                <TextInput
                    valueR={setInputValueFromTextHandle}
                    connect={inputValue}
                    min={min}
                    typed={typedHandle}
                />
                {after && <div className={styles.after}>{after}</div>}
                <input
                    className={styles.range}
                    type="range"
                    step={step}
                    max={max}
                    min={min}
                    value={inputValue}
                    onChange={(e: React.FormEvent<HTMLInputElement>) => {
                        setInputValue(e.currentTarget.value);
                    }}
                />
                <div
                    className={styles.progressBar}
                    style={{ width: progressValue }}
                ></div>
            </div>
        </div>
    );
};

export default DragInput;
