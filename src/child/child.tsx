import React from 'react';

interface ContainerProps {
    title: string;
    users: JSX.Element;
}

export const Container: React.FC<ContainerProps> = ({title, users}) => {
    return (
        <div className="container">
            <h2>{title}</h2>
            {users}
        </div>
    )
}