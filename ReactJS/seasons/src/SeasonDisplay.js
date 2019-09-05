import React from 'react';
import './SeasonDisplay.css';

const SeasonDisplay = (props) => {
    const season = getSeason(props.latitude, new Date().getDate());
    const {text, iconName} = seasonConfig[season];

    console.log(season);
    return (
        <div className={season + " season-display"}>
            <i className={iconName + " icon-left massive icon"}/>
            <h1>{text}</h1>
            <i className={iconName + " icon-right massive icon"} />
        </div>
    );
}

const getSeason = (latitude, month) => {
    if(month > 2 && month < 9) {
        return latitude > 0? 'summer': 'winter';
    } else {
        return latitude > 0? 'winter': 'summer';
    }
}

const seasonConfig = {
    summer: {
        text: "Let's hit the beach",
        iconName: "sun"
    },
    winter : {
        text : "It's Chilly",
        iconName: "snowflake"
    }
}

export default SeasonDisplay