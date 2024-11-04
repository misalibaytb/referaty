import React, { useEffect, useState } from "react";
import ReferenceBiblekImg from "../assets/image/e1b/bible.png";
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
            <div className="Reference" onClick={() => gotoReference("bible")} >
                <div className="ReferenceTitle">
                    <h1>Bible</h1>
                </div>
                <img src={ReferenceBiblekImg} alt="Reference Picture" className="ReferencePicture" />
                <div className="ReferenceAuthor">
                    <p>Authors: Michal Líbal</p>
                </div>
            </div>
        </div>
    </div>;
}