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
                <button onClick={() => console.log(this.state.currentPosition.coords.latitude)}>check state</button>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('App'));