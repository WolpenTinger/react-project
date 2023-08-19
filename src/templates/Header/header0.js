import React from 'react';

const Header0 = ({site}) => {
    let headerColor = "background-color: " + site.headerColor
    let fixed = "navbar navbar-expand-md border-bottom"

    if(site.headerFixed) {
        fixed += " sticky-top"
    } 

    return (
      <nav className={fixed} data-bs-theme="dark" style={{backgroundColor : site.headerColor}}>
            <div className="container">
                <a className="navbar-brand d-md-none" href="#">
                    
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="#offcanvas" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" id="#offcanvas" aria-labelledby="#offcanvasLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="#offcanvasLabel">Aperture</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        {/*<ul className="navbar-nav flex-grow-1 justify-content-between">*/}
                        {/*    <li className="nav-item"><a className="nav-link" href="#">*/}
                        {/*        <svg className="bi" width="24" height="24"></svg>*/}
                        {/*    </a></li> */}
                        {/*    <li className="nav-item">{site.name}</li> */}

                            
                        <ul className="navbar-nav flex-grow-1 justify-content-between">
                            <li className="nav-item"><h3>{site.name}</h3></li> 

                                {site.menu.map((item, index) => (
                                    <li className="nav-item"><a className="nav-link" href="#" key={index}>{item.name} </a></li>
                                ))}
                          </ul>

                            {/*<li className="nav-item"><a className="nav-link" href="#">{site.menu[0].name}</a></li>*/}
                            {/*<li className="nav-item"><a className="nav-link" href="#">{site.menu[1].name}</a></li>*/}
                            {/*<li className="nav-item"><a className="nav-link" href="#">{site.menu[2].name}</a></li>*/}
                            {/*<li className="nav-item"><a className="nav-link" href="#">{site.menu[3].name}</a></li>*/}
                            {/*<li className="nav-item"><a className="nav-link" href="#">{site.menu[4].name}</a></li>*/}
                            {/*<li className="nav-item"><a className="nav-link" href="#">{site.menu[5].name}</a></li>*/}
                            {/*<li className="nav-item"><a className="nav-link" href="#">*/}
                                {/*<svg className="bi" width="24" height="24"></svg>*/}
                            {/*</a></li>*/}
                       {/* </ul>*/}
                    </div>
                </div>
            </div>
            </nav>
    );
};

export default Header0;