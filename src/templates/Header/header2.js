import React from 'react';

const Header2 = ({ siteName }) => {
    return (
         <>
        <head>
            <title>{siteName}</title>
        </head>
        <div className="container">
            <header className="border-bottom lh-1 py-3">
                <div className="row flex-nowrap justify-content-between align-items-center">
                    <div className="col-4 pt-1">
                        <a className="link-secondary" href="#">Subscribe</a>
                    </div>
                    <div className="col-4 text-center">
                        <a className="blog-header-logo text-body-emphasis text-decoration-none" href="#">Large</a>
                    </div>
                    <div className="col-4 d-flex justify-content-end align-items-center">
                        <a className="link-secondary" href="#" aria-label="Search">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="mx-3" role="img" viewBox="0 0 24 24"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5" /><path d="M21 21l-5.2-5.2" /></svg>
                        </a>
                        <a className="btn btn-sm btn-outline-secondary" href="#">Sign up</a>
                    </div>
                </div>
            </header>

            <div className="nav-scroller py-1 mb-3 border-bottom">
                <nav className="nav nav-underline justify-content-between">
                    <a className="nav-item nav-link link-body-emphasis active" href="#">World</a>
                    <a className="nav-item nav-link link-body-emphasis" href="#">U.S.</a>
                    <a className="nav-item nav-link link-body-emphasis" href="#">Technology</a>
                    <a className="nav-item nav-link link-body-emphasis" href="#">Design</a>
                    <a className="nav-item nav-link link-body-emphasis" href="#">Culture</a>
                    <a className="nav-item nav-link link-body-emphasis" href="#">Business</a>
                    <a className="nav-item nav-link link-body-emphasis" href="#">Politics</a>
                    <a className="nav-item nav-link link-body-emphasis" href="#">Opinion</a>
                    <a className="nav-item nav-link link-body-emphasis" href="#">Science</a>
                    <a className="nav-item nav-link link-body-emphasis" href="#">Health</a>
                    <a className="nav-item nav-link link-body-emphasis" href="#">Style</a>
                    <a className="nav-item nav-link link-body-emphasis" href="#">Travel</a>
                </nav>
            </div>
            </div>
        </>
    );
};

export default Header2