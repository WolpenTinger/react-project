import './App.css';

import React, { useState, useEffect } from "react";
import Generate from './templates/Windows/Generate';

export default function App() {

    

   const [site, setSite] = useState({
      name : '',
      descr : '',
      headerFixed : '',
      headerColor : ''

    //   logo : new FileReader(),
   }); 


   function edit(prop, event) {
    //   const copy = Object.assign({}, site);
      const copy = { ...site };
        

      if (prop === 'headerFixed') {
        copy[prop] = event.target.checked;
      } else {
        copy[prop] = event.target.value;
      }
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
                    {/* <label className='mt-2'>
                        <h3>Header logo</h3>
                        <input className=''  name="logo" type="file" onChange={event => edit('logo', event)} />
                    </label> */}
                    <label className='mt-2'>
                        <h3>Header fixed</h3>
                        <input className='' type="checkbox" checked={site.headerFixed} onChange={event => edit('headerFixed', event)} />
                    </label>
                    <label className='mt-2'>
                        <h3>header color</h3>
                        <input className='w-50' type="text" value={site.headerColor} onChange={event => edit('headerColor', event)} />
                    </label>
                </div>
                
            )}

            {showComponent && (
                <button className="btn btn-primary mt-3" onClick={handleGenerateClick}>Generate</button>
            )}

            {!showComponent && <Generate site={site} />}
        </div>
    );
}