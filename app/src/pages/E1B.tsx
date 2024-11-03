import React, { useEffect, useState } from "react";
import ReferenceSpanekImg from "../assets/image/Reference/spanek.png";
import { useNavigate } from "react-router-dom";

export default function App() {
    const navigate = useNavigate();
    const gotoReference = (Reference: string | number) => {
        const references = document.getElementById("References") as any;
        references.style.opacity = 0;
        setTimeout(() => {
            navigate(`/reference/E1B/${Reference}`);
        }, 1000);
    };
    return <div>
        <div className="References" id="References">
            <div className="Reference" onClick={() => gotoReference("spanek")} >
                <div className="ReferenceTitle">
                    <h1>Spánek</h1>
                </div>
                <img src={ReferenceSpanekImg} alt="Reference Picture" className="ReferencePicture" />
                <div className="ReferenceAuthor">
                    <p>Authors: Michal Líbal & Antonín Šulc</p>
                </div>
            </div>
        </div>
    </div>;
}