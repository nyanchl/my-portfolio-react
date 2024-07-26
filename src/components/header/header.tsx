import { HeaderText } from "../atomics/header_text";

export const Header = () => {
    <>
        <div>
            <HeaderText link="/" color="#5C5959" text="About" />
            <HeaderText link="/about" color="#5C5959" text="Skill" />
            <HeaderText link="/contact" color="#5C5959" text="Works" />
        </div>
    </>
}