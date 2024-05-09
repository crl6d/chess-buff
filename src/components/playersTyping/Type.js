// Type.js
import React, {Component} from 'react';
import styles from './type.module.css';

class Type extends Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [
                { firstName: 'Magnus', lastName: 'Carlsen' },
                { firstName: 'Garry', lastName: 'Kasparov' },
                { firstName: 'Bobby', lastName: 'Fischer' },
                { firstName: 'Vladimir', lastName: 'Kramnik' }
            ],
            currentIndex: 0
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(prevState => ({
                currentIndex: (prevState.currentIndex + 1) % prevState.players.length
            }));
        }, 2300);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { players, currentIndex } = this.state;
        const { firstName, lastName } = players[currentIndex];

        return (
            <div className={styles.typing}>
                <p>{firstName} {lastName}</p>
            </div>
        );
    }
}

export default Type;
