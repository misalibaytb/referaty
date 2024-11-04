import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default () => {
    const imageClick = (e) => {
        e.preventDefault();
        e.target.classList.toggle("activeImg");
    };    
    return <div>
        <div className="slideContent">
            <div className="slideContent__title"><span>Starý zákon</span></div>
            <div className="slideContent__text">
                <ul>
                    <li><span>Starší část Bible, původně napsaná v hebrejštině a aramejštině.</span></li>
                    <li><span>Obsahuje Tóru, prorocké knihy a další spisy.</span></li>
                    <li><span>Popisuje historii izraelského národa a jeho náboženské zvyklosti.</span></li>
                    <li><span>Považován za závazný text pro judaismus, pro křesťany je přípravou na příchod Krista.</span></li>
                    <li><span>Texty vznikaly během několika staletí.</span></li>
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
                    .slideContent__text ol {
                        display: inline-block;
                        text-align: left;
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





            </div>
        </div>
    </div>;
}