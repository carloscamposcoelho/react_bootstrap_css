import React from "react";
import "./style.css";

export default function Header({ title, description }) {

    return (
        <div className="section-title">
            { title && (<h1>{title}</h1>)}
            { description && (<p>{description}</p>)}
        </div>
    )
}