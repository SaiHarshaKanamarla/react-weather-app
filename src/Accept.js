import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import Display from './Display';

const Accept = () => {
    const [city,setCity] = useState('');
    const [location,setLocation] = useState('');
    let history =  useHistory();

    const [weather,setWeather] = useState('');

    const url = "http://api.openweathermap.org/data/2.5/weather?q="+location+"&appid=a828f2a611c61c94f0f7c0cc7de257fa&units=metric"; 
    console.log(url);

    function locationset(e){
        e.preventDefault();
        setLocation(city);
    }

    useEffect(()=> {
        fetch(url)
        .then((res)=>{
            console.log(res);
            if(!res.ok){
                throw Error("Could not fetch data from resource");
            }
            return res.json();
        }).then((data)=>{
            console.log(data);
            setWeather(data);
        }).catch((err)=>{
            console.log(err);
        })
    },[location]);
    
    return ( <div>
            <div className="header">
            <form>
                <h1>Enter a city Name to view weather information</h1>
                <input type="text" required placeholder="Enter a city name" onChange={(e)=> setCity(e.target.value)} />
                <br></br><br></br>
              <button className="getw" onClick={locationset}>Get Weather</button>           
            </form>
            </div>
            {weather && <Display data={weather}/>}
        </div> );
}
 
export default Accept;