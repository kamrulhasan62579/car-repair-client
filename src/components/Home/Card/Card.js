import React, { useEffect, useState } from 'react';
import CardContent from '../CardContent/CardContent';
import Loading from '../../Loading/Loading';


const Card = () => {

    const [cardInfo, setCardInfo] = useState([]);
console.log(cardInfo);

    useEffect(() =>{
      fetch("http://localhost:3011/getService")
      .then(res => res.json())
      .then(data => setCardInfo(data))
    }, [])
    return (
            <div className="row w-100" >
            <h1 className="text-center pt-5">
                Trips All Over The World
            </h1>
            {
                cardInfo.length === 0 ?
                <Loading></Loading>
                :
                cardInfo.map((card, index) =>  <CardContent key={index} card={card}></CardContent> )

            }
          
           </div>
    );
};

export default Card;