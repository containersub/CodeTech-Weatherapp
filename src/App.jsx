import { useEffect, useState } from 'react';
import './index.css'

function App() {

    const [dateTimeString, setDateTimeString] = useState('');

    useEffect(() => {
      const d = new Date();
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        
        
      };
      const formattedDateTime = d.toLocaleString(undefined, options);
      setDateTimeString(formattedDateTime);
    }, []);

    let [time,setTime]=useState('')

    useEffect(() => {
        let t=new Date();
        let optionss = {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
        };
        const formattedDateTime = t.toLocaleString(undefined, optionss);
      setTime(formattedDateTime);
    },[])
  


    const apikey = "f679c221101a7509afba9743070335c6";
    const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

    async function checkWeather() {
        const city = document.getElementById("location-input").value;
        try {
            const response = await fetch(apiurl + city + `&appid=${apikey}`);
            if (!response.ok) {
                throw new Error("City not found");
            }
            const data = await response.json();
            console.log(data);
            
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
           
            document.getElementById("feel-mesu").innerHTML = data.main.feels_like+ "°C ";
            document.getElementById("pre-mesu").innerHTML = data.main.pressure+ " mb";
            document.getElementById("temp-1").innerHTML = data.main.temp_max+ "°C ";
            document.getElementById("temp-2").innerHTML = data.main.temp_min+ "°C";
            document.getElementById("sun-2").innerHTML = data.wind.deg+ "°";
            document.getElementById("sun-1").innerHTML = data.wind.speed+ "°";
            document.getElementById("location-1").innerHTML = data.weather[0].description+ "";

            document.getElementById("humidity").innerHTML = data.main.humidity;

      
            
        } catch (error) {
            console.error("Error fetching weather data:", error);
            alert("Failed to fetch weather data. Please check the city name.");
        }
    }

    return (
        <div>
            <div className="">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
                <div className="shape shape-4"></div>
                <div className="shape shape-5"></div>
            </div>
            <div className="maincard">
                <div className="card">
                    <div className="search">
                        <input type="text" placeholder="Enter city name" id="location-input" className="sub-search"/>
                        <button id="btn" onClick={checkWeather}>Get</button>
                    </div>
                    <div className="wether">
                        <img src="" className="weather-icon" id="icon"/>
                        <h2 className="temp" id="temp-value">30°c</h2>
                        <h4 className="city-1" id="location-1">Clear Sky</h4>
                    </div>
                    <div className="details">
                        <p className='pp o' id='date'>{dateTimeString}</p><br/>
                        <p className='pp oo'>{time}</p>
                        <h2 className='city'></h2>
                    </div>
                </div>  
                <div className="container">
                    <div className="subcontainer-1">
                        <h2>Today</h2>
                        
                    </div>
                    <div className="subcontainer">
                        <div className="subcont-1">
                            <h3 className="class-1">Pressure</h3>
                            <h5 className="class-1" id="pre-mesu">1000 mb</h5>
                        </div>
                        <div className="subcont-1">
                            <h3 className="class-1" id="UV Index">UV Index</h3>
                            <h5 className="class-1" id="humidity">20</h5>
                             
                        </div>
                        <div className="subcont-1">
                            <h3 className="class-1">Feels Like</h3>
                            <h5 className="class-1" id="feel-mesu">31°c</h5>
                            
                        </div>
                    </div>
                    <div className="subcontainer">
                        <div className="subcont-1">
                            <h3 className="class-1">Temperature</h3>
                            <h5 className="class-1" id="temp-1">31°c</h5>
                            <h5 className="class-1" id="temp-2">31°c</h5>
                        </div>
                        <div className="subcont-1">
                            <h3 className="class-1" id="sun">Wind</h3>
                            <h5 className="class-1" id="sun-1">Speed</h5>
                            <h5 className="class-1" id="sun-2">Deg</h5> 
                        </div>
                        <div className="subcont-1">
                            <h3 className="class-1" id="moon">Moon</h3>
                            <h5 className="class-1" id="moon-1">Rise</h5>
                            <h5 className="class-1" id="moon-2">Set</h5> 
                        </div>
                        
                    </div> 
                    <div className="data">
                            <p>All Data Provide By OpenWeather</p>
                        </div>
                </div>  
            </div>  
        </div>
    )
}

export default App;
