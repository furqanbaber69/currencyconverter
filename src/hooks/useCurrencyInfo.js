import { useState,useEffect } from "react";

function useCurrencyInfo(currency) {
    let [data , setData] = useState({})
    useEffect(()=>{
        //After api call value converted into String by javascript we need to convert string into JSON
       fetch (`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
       .then((res) => res.json())
       .then((res) => setData(res[currency]))
       console.log(data);
    },[currency])
    console.log(data);
    return data;
}
export default useCurrencyInfo;

