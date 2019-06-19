import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';



class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }

    }

    componentDidMount() {

    }


    render() {
        return (
            <div>Weather App</div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('App'));