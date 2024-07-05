import {useState} from 'react';

const Count3 = () => {
    const [count3, setCount3] = useState(0);

    return (
        <div>
            <input type="text" onChange={
                (e) => {setCount3(e.target.value)}
            }/>
            <p>あなたは{count3}と入力しました</p>
        </div>
    )
}

export default Count3;