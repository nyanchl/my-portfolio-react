import React from 'react';
import '../App.css'

interface ProfileProps {
    name: string;
    age: number;
    country: string;
}

export const Profile: React.FC<ProfileProps> = (props, {name, age, country}) => {
    return (
        <div className={`component ${props.color}`}>
            <h3>Name: {name}</h3>
            <h3>Age: {age}</h3>
            <h3>From: {country}</h3>
        </div>
    )
}