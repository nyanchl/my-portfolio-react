import {useState} from 'react';
import '../App.css'

const Count = (props) => {
    const [count, setCount] = useState(0);

    console.log(props)

    return (
        <div>
            <div className={`component ${props.color}`}>
                <h3>Hello!</h3>
            </div>
            <input type="text" onChange={
                (e) => {setCount(e.target.value)}
            }/>
            <p>あなたは{count}と入力しました</p>
        </div>
    )
}

export default Count;