import React, { useEffect, useState } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import App from './pages/index';
import App9B from './pages/9B';
import AppE1B from './pages/E1B';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReferenceSpanek from './reference/9b/spanek/index';
import ReferenceViditelneSvetlo from './reference/9b/viditelne-svetlo/index';
import ReferenceJohnLennon from './reference/9b/john-lennon/index';
import ReferenceDiamant from './reference/9b/diamant/index';
import ReferenceOsvetim from './reference/9b/osvetim/index';
import ReferenceUfo from './reference/9b/ufo/index';
import ReferenceFrantisekXaverSalda from './reference/9b/frantisek-xaver-salda/index';
import ReferenceErikRemarque from './reference/9b/erik-remarque/index';
import ReferenceTsunami from './reference/9b/tsunami/index';

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



        <Route path="/reference/9b/" element={<App9B />} />
        <Route path="/reference/E1B/" element={<AppE1B />} />
        <Route path="*" element={<App />} />
      </Routes>
    </>
  );
}

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Web />
  </BrowserRouter>
);
