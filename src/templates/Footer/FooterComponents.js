import Footer0 from './footer0';
import Footer1 from './footer1';
import Footer2 from './footer2';
import Footer3 from './footer3';
import Footer4 from './footer4';

export default function FooterComponents({ randomIndex }) {
    const components = [
        <Footer0 />,
        <Footer1 />,
        <Footer2 />,
        <Footer3 />,
        <Footer4 />,
    ];

    return (
        components[randomIndex]
    );
}