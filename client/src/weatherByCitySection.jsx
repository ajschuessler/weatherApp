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

                <div>
                    <input type="text" id='cityNameInput'></input>
                    <button onClick={() => {this.props.getCityWeatherData(document.getElementById('cityNameInput').value)}}>Get Weather Data by City Name</button>
                </div>

                <div>
                    <input type="text" id='cityCoordinatesInput'></input>
                    <button onClick={() => {this.props.getCityWeatherData(document.getElementById('cityNameInput').value)}}>Get Weather Data by City Coordinates</button>
                </div>

                <div>Temperature: {this.props.currentCityTemp} (Kelvin), </div>
                <div>Pressure: {this.props.currentCityPressure} (Pascal), </div>
                <div>Humidity: {this.props.currentCityHumidity} (%)</div>
                
                
            </div>
        )
    }
}

module.exports = WeatherByCitySection;