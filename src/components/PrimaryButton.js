import React from "react";

export default function PrimaryButton(props) {
    return (
        <>
            <div className="primary-button" onClick={props.onClick}>
                {props.text}
            </div>
        </>
    );
}