import React, {Component} from 'react';
import axios from 'axios';

import firebase from '../firebase';

class Transfer extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            transferring: true
        }
    }
    
    componentDidMount() {

        firebase.database().ref().child('events').remove();

        let list = [];

        axios.get('https://pure-tor-43213.herokuapp.com/data')
        .then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });

    }

    render() {

        let val = <p>Finished Transfer</p>;

        if (this.state.transferring) {
            val = <p>Transferring...</p>;
        }

        return val;
    }
}

export default Transfer;