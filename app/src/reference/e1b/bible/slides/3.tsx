import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default () => {
    return <div>
        <div className="slideContent">
            <div className="slideContent__title"><span>Bible - Základní informace</span></div>
            <div className="slideContent__text">
                <ul>
                    <li><span>Bible je jednou z nejvýznamnějších knih historie lidstva.</span></li>
                    <li><span>Skládá se ze Starého a Nového zákona, tvořených různými knihami.</span></li>
                    <li><span>Obsahuje různé literární žánry, jako jsou poezie, proroctví a historické záznamy.</span></li>
                    <li><span>Je klíčovým textem pro křesťanství a judaismus.</span></li>
                    <li><span>Má vliv i na další náboženství a filozofie.</span></li>
                </ul>
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
                        width: 35%;
                        height: 35%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        transform: translateX(50%) scale(0.5);
                    }
                    .slideContent__text__graph img {
                        width: 100%;
                        height: 100%;
                    }
                `}</style>





            </div>
        </div>
    </div>;
}