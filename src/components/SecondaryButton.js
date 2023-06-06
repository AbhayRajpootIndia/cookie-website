import React from "react";

export default function SecondaryButton(props) {
    return (
        <>
            <div className="secondary-button" onClick={props.onClick}>
                {props.text}
            </div>
        </>
    );
}