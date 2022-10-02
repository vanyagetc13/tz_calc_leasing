import React, { useState } from "react";
import TextInput from "../TextInput/TextInput";

import styles from "./DragInput.module.scss";
import RangeInput from "../RangeInput/RangeInput";
import InputWrapper from "../InputWrapper/InputWrapper";

interface DragInputProps {
    min?: number;
    max?: number;
    step?: number;
    title?: string;
    after?: string;

    value:string;
    valueC: (s:string)=>void;
}

const DragInput = ({
    min = 1,
    max = 10,
    step = 1,
    title = "Default Title",
    after,
    value,
    valueC
}: DragInputProps) => {

    const setInputValueHandle = (num: number) => {
        valueC(num.toString());
    };

    return (
        <InputWrapper title={title}>
            <TextInput
                valueR={setInputValueHandle}
                connect={value}
                min={min}
                max={max}
            />
            {after && <div className={styles.after}>{after}</div>}
            <RangeInput
                value={value}
                valueH={setInputValueHandle}
                min={min}
                max={max}
                step={step}
            />
        </InputWrapper>
    );
};

export default DragInput;
