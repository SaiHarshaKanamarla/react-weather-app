import { useEffect, useState } from "react";
import React, { Component }  from 'react';

const Display = ({data}) => {    
    console.log(data);
    let temperature = data.main.temp;
    console.log(temperature)
    if(temperature > 21){
        return (
            <div>
                <img src="images/sunny.png" />
                <h1>Selected City is : {data.name}</h1>
            <h1>Current temperature is: {data.main.temp}</h1>
            <p>Feels Like: {data.main.feels_like}</p>
            <p>Wind Speed: {data.wind.speed}</p>
            <p>Humidity: {data.main.humidity}</p>
            </div>
        )
    }else{ 
        return ( <div>                
            <h1>Selected City is : {data.name}</h1>
            <h1>Current temperature is: {data.main.temp}</h1>
            <p>Feels Like: {data.main.feels_like}</p>
            <p>Wind Speed: {data.wind.speed}</p>
            <p>Humidity: {data.main.humidity}</p>

        </div> );
    }
    
}
 
export default Display;