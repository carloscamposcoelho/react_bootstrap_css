import React from "react";
import "./style.css";

export default function Header({ title, description, theme, align }) {

    function getThemeOrDefault(theme) {
        switch (theme) {
            case "light":
            case "dark":
                return theme;
            default:
                return "dark";
        }
    }

    function getAlignOrDefault(align) {
        switch (align) {
            case "center":
            case "left":
                return align;
            default:
                return "center";
        }
    }

    return (
        <div className={getThemeOrDefault(theme) + " " + getAlignOrDefault(align)}>
            { title && (<h1>{title}</h1>)}
            { description && (<p>{description}</p>)}
        </div>
    )
}