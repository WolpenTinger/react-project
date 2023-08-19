import './App.css';

import React, { useState, useEffect } from "react";
import Generate from './templates/Windows/Generate';

export default function App() {

   const [site, setSite] = useState({
      name : '',
      descr : '',
      headerFixed : '',
      headerColor : '',
      menu: [],
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


    ///////////////////////////////////////////////////////
    const [tabs, setTabs] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isEditable, setIsEditable] = useState(true);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddTab = () => {
        if (tabs.length < 7) {
            setTabs([...tabs, inputValue.trim()]);
            setInputValue('');
        }
    };

    const handleSaveTabs = () => {
        setIsEditable(false);
        site.menu = tabs.map((tab) => ({ name: tab }));
        console.log(site.menu); // Выводим новый массив объектов в консоль
    }; 
    //////////////////////////////////////////////////////////

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


                    <label className='mt-2'>
                        <h3>Menu</h3>
                        <input type="text" value={inputValue} onChange={handleInputChange} disabled={!isEditable} />
                        <button onClick={handleAddTab} disabled={!isEditable}>Add</button>
                        <button onClick={handleSaveTabs} disabled={!isEditable}>Save</button>
                        <ul>
                            {tabs.map((tab, index) => (
                                <li key={index}>{tab}</li>
                                
                            ))}
                        </ul> 
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