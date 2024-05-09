import React, {Component} from 'react';
import styles from './playerInfo.module.css';
import chesscomImg from '../../img/chesscom.svg';
import lichessImg from '../../img/lichess.svg';

class PlayerInfo extends Component {
    render() {
        return (
            <div className={styles.infoholder}>
                <div className={styles.chesscom} style={{borderRight:"1px solid white"}}>
                    <header>
                        <img src={chesscomImg} alt=""/>
                        <p>Chess.com</p>
                    </header>

                    info

                </div>

                <div className={styles.lichess}>
                    <header>
                        <img src={lichessImg} alt=""/>
                        <p style={{paddingLeft:"30px"}}>Lichess</p>
                    </header>

                    info

                </div>
            </div>
        );
    }
}

export default PlayerInfo;