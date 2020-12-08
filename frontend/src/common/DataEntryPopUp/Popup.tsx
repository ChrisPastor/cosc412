import { Button } from "primereact/button";
import React, { useState } from "react";
import {InputNumber} from "primereact/inputnumber";
import "./PopUp.scss";

interface PopUpProps {
    handleClose: ()=> void,
    show: boolean,
    metric: string,
}

export const PopUp = (props: PopUpProps): JSX.Element => {
    const {
        handleClose,
        show,
        metric,
    } = props;

    const [inputValue, setInputValue] = useState<number>();

    function addMetric() {
        //create user entry
        //add user entry to game user
        //send new info to backend
    }

    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <div className="modal-main">
                <div className="modal-title">
                    Enter Data
                    <Button icon="pi pi-times" className="p-mr-2 " onClick={handleClose}/>
                </div>
                <span className="p-float-label">
                    <InputNumber id="metric-input" value={inputValue} onValueChange={(e)=> setInputValue(e.value)} mode={"decimal"} suffix=" lbs"/>
                    <label htmlFor="metric-input">{metric} entry</label>
                </span>
                <Button className="p-mr-2" label="submit" onClick={addMetric}/>
            </div>
        </div>
    );
};

