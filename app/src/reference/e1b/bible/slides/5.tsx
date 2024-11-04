import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default () => {
    
    return <div>
            <div className="slideContent">
            <div className="slideContent__title"><span>Nový zákon</span></div>
                <div className="slideContent__text">
                <ul>
                    <li><span>Soubor textů napsaný v řečtině, zaměřený na Ježíše Krista.</span></li>
                    <li><span>Obsahuje čtyři evangelia, která popisují jeho život a učení.</span></li>
                    <li><span>Dále zahrnuje Skutky apoštolů, apoštolské dopisy a knihu Zjevení.</span></li>
                    <li><span>Křesťané považují Nový zákon za splnění a naplnění Starého zákona.</span></li>
                    <li><span>Texty vznikly v prvních stoletích našeho letopočtu.</span></li>
                </ul>
                </div>
            </div>
            <style>{`
                .slideContent {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .slideContent__title {
                    font-size: 3em;
                    font-weight: bold;
                    margin-bottom: 20px;
                }
                .slideContent__text {
                    font-size: 1.5em;
                    text-align: center;
                }
            `}</style>

    </div>;
}