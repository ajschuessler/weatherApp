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
                <div>You are in {this.props.currentCity}</div>

                <div>
                    <input type="text" id='cityNameInput'></input>
                    <button onClick={() => {this.props.getCityWeatherDataByCityName(document.getElementById('cityNameInput').value)}}>Get Weather Data by City Name</button>
                </div>

                <div>
                    <input type="text" id='cityLatitudeInput'></input>
                    <input type="text" id='cityLongitudeInput'></input>
                    <button onClick={() => {this.props.getCityWeatherDataByCityCoordinates(document.getElementById('cityLatitudeInput').value, document.getElementById('cityLongitudeInput').value)}}>Get Weather Data by City Coordinates</button>
                </div>

                <div>Temperature: {this.props.currentCityTemp} (Kelvin), </div>
                <div>Pressure: {this.props.currentCityPressure} (Pascal), </div>
                <div>Humidity: {this.props.currentCityHumidity} (%)</div>
                
                
            </div>
        )
    }
}

module.exports = WeatherByCitySection;