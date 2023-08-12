import Header0 from './header0';
import Header1 from './header1';
import Header2 from './header2';
import Header3 from './header3';
import Header4 from './header4';

export default function HeaderComponents({randomIndex, siteName}) {
    console.log(siteName)
    const components = [
        <Header0 siteName={siteName} />,
        <Header1 siteName={siteName} />,
        <Header2 siteName={siteName} />,
        <Header3 siteName={siteName} />,
        <Header4 siteName={siteName} />,
    ];

    return (
        components[randomIndex]
    );
}