import { useState } from "react";

const Practice = () => {
    const [count, setCount] = useState(0);
    const countup = () => {
        setCount(count + 1)
    }
    const countdown = () => {
        setCount(count - 1)
    }
    return (
        <div>
            <button onClick={countup}>+</button>
            <button onClick={countdown}>-</button>
            <p>{count}</p>
        </div>
    )
}

export default Practice;