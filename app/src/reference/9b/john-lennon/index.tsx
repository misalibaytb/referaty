import { useState } from "react";
import Slide1 from "./slides/1";
import Slide2 from "./slides/2";
import Slide3 from "./slides/3";
import ReferenceUI from "@/pages/referenceUI";

export default () => {
    const [slides, setSlides] = useState([
        Slide1,
        Slide2,
        Slide3
    ]);
    
    return <ReferenceUI slides={slides}/>;
}