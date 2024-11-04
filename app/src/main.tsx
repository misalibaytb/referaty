import React, { useEffect, useState } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import App from './pages/index';
import App9B from './pages/9B';
import AppE1B from './pages/E1B';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReferenceSpanek from './reference/9b/spanek';
import ReferenceViditelneSvetlo from './reference/9b/viditelne-svetlo';
import ReferenceJohnLennon from './reference/9b/john-lennon';
import ReferenceDiamant from './reference/9b/diamant';
import ReferenceOsvetim from './reference/9b/osvetim';
import ReferenceUfo from './reference/9b/ufo';
import ReferenceFrantisekXaverSalda from './reference/9b/frantisek-xaver-salda';
import ReferenceErikRemarque from './reference/9b/erik-remarque';
import ReferenceTsunami from './reference/9b/tsunami';

import ReferenceBible from './reference/e1b/bible'

const ReferenceStyle = () => {
  return <style>{`
    .References {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                align-content: center;
                width: 100%;
                height: 100%;
                min-height: 100vh;
                max-width: 100vw;
            }
            .Reference {
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                align-content: center;
                width: 300px;
                height: 350px;
                margin: 10px;
                border: 1px solid black;
                cursor: pointer;
                margin-left: 30px;
                margin-right: 30px;
            }
            .Reference:hover {
                transform: scale(1.1);
            }
            .ReferenceTitle {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                align-content: center;
                width: 100%;
                height: 50px;
                font-size: 15px;
                border: 1px solid black;
            }
            .ReferencePicture {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                align-content: center;
                width: auto;
                height: 175px;
                border: 1px solid black;
            }
            .ReferenceDescription {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                align-content: center;
                width: 100%;
                height: 50px;
                border: 1px solid black;
            }
            .ReferenceAuthor {
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                align-content: center;
                width: 100%;
                height: 100px;
                border: 1px solid black;
            }
            `}</style>;
}

function Web() {
  return (
    <>
      <Routes>
        <Route path="/reference/9b/spanek/*" element={<ReferenceSpanek />} />
        <Route path="/reference/9b/viditelne-svetlo/*" element={<ReferenceViditelneSvetlo />} />
        <Route path="/reference/9b/john-lennon/*" element={<ReferenceJohnLennon />} />
        <Route path="/reference/9b/diamant/*" element={<ReferenceDiamant />} />
        <Route path="/reference/9b/osvetim/*" element={<ReferenceOsvetim />} />
        <Route path="/reference/9b/ufo/*" element={<ReferenceUfo />} />
        <Route path="/reference/9b/frantisek-xaver-salda/*" element={<ReferenceFrantisekXaverSalda />} />
        <Route path="/reference/9b/tsunami/*" element={<ReferenceTsunami />} />
        <Route path="/reference/9b/erik-remarque/*" element={<ReferenceErikRemarque />} />

        <Route path="/reference/E1B/bible/*" element={<ReferenceBible />} />

        <Route path="/reference/9b/" element={<><App9B /> <ReferenceStyle /></>} />
        <Route path="/reference/E1B/" element={<><AppE1B /> <ReferenceStyle /></>} />
        <Route path="*" element={<> <App /> <ReferenceStyle /></>} />
      </Routes>
    </>
  );
}

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Web />
  </BrowserRouter>
);
