//External Libraries
import React from 'react';

//Internal Libraries
import './Score.css';

const cssClassName = 'Score';

const Score = (props) => (<div className={cssClassName}>
        <p className={cssClassName+"p"}>Name: {props.name}</p>
        <p className={cssClassName+"p"}>Email: {props.email}</p>
        <p className={cssClassName+"p"}>MobileNo: {props.mobileno}</p>
        <p className={cssClassName+"p"}>Score: {props.score}</p>
        <p className={cssClassName+"p"}>Time: {props.time}</p>
        <p className={cssClassName+"p"}>Final: <strong>{props.final}</strong></p>
    </div>
);

export default Score;