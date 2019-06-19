import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';



class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPosition: undefined,
            currentCityWeatherData: undefined
        }

    }

    getUserLocation() {
        navigator.geolocation.getCurrentPosition(position => {
            this.setState({
                currentPosition: position
            })
        }, error => {
            console.log(error)
        })
    }

    getCityWeatherData(cityName) {
        Axios.get('/weatherData', {
            params: {
                city: cityName
            }
        })
        .then(response => {
            this.setState({
                currentCityWeatherData: response.data.main
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

                <div>
                    Get Weather Data by City
                </div>

                <div>
                    <input type="text" id='cityNameInput'></input>
                    <button onClick={() => {this.getCityWeatherData(document.getElementById('cityNameInput').value)}}>Get Weather Data</button>
                </div>

                <div>
                    {'return weather data here'}
                </div>

                <div>
                    Get Weather Data by coordinates
                </div>

                <div>
                    <input type="text"></input>
                    <input type="text"></input>
                    <button>Get Weather Data</button>
                </div>

                <div>
                    {'return weather data here'}
                </div>
                
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('App'));