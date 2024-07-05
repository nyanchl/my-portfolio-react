import './title.css';

export const Title = ({color = "white"}) => {
    console.log(color);
    const username = "Nyanchl"
    return (
        <div className={`component ${color}`}>
            <h2>Hello {username}</h2>
        </div>
    )
}