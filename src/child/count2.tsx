import {useState} from 'react';

const Count2 = () => {
    const [count2, setCount2] = useState(0);

    return (
        <div>
            <input type="text" onChange={
                (e) => {setCount2(e.target.value)}
            }/>
            <p>あなたは{count2}と入力しました</p>
        </div>
    )
}

export default Count2;