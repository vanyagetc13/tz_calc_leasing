import React from "react";
import "./App.css";
import DragInput from "./components/DragInput/DragInput";
import MyTitle from "./components/MyTitle/MyTitle";
import MyButton from "./components/UI/MyButton/MyButton";

function App() {
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
                />
                <DragInput title="Первоначальный взнос" />
                <DragInput title="Срок лизинга" min={1} max={60} step={1} after="мес."/>
            </div>
            <div className="lower">
                <div>Сумма договора лизинга</div>
                <div>Ежемесячный платеж от</div>
                <MyButton>Оставить заявку</MyButton>
            </div>
        </div>
    );
}

export default App;
