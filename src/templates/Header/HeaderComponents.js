import Header0 from './header0';
import Header1 from './header1';
import Header2 from './header2';
import Header3 from './header3';
import Header4 from './header4';

export default function HeaderComponents({randomIndex, site}) { 
    
    const components = [
        <Header0 site={site} />,
        <Header1 site={site} />,
        <Header2 site={site} />,
        <Header3 site={site} />,
        <Header4 site={site} />,
    ];
    return (
        components[randomIndex]
        
    );
}