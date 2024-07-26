type HeaderTextProps = {
    link: string,
    color: string,
    text: string,
}

export const HeaderText = (props: HeaderTextProps) => {
    return <a href={props.link} color={props.color}>{props.text}</a>
}