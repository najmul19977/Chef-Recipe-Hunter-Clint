import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import NewsCard from '../NewsCard/NewsCard';

const NewsCards = () => {
    const [cardData, setCardData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/chefData')
            .then((res) => res.json())
            .then((data) => setCardData(data))
    }, []);
    //console.log(cardData);
    return (


        <div className='container'>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 mt-5'>
                {
                    cardData.map(info => <NewsCard
                        key={info.id}
                        info={info}
                    ></NewsCard>)
                }
            </div>
        </div>


    );
};

export default NewsCards;