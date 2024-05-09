import React, {Component} from 'react';
import Header from '../components/header/Header';
import MainTittle from "../components/mainTittle/MainTittle";
import '../App.css'
import PlayerInfo from "../components/playerInfo/PlayerInfo";

class Start extends Component {
    render() {
        return (
            <div>
                <Header/>

                <div className="holder">
                    <MainTittle/>
                    <PlayerInfo />

                </div>
            </div>
        );
    }
}

export default Start;