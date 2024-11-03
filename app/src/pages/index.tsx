import React, { useEffect, useState } from "react";
import J9B from "../assets/image/j/9B.png";
import E1B from "../assets/image/j/E1B.png";
import { useNavigate } from "react-router-dom";

export default function App() {
    const navigate = useNavigate();
    const gotoReference = (Reference: string | number) => {
            navigate(`/reference/${Reference}`);
    };
    return <div>

        <div className="References" id="References">
            <div className="Reference" onClick={() => gotoReference("9b")} >
                <div className="ReferenceTitle">
                    <h1>9.B.</h1>
                </div>
                <img src={J9B} alt="Reference Picture" className="ReferencePicture" />
                <div className="ReferenceAuthor">
                    <p>Authors: M. A. R.</p>
                    <p>Date: 2023-2024</p>
                </div>
            </div>
            <div className="Reference" onClick={() => gotoReference("E1B")} >
                <div className="ReferenceTitle">
                    <h1>E1B</h1>
                </div>
                <img src={E1B} alt="Reference Picture" className="ReferencePicture" />
                <div className="ReferenceAuthor">
                    <p>Authors: M.</p>
                    <p>Date: 2024-2025</p>
                </div>
            </div>
        </div>
    </div>;
}