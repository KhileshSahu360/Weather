import { useEffect, useState } from 'react'
import './App.css'
import cloud from './assets/cloud.png'
import weather from './cloudicon/weather.png'
import noData from './assets/noData.png'
import search from './assets/search.png'
import Header from './Components/Header'

// import SearchAppBar from './Components/SearchAppBar'

function App() {
  const [weatherData, setWeatherData] = useState(null)
  const styleForCloud = {
    height : '300px'
  }
  const noDataHeight = {
    height: '150px'
  }
  const cloudHeight = {
    height: '100px'
  }
  const [city,setcity] = useState('Khairagarh cg');

  useEffect(()=>{
    const apiKey = '87ad385fc9ef479db68133733240103';
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
    const getTemp = async () =>{
      const response = await fetch(url);
      const data = await response.json();
      setWeatherData(data);
    }
    getTemp();
  },[city])
  if(weatherData && weatherData.current && weatherData.location){
    var temp = weatherData.current;
    var loc = weatherData.location;
    var {temp_c,wind_kph,humidity,pressure_in,condition:{icon}} = temp;
    var {name,region} = loc;
    console.log(weatherData.current);
    console.log(weatherData.location);
    // console.log(condition.icon)

  }
  return (
    <>
      <Header/>
      <div className="container">
        <div className="cloud">
          <img src={cloud} style={styleForCloud} alt="" className='cloud1'/>
          <img src={cloud} style={styleForCloud} alt="" className='cloud2'/>
          <img src={cloud} style={styleForCloud} alt="" className='cloud3'/>
        </div>
      
        <div className="main_container">
            <div className="input_field">
              <span className="input">
                <input type="text" className='ori_input' name="" id="" value={city} onChange={(event)=>setcity(event.target.value)}/>
                <span></span> 
              </span>
            </div>
            <div className="data">
              {weatherData && Object.keys(weatherData).length > 1 ?
              
              <>
              <div className="img_div">
                <img src={icon} style={cloudHeight} alt="" className='cloud_icon'/>
              </div> 
              <div className="temp_div">
                  <div className="value">
                      <label htmlFor="">{temp_c}</label><span htmlFor="" className='deg'>&deg;</span>
                  </div>
                  <label htmlFor="" className='info'>{name!==region?name+" "+region:name}</label>
              </div>
              <div className="other_div">
                  <span className='small'>Wind now</span>
                  <span className='small'>Humidity</span>
                  <span className='small'>Pressure_in</span>
                  <span className='big'>{wind_kph}<sub>kph</sub> </span>
                  <span className='big'>{humidity}<sub>%</sub></span>
                  <span className='big'>{pressure_in}<sub>%</sub></span>
              </div></>:city.length>0?
              
              <div className="error_div">
                <div className="error_img">
                  <img src={noData} alt="" style={noDataHeight}/>
                </div>
                <div className="error_msg">
                  <h3>No Result Found!</h3>
                </div>
              </div>
            :
              <div className='search_div'>
                <img src={search} alt="" style={cloudHeight}/>
                <label htmlFor="">Search...</label>
              </div>
            }
            </div>
            <div className="top_shape"></div>
            <div className="bottom_shape"></div>
        </div>
        
      </div>
    </>
  )
}

export default App
