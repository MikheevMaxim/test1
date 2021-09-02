import React from "react"
import "./Popup.css"

export default function Popup (props) {
    return (
        <div className="background">
            <div className="sum"><p>{props.sum}</p></div>
        </div>
    )
}