import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default () => {
    const imageClick = (e) => {
        e.preventDefault();
        e.target.classList.toggle("activeImg");
    };

    return <div>
        <div className="slideContent">
            <div className="slideContent__title"><span>Zdroje?</span></div>
            <div className="slideContent__text">
                <p><span>Wikipedie.</span></p>
                <p><span>Youtube.</span></p>
                <p><span>Gemini (Promty: Jaké filmy se natáčely o Erichu M. Remarqueovi? Jaká je jeho literální stopa?) (Ověřeno na wikipedii a k tomu doplněno ChatGPT)</span></p>
                <p><span>ChatGPT (Promty: Jaké filmy se natáčely o Erichu M. Remarqueovi? Jaká je jeho literální stopa?) (Ověřeno i na wikipedii)</span></p>
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
                .slideContent__text__graph {
                    width: 30%;
                    height: 30%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    transform: translateX(50%);
                }
                .slideContent__text__graph img {
                    width: 100%;
                    height: 100%;
                    cursor: pointer;
                }
                .slideContent__text__graph img.activeImg {
                    transform: translate(50%, -50%) scale(2);
                }
            `}</style>

    </div>;
}