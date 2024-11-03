import { useState } from "react";
import Slide1 from "./slides/1";
import Slide2 from "./slides/2";
import Slide3 from "./slides/3";
import Slide4 from "./slides/4";
import Slide5 from "./slides/5";
import Slide6 from "./slides/6";

import ReferenceUI from "@/pages/referenceUI";

export default () => {
    const [slides, setSlides] = useState([
        Slide1,
        Slide2,
        Slide3,
        Slide4,
        Slide5,
        Slide6,
    ]);
    
    return <ReferenceUI slides={slides}/>;
}