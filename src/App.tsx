import React, { useMemo, useState } from "react";
import "./App.scss";
import DragInput from "./components/DragInput/DragInput";
import MyTitle from "./components/MyTitle/MyTitle";
import PercentageInput from "./components/PercentageInput/PercentageInput";
import ResultsLower from "./components/ResultsLower/ResultsLower";
import { separater } from "./utilities/separater";

function App() {
    const [price, setPrice] = useState("3500000");
    const [percent, setPercent] = useState("35");
    const [term, setTerm] = useState("30");

    const initial = useMemo(() => {
        return separater(
            Math.floor(parseInt(price.toString()) * (parseInt(percent) / 100))
        );
    }, [price, percent]);

    return (
        <div className="App">
            <MyTitle />
            <div className="inputs">
                <DragInput
                    min={1000000}
                    max={6000000}
                    step={10000}
                    title="Стоимость автомобиля"
                    after="&#8381;"
                    value={price}
                    valueC={(s) => {
                        setPrice(s);
                    }}
                />
                <PercentageInput
                    title="Первоначальный взнос"
                    value={percent}
                    valueC={setPercent}
                    initial={initial}
                />
                <DragInput
                    title="Срок лизинга"
                    min={1}
                    max={60}
                    step={1}
                    after="мес."
                    value={term}
                    valueC={(s) => {
                        setTerm(s);
                    }}
                />
            </div>
            <ResultsLower price={price} initial={initial} term={term} percent={percent}/>
        </div>
    );
}

export default App;
