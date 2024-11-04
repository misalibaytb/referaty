import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default () => {
    const imageClick = (e) => {
        e.preventDefault();
        e.target.classList.toggle("activeImg");
    };   

    return <div>
        <div className="slideContent">
            <div className="slideContent__title"><span>Překlady a vliv Bible</span></div>
            <div className="slideContent__text">
                <ul>
                    <li><span>Bible byla přeložena do mnoha jazyků, což pomohlo šíření křesťanství.</span></li>
                    <li><span>V češtině existuje několik překladů, jako je historická Bible kralická.</span></li>
                    <li><span>Překlady zpřístupňují text současným čtenářům.</span></li>
                    <li><span>Bible ovlivnila literaturu, umění, filozofii a právo.</span></li>
                    <li><span>I dnes je inspirací pro miliony lidí.</span></li>
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