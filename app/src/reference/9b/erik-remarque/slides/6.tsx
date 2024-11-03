import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default () => {

    return <div>
        <div className="slideContent">
            <div className="slideContent__title"><span>6. Filmy</span></div>
            <div className="slideContent__text">
                <ul>
                    <li><span>"Na západní frontě klid":</span></li>
                    <li><span>1930 - držitel Oscara za nejlepší film</span></li>
                    <li><span>1979 - televizní remake</span></li>
                    <li><span>2022 - nedávná vydání na  Netflixu</span></li>
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