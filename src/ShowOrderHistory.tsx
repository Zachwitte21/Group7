import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function ShowOrderHistory(): JSX.Element {
    const [buttonLabel, setButtonLabel] =
        useState<string>("Show Order History");

    function changeLabel(): void {
        if (buttonLabel == "Show Order History") {
            setButtonLabel("Hide Order History");
        } else {
            setButtonLabel("Show Order History");
        }
    }

    return (
        <div>
            <Button onClick={changeLabel}>{buttonLabel}</Button>
        </div>
    );
}

export {};
