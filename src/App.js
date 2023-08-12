import './App.css';

import React, { useState, useEffect } from "react";
import Generate from './templates/Windows/Generate';

export default function App() {

   const [site, setSite] = useState({
      name : 'awdasd',
      descr : ''
   }); 

   function edit(prop, event) {
      const copy = Object.assign({});
      copy[prop] = event.target.value;
      setSite(copy);
   }

    const [showComponent, setShowComponent] = useState(true);

    const handleGenerateClick = () => {
        setShowComponent(false);
    };


    return (
        <div className='container'>
            {showComponent && (
                <div className='d-flex flex-column'>
                    <label className='mt-2'>
                        <h3>Site Name:</h3>
                        <input type="text" value={site.name} onChange={event => edit('name', event)} />
                    </label>
                    <label className='mt-2'>
                        <h3>Description</h3>
                        <input className='w-50' type="text" value={site.descr} onChange={event => edit('descr', event)} />
                    </label>
                    {console.log(site.name)}
                    {/* <label className='mt-2'>
                        <h3>Header logo</h3>
                        <input className='' type="file" value={siteLogo} onChange={handleInputChange3} />
                    </label>
                    <label className='mt-2'>
                        <h3>Header fixed</h3>
                        <input className='' type="checkbox" value={siteFixedHeader} onChange={handleInputChange4} />
                    </label> */}
                </div>
                
            )}

            {showComponent && (
                <button className="btn btn-primary mt-3" onClick={handleGenerateClick}>Generate</button>
            )}

            {!showComponent && <Generate site={site} />}
        </div>
    );
}