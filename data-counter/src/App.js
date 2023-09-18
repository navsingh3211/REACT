
import { useState } from "react";
function App() {
    return (
        <div className="App">
            <Counter/>
        </div>
    )
}

function Counter(){
    let [step, setStep] = useState(1);
    let [count, setCount] = useState(0);

    function toStepAddition() {
        if (step > 0) setStep((step) => step + 1)
    }
    function toStepSubstraction() {
        setStep((step) => step - 1)
    }

    function toCountAddition() {
        setCount((count) => count + step)
    }
    function toCountSubstraction() {
        setCount((count) => count - step)
    }

    function formatDate(date) {
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const months = [
            'January', 'February', 'March', 'April',
            'May', 'June', 'July', 'August',
            'September', 'October', 'November', 'December'
        ];

        const dayOfWeek = daysOfWeek[date.getDay()];
        const month = months[date.getMonth()];
        const dayOfMonth = date.getDate();
        const year = date.getFullYear();

        return `${dayOfWeek} ${month} ${dayOfMonth} ${year}`;
    }

    function calculateNewFormattedDate(daysToAddOrSubtract) {
        const today = new Date();
        const newDate = new Date(today);
        newDate.setDate(today.getDate() + daysToAddOrSubtract);

        return formatDate(newDate);
    }
    return (
        <div className="fullBody">
            <div className="buttons">
                <button style={{ backgroundColor: "#7950f2", color: "#fff" }} onClick={toStepSubstraction}>-</button>
                <p className="message">Steps : {step}</p>
                <button style={{ backgroundColor: "#7950f2", color: "#fff" }} onClick={toStepAddition}>+</button>
            </div>
            <div className="buttons">
                <button style={{ backgroundColor: "#7950f2", color: "#fff" }} onClick={toCountSubstraction}>-</button>
                <p className="message">Count : {count}</p>
                <button style={{ backgroundColor: "#7950f2", color: "#fff" }} onClick={toCountAddition}>+</button>
            </div>
            <br />
            <p className="message"> {count} days  from today is {calculateNewFormattedDate(count)}</p>
        </div>
    );
}

export default App;
