import React from 'react';

const TotalTips = (props) =>{
    return(
        <div>
            <input type='number' value={props.totalTips} onChange={props.handleChangeFor('totalTips')} />
        </div>
    )
}

export default TotalTips;