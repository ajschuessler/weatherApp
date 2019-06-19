import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import WeatherByCitySection from './weatherByCitySection.jsx';



class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentLatitude: 'NA',
            currentLongitude: 'NA',
            currentCityTemp: 'NA',
            currentCityPressure: 'NA',
            currentCityHumidity: 'NA'
        }

        this.getCityWeatherDataByCityName = this.getCityWeatherDataByCityName.bind(this);
        this.getCityWeatherDataByCityCoordinates = this.getCityWeatherDataByCityCoordinates.bind(this);

    }

    getUserLocation() {
        navigator.geolocation.getCurrentPosition(position => {
            this.setState({
                currentLatitude: position.coords.latitude,
                currentLongitude: position.coords.longitude
            })
        }, error => {
            console.log(error)
        })
    }

    getCityWeatherDataByCityName(cityName) {
        Axios.get('/weatherData', {
            params: {
                city: cityName
            }
        })
        .then(response => {
            this.setState({
                currentCityTemp: response.data.main.temp,
                currentCityPressure: response.data.main.pressure,
                currentCityHumidity: response.data.main.humidity
            })
        })
        .catch(error => {
            console.log('error fetching data');
        })
    }

    getCityWeatherDataByCityCoordinates(latitude, longitude) {
        Axios.get('/weatherDataByCoordinates', {
            params: {
                latitude: latitude,
                longitude: longitude
            }
        })
        .then(response => {
            this.setState({
                currentCityTemp: response.data.main.temp,
                currentCityPressure: response.data.main.pressure,
                currentCityHumidity: response.data.main.humidity
            })
        })
        .catch(error => {
            console.log('error fetching data');
        })
    }



    componentDidMount() {
        this.getUserLocation();
    }


    render() {
        return (
            <div>
                <WeatherByCitySection 
                currentLatitude={this.state.currentLatitude}
                currentLongitude={this.state.currentLongitude} 
                getCityWeatherDataByCityName={this.getCityWeatherDataByCityName} 
                getCityWeatherDataByCityCoordinates={this.getCityWeatherDataByCityCoordinates} 
                currentCityTemp={this.state.currentCityTemp} 
                currentCityPressure={this.state.currentCityPressure} 
                currentCityHumidity={this.state.currentCityHumidity}/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('App'));