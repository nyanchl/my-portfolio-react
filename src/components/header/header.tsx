import { HeaderText } from "../atomics/header_text";

const Header = () => {
    return (
        <>
        <div>
            <HeaderText link="/" color="#5C5959" text="About" />
            <HeaderText link="/about" color="#5C5959" text="Skill" />
            <HeaderText link="/contact" color="#5C5959" text="Works" />
        </div>
    </>
    )
}

export default Header;