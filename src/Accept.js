const Accept = () => {
    return ( <div>
            <div className="header">
                <h1>Enter a city Name to view weather information</h1>
                <input type="text" required placeholder="Enter a city name" />
                <br></br><br></br>
                <button className="getw">Get Weather</button>
            </div>
                            
        </div> );
}
 
export default Accept;