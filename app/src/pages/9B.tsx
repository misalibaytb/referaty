import React, { useEffect, useState } from "react";
import ReferenceSpanekImg from "../assets/image/Reference/spanek.png";
import ReferenceViditelneSvetloImg from "../assets/image/Reference/viditelne-svetlo.png";
import ReferenceJohnLennonImg from "../assets/image/Reference/john-lennon.png";
import ReferenceDiamantImg from "../assets/image/Reference/diamant.png";
import ReferenceUFOImg from "../assets/image/Reference/ufo.png";
import ReferenceOsvetimImg from "../assets/image/Reference/osvetim.png";
import ReferenceFXSaldaImg from "../assets/image/Reference/fxsalda.jpg";
import ReferenceTsunamiImg from "../assets/image/Reference/tsunami.jpg";
import ReferenceErikMRemarqueImg from "../assets/image/Reference/ErikMRemarque.png";
import { useNavigate } from "react-router-dom";

export default function App() {
    const navigate = useNavigate();
    const gotoReference = (Reference: string | number) => {
        const references = document.getElementById("References") as any;
        references.style.opacity = 0;
        setTimeout(() => {
            navigate(`/reference/9b/${Reference}`);
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
            <div className="Reference" onClick={() => gotoReference("viditelne-svetlo")}>
                <div className="ReferenceTitle">
                    <h1>Viditelné Světlo</h1>
                </div>
                <img src={ReferenceViditelneSvetloImg} alt="Reference Picture" className="ReferencePicture" />
                <div className="ReferenceAuthor">
                    <p>Author: Michal Líbal</p>
                </div>
            </div>
            <div className="Reference" onClick={() => gotoReference("john-lennon")}>
                <div className="ReferenceTitle">
                    <h1>John Lennon</h1>
                </div>
                <img src={ReferenceJohnLennonImg} alt="Reference Picture" className="ReferencePicture" />
                <div className="ReferenceAuthor">
                    <p>Authors: Michal Líbal & Radim Halama</p>
                </div>
            </div>
            <div className="Reference" onClick={() => gotoReference("diamant")}>
                <div className="ReferenceTitle">
                    <h1>Diamant</h1>
                </div>
                <img src={ReferenceDiamantImg} alt="Reference Picture" className="ReferencePicture" />
                <div className="ReferenceAuthor">
                    <p>Author: Michal Líbal</p>
                </div>
            </div>
            <div className="Reference" onClick={() => gotoReference("ufo")}>
                <div className="ReferenceTitle">
                    <h1>UFO</h1>
                </div>
                <img src={ReferenceUFOImg} alt="Reference Picture" className="ReferencePicture" />
                <div className="ReferenceAuthor">
                    <p>Author: Michal Líbal</p>
                </div>
            </div>
            <div className="Reference" onClick={() => gotoReference("osvetim")}>
                <div className="ReferenceTitle">
                    <h1>Osvětim</h1>
                </div>
                <img src={ReferenceOsvetimImg} alt="Reference Picture" className="ReferencePicture" />
                <div className="ReferenceAuthor">
                    <p>Author: Michal Líbal</p>
                </div>
            </div>
            <div className="Reference" onClick={() => gotoReference("frantisek-xaver-salda")}>
                <div className="ReferenceTitle">
                    <h1>F. X. Šalda</h1>
                </div>
                <img src={ReferenceFXSaldaImg} alt="Reference Picture" className="ReferencePicture" />
                <div className="ReferenceAuthor">
                    <p>Author: Michal Líbal</p>
                </div>
            </div>
            <div className="Reference" onClick={() => gotoReference("tsunami")}>
                <div className="ReferenceTitle">
                    <h1>Tsunami</h1>
                </div>
                <img src={ReferenceTsunamiImg} alt="Reference Picture" className="ReferencePicture" />
                <div className="ReferenceAuthor">
                    <p>Author: Michal Líbal</p>
                </div>
            </div>
            <div className="Reference" onClick={() => gotoReference("erik-remarque")}>
                <div className="ReferenceTitle">
                    <h1>Erik M. Remarque</h1>
                </div>
                <img src={ReferenceErikMRemarqueImg} alt="Reference Picture" className="ReferencePicture" />
                <div className="ReferenceAuthor">
                    <p>Author: Michal Líbal</p>
                </div>
            </div>
        </div>
    </div>;
}