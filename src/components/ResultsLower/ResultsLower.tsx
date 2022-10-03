// import axios from "axios";
import React, { useMemo } from "react";
import { separater } from "../../utilities/separater";
import MyButton from "../UI/MyButton/MyButton";

import styles from "./ResultsLower.module.scss";
// import { antiError } from "../../hooks/useSubmit";

interface ResultsLowerProps {
    price: string;
    term: string;
    percent: string;
    initial: string;
}

const ResultsLower = ({ price, term, percent, initial }: ResultsLowerProps) => {
    const STAVKA = 0.035; // Процентная ставка

    // const URL = 'https://eoj3r7f3r4ef6v4.m.pipedream.net'

    const monthPay = useMemo(() => {
        return Math.floor(
            (parseInt(price) - parseInt(initial)) *
                ((STAVKA * Math.pow(1 + STAVKA, parseInt(term))) /
                    (Math.pow(1 + STAVKA, parseInt(term)) - 1))
        );
    }, [price, initial, term]);

    const summary = useMemo(() => {
        return parseInt(initial) + parseInt(term) * monthPay;
    }, [initial, term, monthPay]);

    // const [submit, isPending, error] = useSubmit(()=>{
    //     const LeasingInfo = {
    //         id: new Date(),
    //         price: price,
    //         precent: percent,
    //         initial: initial,
    //         term: term,
    //         monthPay: monthPay,
    //         summary: summary
    //     }
    //     const response = axios.post(URL, LeasingInfo);
    //     console.log(response);
    // })

    const sendToBackend = () => {
        // Leasing info is little bit upper
        // axios.pos(URL, LeasingInfo)
        //     .then(response => {console.log(response);
        //     })
        //     .catch(e){
        //         console.error(e.message);
        //     }
    }

    return (
        <div className={styles.lower}>
            <div className={styles.wrapper}>
                <h4 className={styles.title}>Сумма договора лизинга</h4>
                <div className={styles.result}>{separater(summary)} &#8381;</div>
            </div>
            <div className={styles.wrapper}>
                <h4 className={styles.title}>Ежемесячный платеж от</h4>
                <div className={styles.result}>{separater(monthPay)} &#8381;</div>
            </div>
            <div className={styles.new_row}></div>
            <MyButton click={sendToBackend}>Оставить заявку</MyButton>
        </div>
    );
};

export default ResultsLower;
