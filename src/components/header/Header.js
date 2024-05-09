// Header.js
import React, {Component} from 'react';
import styles from './header.module.css';

class Header extends Component {
    render() {
        return (
            <div>
                <header className={styles.header}>
                    <ul>
                        <li>{"<chess/buff>"}</li>
                        <li>Openings</li>
                        <li>Tournaments</li>
                        <li>Pro players</li>
                    </ul>
                </header>
            </div>
        );
    }
}

export default Header;
