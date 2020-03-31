import React, { useState } from 'react';
import TitleTransition from './TitleTransition';

function Main() {

    const [titleLoaded, setTitleLoaded] = useState(false);

    function handleLoad() { setTitleLoaded(true) };

    const title = "Title", subTitle = "Subtitle";

    return(
        <div id="home" className="hero flex-center">
            <div className="hero-message">
                <TitleTransition
                    elem={<h1 className="hero-title">{title}</h1>}
                    onEntered={handleLoad}
                />
                {titleLoaded ?
                    <TitleTransition
                        elem={<h2 className="hero-sub-title">{subTitle}</h2>}
                    />
                : <h2 className="hero-sub-title" style={{opacity:0}}>{subTitle}</h2>}
            </div>
        </div>
    );
}

export default Main;