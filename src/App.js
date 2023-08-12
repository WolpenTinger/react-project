import './App.css';

import React, { useState, useEffect } from "react";
import Generate from './templates/Windows/Generate';

export default function App() {
    let site = {
        name: 0,
        descr: 0
    }
    ///// пиздец

    const [siteName, setSiteName] = useState('');
    const [siteDescr, setSiteDescr] = useState('');
    const [siteLogo, setSiteLogo] = useState('');
    const [siteFixedHeader, setSiteFixedHeader] = useState('');
    const [showComponent, setShowComponent] = useState(true);

    const handleInputChange1 = (event) => {
        setSiteName(event.target.value);
    };

    const handleInputChange2 = (event) => {
        setSiteDescr(event.target.value);
    };

    const handleInputChange3 = (event) => {
        setSiteLogo(event.target.value);
    };

    const handleInputChange4 = (event) => {
        setSiteFixedHeader(event.target.value);
    };

    const handleGenerateClick = () => {
        setShowComponent(false);
      
        console.log(siteName)
        console.log(showComponent)
    };


    return (
        <div className='container'>
            {showComponent && (
                <div className='d-flex flex-column'>
                    <label className='mt-2'>
                        <h3>Site Name:</h3>
                        <input type="text" value={siteName} onChange={handleInputChange1} />
                    </label>
                    <label className='mt-2'>
                        <h3>Description</h3>
                        <input className='w-50' type="text" value={siteDescr} onChange={handleInputChange2} />
                    </label>
                    <label className='mt-2'>
                        <h3>Header logo</h3>
                        <input className='' type="file" value={siteLogo} onChange={handleInputChange3} />
                    </label>
                    <label className='mt-2'>
                        <h3>Header fixed</h3>
                        <input className='' type="checkbox" value={siteFixedHeader} onChange={handleInputChange4} />
                    </label>
                </div>
                
            )}

            {showComponent && (
                <button className="btn btn-primary mt-3" onClick={handleGenerateClick}>Generate</button>
            )}

            {!showComponent && <Generate siteName={siteName} siteDescr={siteDescr} />}
        </div>
    );
}