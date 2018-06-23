import React from 'react';

const TotalTips = (props) =>{
    return(
        <div>
            <input type='number' value={props.totalTips} onChange={props.handleChangeFor('totalTips')} />
            <button onClick={props.calculate}>Calculate</button>
        </div>
    )
}

export default TotalTips;