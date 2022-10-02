import React from "react";
import InputWrapper from "../InputWrapper/InputWrapper";
import RangeInput from "./../RangeInput/RangeInput";

import styles from "./PercentageInput.module.scss"

interface PercentageInputProps {
    title?: string;
    value: string;
    valueC: (s:string)=>void;
    initial: string | number;
}

const PercentageInput = ({
    title = "Pecentage Input's Default Title",
    value,
    valueC,
    initial
}: PercentageInputProps) => {

    const handler = (n:number) => {
        valueC(n.toString())
    };

    return (
        <InputWrapper title={title}>
            <div className={styles.results}>{initial + " "}&#8381;</div>
            <div className={styles.percent}>{value}&#37;</div>
            <RangeInput value={value} valueH={handler} step={1} min={10} max={60} />
        </InputWrapper>
    );
};

export default PercentageInput;
