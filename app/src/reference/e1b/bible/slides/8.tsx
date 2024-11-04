import React, { useEffect, useState } from "react";
import VoyagerMp3 from "../assets/voyager.mp3";

export default () => {
    return <div>
        <div className="slideContent">
            <div className="slideContent__title"><span>Děkuji za pozornost</span></div>
            <div className="slideContent__text">
                <span>Zdroje:</span>
                <ul>
                    <li><a href="https://en.wikipedia.org/wiki/Bible" target="_blank">Wikipedia - Bible</a></li>
                    <li><a href="https://cs.wikipedia.org/wiki/Bible" target="_blank">Wikipedia - Bible</a></li>

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