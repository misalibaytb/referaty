import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default () => {

    return <div>
        <div className="slideContent">
            <div className="slideContent__title"><span>2. Raný život</span></div>
            <div className="slideContent__text">
                <ul>
                    <li><span>Narozen: 22. června 1898, Osnabrück, Německo.</span></li>
                    <li><span>Původní název: Erich Paul Remark</span></li>
                    <li><span>Rodina: dělnický původ, otec byl knihař.</span></li>
                    <li><span>Vzdělání: Přerušeno vojenskou službou v první světové válce.</span></li>
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
                    display: inline-block;
                }
                .slideContent__text ul {
                    text-align: left;
                }
            `}</style>

    </div>;
}