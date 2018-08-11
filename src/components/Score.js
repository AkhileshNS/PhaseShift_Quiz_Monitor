//External Libraries
import React from 'react';

//Internal Libraries
import './Score.css';

const cssClassName = 'Score';

const Score = (props) => (<div className={cssClassName}>
        {props.name + ' - ' + props.email + ' - ' + props.mobileno}<br />{'Score: ' + props.score + '\tTime: ' + props.time + '\tFinal: '}<strong><span style={{color: '#9666d3'}}>{props.final}</span></strong>
    </div>
);

export default Score;