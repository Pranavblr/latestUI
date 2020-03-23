import React from 'react';

import './Loader.css';

function Loader(){
    return(
        <div className="loader-backdrop">
            <div className={"align-center"}>
                <div className="loader"></div>
            </div>
        </div>
    )
}
export default Loader;