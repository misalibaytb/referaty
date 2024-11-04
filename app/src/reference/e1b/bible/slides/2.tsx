export default () => {
    
    return (<div>
            <div className="slideContent">
                <div className="slideContent__title"><span>Co to je bible?</span></div>
                <div className="slideContent__text">
                    <p><span>Bible je soubor posvátných textů, které jsou klíčové pro:</span></p>
                    <ul>
                        <li><span>křesťanství</span></li>
                        <li><span>judaismus</span></li>
                        <li><span>a mnoho dalších</span></li>
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
                    display: inline-block;
                }
                .slideContent__text ul {
                    text-align: left;
                }
            `}</style>
    </div>);
}