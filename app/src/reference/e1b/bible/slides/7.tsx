import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default () => {

    return <div>
        <div className="slideContent">
            <div className="slideContent__title"><span>Historický a kulturní význam Bible</span></div>
            <div className="slideContent__text">
                <ul>
                    <li><span>Bible ovlivnila náboženství, morálku a etické zásady ve společnosti.</span></li>
                    <li><span>Inspirovala umělce v malířství, literatuře a hudbě.</span></li>
                    <li><span>Je základním textem pro mnoho společenských hodnot a zákonů.</span></li>
                    <li><span>Slouží jako morální kompas pro osobní a duchovní život.</span></li>
                    <li><span>Její význam přetrvává i v moderní společnosti.</span></li>
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