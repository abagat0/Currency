import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Exchange from "./Exchange";
export default function CurrencyRate() {
    let { currency } = useParams();
    const location = useLocation();
    if(!currency){
        currency = location.pathname.replace('/exchange','');
        currency = currency.replace('/','')
    }
    return (
        <>
          <Exchange currency={currency} />
        </>
    );
}