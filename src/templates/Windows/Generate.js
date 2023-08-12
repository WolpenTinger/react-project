import React, { useState, useEffect } from "react";
import HeaderComponents from '../Header/HeaderComponents';
import BodyComponents from '../Body/BodyComponents';
import FooterComponents from '../Footer/FooterComponents';

const GenerateNum = (min, max) => {
    const [randomNumber, setRandomNumber] = useState(null);

    const generateRandomNumber = () => {
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        setRandomNumber(randomNum);
    };

    useEffect(() => {
        generateRandomNumber();
    }, []);


    return randomNumber
};


export default function Generate({site} ) {
    const randomNumHeader = GenerateNum(0, 0)
    const randomNumBody = GenerateNum(0, 0)
    const randomNumFooter = GenerateNum(0, 4)

    console.log('header ' + randomNumHeader)
    console.log('body ' + randomNumBody)
    console.log('footer ' + randomNumFooter)
    console.log(site.name)
    console.log(site.descr)

    return (
        <React.Fragment >
            <HeaderComponents randomIndex={randomNumHeader} site={site}/> 
            <BodyComponents randomIndex={randomNumBody} site={site} /> /
            <FooterComponents randomIndex={randomNumFooter} />
        </React.Fragment>
    )
}