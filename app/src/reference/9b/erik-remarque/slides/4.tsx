import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default () => {
    return <div>
        <div className="slideContent">
            <div className="slideContent__title"><span>4.  Na západní frontě je klid</span></div>
            <div className="slideContent__text">
                <p><span>Publikováno: 1929</span></p>
                <p><span>Děj: Mladý německý voják Paul Bäumer vypráví své zážitky ze západní fronty. Román líčí krutou realitu zákopové války.</span></p>
                <ol>
                    <li><span>Témata: deziluze, ztráta nevinnosti, kamarádství, marnost války.</span></li>
                    <li><span>Poznámky řečníka:  "Remarque je nejslavnějším dílem a je považován za zásadní protiválečný román. Jeho strohá, nesentimentální próza měla obrovský vliv na vnímání války veřejností. Všimněte si, že byl nacistickým režimem zakázán a spálen.</span></li>
                </ol>
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