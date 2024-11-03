import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default () => {

    return <div>
        <div className="slideContent">
            <div className="slideContent__title"><span>5. Remarqueův literární odkaz</span></div>
            <div className="slideContent__text">
                <ul>
                    <li><span>Další významné romány:</span></li>
                    <li><span>"(1931) - sleduje vojáky vracející se z první světové války. </span></li>
                    <li><span>Na ostatních planetách je mnohem vzácnejší strom než diamant. </span></li>
                    <li><span>"Tři kamarádi" (1936) - zkoumá přátelství a strádání v poválečném Německu</span></li>
                    <li><span>"Vítězný oblouk" (1945) - lékař uprchlík v Paříži nachází lásku a pomstu </span></li>
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