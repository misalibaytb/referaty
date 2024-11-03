import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const keys = {
    space: 32,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    "f11": 122,
    "esc": 27,
};

export default ({
    slides
}: {
    slides: any[]
}) => {
    const [slide, setSlide] = useState(0);
    const [fullscreen, setFullscreen] = useState(false);
    const [fullscreenHide, setFullscreenHide] = useState(0); // 0 = show, 1 = hide, 2 = hidden
    const [dismissFullscreen, setDismissFullscreen] = useState(false);
 
    useEffect(() => {
        const url = window.location.href;
        // @ts-ignore
        const slideNumber = parseInt(url.split("/").pop());
        if (!isNaN(slideNumber)) {
            if (slideNumber > slides.length - 1) return;
            setSlide(slideNumber);
        }
        setFullscreen(document.fullscreenElement !== null);
        // remove all history and replace with current url
        window.history.replaceState({}, "", `${window.location.href}`);
    }, []);

    useEffect(() => {
        if (dismissFullscreen && fullscreenHide === 0) {
            setFullscreenHide(1);
            setTimeout(() => {
                setFullscreenHide(2);
            }, 1000);
        } else
            if (fullscreen && !dismissFullscreen && fullscreenHide === 0) {
                setFullscreenHide(1);
                setTimeout(() => {
                    setFullscreenHide(2);
                }, 1000);
            } else
                if (!fullscreen && !dismissFullscreen && fullscreenHide === 2) {
                    setFullscreenHide(1);
                    setTimeout(() => {
                        setFullscreenHide(0);
                    }, 100);
                }
    }, [fullscreen, dismissFullscreen]);

    const [currentRender, setCurrentRender]: [any[], any] = useState([]);
    const [showMenu, setShowMenu] = useState(false);
    let xMenu = setTimeout(() => {
        setShowMenu(false);
    }, 10000);
    window.addEventListener("mousemove", () => {
        setShowMenu(true);
        clearTimeout(xMenu);
        xMenu = setTimeout(() => {
            setShowMenu(false);
        }, 3000);
    });
    const gotoSlide = useCallback((slide: number) => {
        setSlide(currentSlide => {
            if (slide < 0) {
                return 0;
            } else if (slide >= slides.length) {
                return slides.length - 1;
            } else {
                return slide;
            }
        });
    }, [slides]);

    useEffect(() => {
        const url = window.location.href;
        // @ts-ignore
        const slideNumber = parseInt(url.split("/").pop());
        if (!isNaN(slideNumber)) {
            const curl = url.split("/").slice(0, -1).join("/")
            window.history.replaceState({}, "", `${curl}${curl.endsWith("/") ? "" : "/"}${slide}`);
        } else {
            window.history.pushState({}, "", `${url}${url.endsWith("/") ? "" : "/"}${slide}`);
        }
        if (slide < 0) return setSlide(0);
        if (slide >= slides.length) return setSlide(slides.length - 1);
        const slidesDiv = document.getElementById("slideDiv");
        // @ts-ignore
        slidesDiv.style.marginLeft = `-${slide * 100}%`;
        // for every span make writing animation
        const slideDiv = document.getElementById(`slide${slide}`);
        // select all spans and a tags into one array
        // @ts-ignore
        const spans = slideDiv.querySelectorAll("span, a");
        const spanQueue: any[] = [];
        if (currentRender.includes(slide)) return;
        setCurrentRender([
            ...currentRender,
            slide
        ])

        for (let i = 0; i < spans.length; i++) {
            const span = spans[i];
            // @ts-ignore
            const text = span.innerHTML.replaceAll(" ", " ").replaceAll("<br>", "¤");
            // @ts-ignore
            span.innerText = "";
            const spanQueueData = {
                spanDiv: span,
                text: text,
                index: 0
            }
            setTimeout(() => {
                spanQueue.push(spanQueueData);
            }, i * 100);
        }
        setTimeout(() => {
            const interval = setInterval(() => {
                if (spanQueue.length > 0) {
                    const spanQueueData = spanQueue[0];
                    if (spanQueueData.spanDiv.classList.contains("revealClick")) return;
                    spanQueueData.spanDiv.classList.add("spanWaiting");
                    if (spanQueueData.text[spanQueueData.index] === "¤") {
                        spanQueueData.spanDiv.innerHTML += "<br>";
                    } else spanQueueData.spanDiv.innerHTML += spanQueueData.text[spanQueueData.index];
                    spanQueueData.index++;
                    if (spanQueueData.index >= spanQueueData.text.length) {
                        spanQueueData.spanDiv.classList.remove("spanWaiting");
                        spanQueue.shift();
                        spanQueueData.spanDiv.innerHTML = spanQueueData.text.replaceAll("¤", "<br>").replaceAll(" ", " ");
                    }
                } else {
                    clearInterval(interval);
                }
            }, 75);
        }, 500);
    }, [slide]);

    useEffect(() => {
        const handleKeyDown = (e: any) => {
            const url = window.location.href;
            // @ts-ignore
            const slideNumber = parseInt(url.split("/").pop());
            let currentSlide = slideNumber === undefined || isNaN(slideNumber) || slideNumber === null ? 0 : slideNumber;
            if (currentSlide === undefined || isNaN(currentSlide) || currentSlide === null) setSlide(0);
            if (e.keyCode === keys.space) {
                const slideDiv = document.getElementById(`slide${slideNumber}`);
                // @ts-ignore
                const firstRevealSpan = slideDiv.querySelector(".revealClick");
                console.log(firstRevealSpan)
                if (firstRevealSpan !== null) {
                    firstRevealSpan.classList.remove("revealClick");
                    return;
                }
                if (currentSlide < slides.length - 1) {
                    setSlide(currentSlide + 1);
                }
            } else if (e.keyCode === keys.right) {
                if (currentSlide < slides.length - 1) {
                    setSlide(currentSlide + 1);
                }
            } if (e.keyCode === keys.left) {
                if (currentSlide > 0) {
                    setSlide(currentSlide - 1);
                }
            } else if (e.keyCode === keys.up) {
                setSlide(0);
            } else if (e.keyCode === keys.down) {
                setSlide(slides.length - 1);
            } else if (e.keyCode === keys["f11"]) {
                setFullscreen(document.fullscreenElement !== null);
            } else if (e.keyCode === keys.esc) {
                setFullscreen(false);
            }
        };
        document.body.addEventListener("fullscreenchange", () => {
            console.log("fullscreenchange")
            setFullscreen(document.fullscreenElement !== null);
        });
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("click", (e: any) => {
            if (e.target.tagName.toLowerCase() === "a" || e.target.tagName.toLowerCase() === "button" || e.target.classList.contains("MenuButton") || e.target.tagName.toLowerCase() === "p") return;
            const url = window.location.href;
            // @ts-ignore
            const slideNumber = parseInt(url.split("/").pop());
            let currentSlide = slideNumber === undefined || isNaN(slideNumber) || slideNumber === null ? 0 : slideNumber;
            const slideDiv = document.getElementById(`slide${slideNumber}`);
            // @ts-ignore
            const firstRevealSpan = slideDiv.querySelector(".revealClick");
            console.log(firstRevealSpan, e.target)
            if (firstRevealSpan !== null) {
                firstRevealSpan.classList.remove("revealClick");
                return;
            }
            if (currentSlide < slides.length - 1) {
                setSlide(currentSlide + 1);
            }
        });
        return () => {
            // @ts-ignore
            window.removeEventListener("keydown", handleKeyDown);
            // @ts-ignore
            window.removeEventListener("fullscreenchange", () => {
                console.log("fullscreenchange")
                setFullscreen(document.fullscreenElement !== null);
            });
        };
    }, []);

    return <div style={{ width: "100%", maxWidth: "100%", height: "100%", position: "relative", overflow: "hidden" }}>
        {
            <div className="MenuButton" style={{
                position: "fixed", zIndex: 10000, width: "100%", height: "100%", top: 0, left: 0, backgroundColor: "rgba(0,0,0,0.75)", color: "white", display: fullscreenHide === 2 ? "none" : "flex", flexDirection: "column", flexWrap: "wrap", justifyContent: "center", alignItems: "center", alignContent: "center", opacity: fullscreenHide !== 0 ? 0 : 1, transition: "opacity 1s", cursor: "unset"
            }}>
                <p>Use the F11 key to view the presentation in fullscreen</p>
                <p>Use the arrow keys, spacebar, or click the buttons below to navigate</p>

                <div className="MenuButton" onClick={() => {
                    document.body.requestFullscreen();
                }}>
                    <p>Use fullscreen</p>
                </div>

                <div className="MenuButton" onClick={() => setDismissFullscreen(true)}>
                    <p>I don't want to use fullscreen</p>
                </div>
            </div>
        }
        <div className="Progress" style={{ width: `100%`, marginTop: showMenu ? "-45px" : "-50px" }}>
            <div className="ProgressFill" style={{ width: `${slide / (slides.length - 1) * 100}%`, height: "55px", backgroundColor: "lime" }}></div>
        </div>
        <div className="slideDiv" id="slideDiv" style={{ width: `${slides.length * 100}%`, maxWidth: `${slides.length * 100}%`, overflow: 'hidden' }}>
            {
                slides.map((Slide: any, index: any) => {
                    return <div className="slide" key={index} id={`slide${index}`}>
                        <Slide />
                    </div>;
                })
            }

        </div>
        <div className="RenderAd" style={{ position: "fixed", bottom: 0, right: 0, zIndex: 1000, opacity: showMenu ? 1 : 0.35, paddingRight: 15 }}>
            <p>Using refmis engine by <a href="https://michlip.eu" target="_blank">michlip.eu</a></p>
        </div>
        <div className="Menu" style={{ opacity: showMenu ? 1 : 0 }}>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <div className="MenuButton" onClick={() => window.location.href = "/"}>
                <p style={{ color: "red", fontWeight: "bold" }}>Back to Home</p>
            </div>
            <div className="MenuButton" onClick={() => gotoSlide(0)}>
                <p>Start</p>
            </div>
            <div className="MenuButton" onClick={() => gotoSlide(slide - 1)}>
                <p>Previous</p>
            </div>
            <div className="MenuButton" onClick={() => gotoSlide(slide + 1)}>
                <p>Next</p>
            </div>
            <div className="MenuButton" onClick={() => gotoSlide(slides.length - 1)}>
                <p>End</p>
            </div>
        </div>
        <style>{`
            .Progress {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 55px;
                background-color: transparent;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                align-content: center;
                transition: margin-top 1s;
            }
            .ProgressFill {
                border-radius: 0 0 10px 10px;
                height: 55px;
                transition: width 1s;
            }
            .Menu {
                position: fixed;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 50px;
                background-color: #000000;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                align-content: center;
                transition: opacity 1s;
            }
            .MenuButton {
                min-width: 100px;
                height: 50px;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                align-content: center;
                cursor: pointer;
            }
            .MenuButton p {
                margin: 0;
                padding: 0;
                font-size: 20px;
            }
            .slideDiv {
                min-width: 100%;
                height: 100vh;
                max-width: 100vw;
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                justify-content: flex-start;
                align-items: center;
                align-content: center;
                transition: margin-left 1s;
            }
            .slide {
                width: 100%;
                max-width: 100vw;
                height: 100%;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;;
                justify-content: center;
                align-items: center;
                align-content: center;
            }
            .spanWaiting::after {
                content: "|";
                animation: blink 1s infinite;
            }
            @keyframes blink {
                50% {
                    opacity: 0;
                }
            }
            a {
                color: LightBlue;
                text-decoration: none;
            }
            a:hover {
                color: LightBlue;
                text-decoration: underline;
                transform: scale(1.3);
            }
        `}</style>
    </div>;
}