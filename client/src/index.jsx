import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';



class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPosition: undefined
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
                    <input type="text"></input>
                    <button>Get Weather Data</button>
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