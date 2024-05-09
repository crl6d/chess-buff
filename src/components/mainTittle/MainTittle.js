import React, {Component} from 'react';
import styles from './mainTittle.module.css';
import Type from "../playersTyping/Type";
import SearchBar from "../search/SearchBar";



class MainTittle extends Component {
    render() {
        return (
            <div>
                <h1>Find any ♟️<br />chess player</h1>
                <Type />
                <SearchBar />



            </div>
        );
    }
}

export default MainTittle;