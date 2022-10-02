import { useMemo } from "react";

export const useProgress = (inputValue:string, min:number, max:number) => {
    const progressValue = useMemo(() => {
        const result = ((parseInt(inputValue) - min) / (max - min)) * 88;
        return result.toString() + "%";
    }, [inputValue, min, max]);
    return progressValue;
}