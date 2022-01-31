import React from 'react';
import LineChart from './LineChart';
import { useParams } from 'react-router-dom';
import { useGetCryptoHistoryQuery } from '../services/cryptoApi';
    
const CryptoDetails = () => {
    const { coinId } = useParams();
    const timeperiod = '7d';
    
    const { data: coinHistory } = useGetCryptoHistoryQuery({ coinId, timeperiod });
    console.log(coinHistory);
    return (
            <div>
              <h1>Crypto Chart</h1>
                <LineChart data = {coinHistory}/>
            </div>
    );
  }; 

export default CryptoDetails;