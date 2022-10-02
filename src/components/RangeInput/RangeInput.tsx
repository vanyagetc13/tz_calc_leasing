import React from "react";
import { useProgress } from "../../hooks/useProgress";
import styles from "./RangeInput.module.scss";

interface RangeInputProps {
    min?: number;
    max?: number;
    step?: number;
    value: string;
    valueH: (n:number) => void;
}

const RangeInput = ({
    min = 1,
    max = 10,
    step = 1,
    value,
    valueH
}: RangeInputProps) => {
    return (
        <>
            <input
                className={styles.range}
                type="range"
                step={step}
                max={max}
                min={min}
                value={value}
                onChange={(e: React.FormEvent<HTMLInputElement>) => {
                    valueH(parseInt(e.currentTarget.value))
                }}
            />
            <div
                className={styles.progressBar}
                style={{ width: useProgress(value.toString(), min, max) }}
            ></div>
        </>
    );
};

export default RangeInput;
