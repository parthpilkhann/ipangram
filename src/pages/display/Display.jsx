import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import "./Display.css"


const Display = () => {
    const location = useLocation()
    const arr = Array.from(location.state);

    const nav = useNavigate();
    const handleBack = () => {
        nav("/", { state: location.state })
    }
    const newArr = [];
    return (
        <div  >
            {arr.forEach((page, i) => {
                newArr.push(
                    <div key={i} >
                        <h3>page no.-{i + 1}</h3>
                        <p>q1-{page.q1}</p>
                        <p>q2-{page.q2}</p>
                        <p>q3-{page.q3}</p>
                        <p>q4-{page.q4}</p>
                        <p>q5-{page.q5}</p>
                        <p>q6-{page.q6}</p>
                        <p>q7-{page.q7}</p>
                    </div>
                )
            }
            )}
            {newArr}
            <div className="backBtnContainer">
                <button type="click" className="btn btn-primary mt-3 backBtn" onClick={handleBack} >Back</button>
            </div>
        </div>
    )
}

export default Display
