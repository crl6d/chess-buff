import React, {Component} from 'react';
import Header from '../components/header/Header';
import MainTittle from "../components/MainTittle/MainTittle";
import '../App.css'

class Start extends Component {
    render() {
        return (
            <div>
                <Header/>

                <div className="holder">
                    <MainTittle/>

                </div>
            </div>
        );
    }
}

export default Start;