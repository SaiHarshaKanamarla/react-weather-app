import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

const Accept = () => {

    const [city,setCity] = useState('');
    let history =  useHistory();

    function handleClick(){
        if(!city){
            alert("Enter a city name")
        }else{
            history.push('/create');
        }
    }

    return ( <div>
            <div className="header">
            <form>
                <h1>Enter a city Name to view weather information</h1>
                <input type="text" required placeholder="Enter a city name" onChange={(e)=> setCity(e.target.value)} />
                <br></br><br></br>
              <button className="getw" onClick={handleClick}>Get Weather</button>           
            </form>
            </div>
                            
        </div> );
}
 
export default Accept;