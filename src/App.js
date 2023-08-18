import './App.css';

import React, { useState, useEffect } from "react";
import Generate from './templates/Windows/Generate';

function MenuModel(id, title) {
    return {
      id,
      title,
      status: 0 // 0 - pending, 1 - done
    }
} 

export default function App() {

    

   const [site, setSite] = useState({
      name : '',
      menu : [
        
      ],
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
      if(prop === 'menu') {
        copy.menu = [...copy.menu, input];
        console.log(copy)

      }
      
      setSite(copy);
   }


    const [menu, setMenu] = useState([])
    const [input, setInput] = useState('')

    const handleInputChange = (e) => {
        setInput(e.target.value)
    }


    const menuReducer = {
        remove: id => setMenu(menu.filter(t => t.id !== id)),
        add: (title) => setMenu([...menu, new MenuModel(menu.length, title)]),

    }


    const handleClickMenuBtn = e => {
        if(input !== '') {
        
        edit('menu', e)
        menuReducer.add(input)
        setInput('')
        }
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
                    <label >
                        <h3>Menu pages</h3>
                        <div className='mt-2 w-50 d-flex flex-column ' style={{columnGap : '50px'}}>
                        <input placeholder="Some menu"
                            className="menu__input"
                            value={input}
                            onChange={handleInputChange}
                            />
                            <button className='btn btn-primary mt-2 w-25'onClick={handleClickMenuBtn} >Добавить</button>

                            {
                            menu.map(t =>
                                <li key={t.id}
                                    className="menu__list__item">
                                <h6>{t.title}</h6>
                                <div>
                                    {/* {t.status === 0 ?
                                    <span onClick={() => menuReducer.setStatus(t.id, 1)}
                                            aria-label="mark icon"
                                            role="img">✅</span> */}
                                    {
                                        <span onClick={() => menuReducer.remove(t.id)}
                                            aria-label="delete icon"
                                            role="img">❌</span>
                                    }

                                </div>
                                </li>) 
                            }
                        </div>
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