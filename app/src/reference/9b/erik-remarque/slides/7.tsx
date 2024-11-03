import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default () => {

    return <div>
        <div className="slideContent">
            <div className="slideContent__title"><span>7. Vyhnanství a pozdější život</span></div>
            <div className="slideContent__text">
                <ul>
                    <li><span>Nacistické pronásledování: Remarqueovy knihy byly zakázány kvůli jejich protiválečným náladám. V roce 1933 opustil Německo.</span></li>
                    <li><span>Švýcarsko: Nalezl útočiště a nakonec i občanství.</span></li>
                    <li><span>Manželství s Paulette Goddardovou: Goddard: vysoce prestižní vztah s hollywoodskou herečkou.</span></li>
                    <li><span>United States: Spent significant time in the U.S, particularly  California.</span></li>
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