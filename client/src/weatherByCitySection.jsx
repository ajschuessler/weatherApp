import React from 'react';


class WeatherByCitySection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }

    }

    render() {

        return (
        
            <div>
                <div id='currentCityHeader'>{this.props.currentCity}</div>

                <div id='cityNameInputContainer'>
                    City Name<input type="text" id='cityNameInput'></input>
                    <button onClick={() => {this.props.getCityWeatherDataByCityName(document.getElementById('cityNameInput').value)}}>Get Weather Data by City Name</button>
                </div>

                <div id='cityCoordinatesInputContainer'>
                    Latitude<input type="text" id='cityLatitudeInput'></input>
                    Longitude<input type="text" id='cityLongitudeInput'></input>
                    <button onClick={() => {this.props.getCityWeatherDataByCityCoordinates(document.getElementById('cityLatitudeInput').value, document.getElementById('cityLongitudeInput').value)}}>Get Weather Data by City Coordinates</button>
                </div>

                <div id='weatherStatsContainer'>
                    <div>Temperature: {Math.floor((this.props.currentCityTemp - 273.15) * 1.8 + 32)} degrees Farenheit, </div>
                    <div>Pressure: {this.props.currentCityPressure} (Pascal), </div>
                    <div>Humidity: {this.props.currentCityHumidity} (%)</div>
                </div>
                
            </div>
        )
    }
}

module.exports = WeatherByCitySection;