import { useState } from "react";
import Slide1 from "./slides/1";
import Slide2 from "./slides/2";
import Slide3 from "./slides/3";
import Slide4 from "./slides/4";
import Slide5 from "./slides/5";
import Slide6 from "./slides/6";
import Slide7 from "./slides/7";
import Slide8 from "./slides/8";
import Slide9 from "./slides/9";
import Slide10 from "./slides/10";

import ReferenceUI from "@/pages/referenceUI";

export default () => {
    const [slides, setSlides] = useState([
        Slide1,
        Slide2,
        Slide3,
        Slide4,
        Slide5,
        Slide6,
        Slide7,
        Slide8,
        Slide9,
        Slide10
        
    ]);
    
    return <ReferenceUI slides={slides}/>;
}