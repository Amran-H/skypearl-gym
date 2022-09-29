import React, { useEffect, useState } from 'react';
import Excercise from '../Excercise/Excercise';
import Profile from '../Profile/Profile';
import './Activity.css'

const Activity = () => {
    const [activities, setActivities] = useState([]);
    const [time, setTime] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setActivities(data));
    }, [])

    const handleClick = (activity) => {
        console.log(activity);
        // time.push(activity);
        const newTime = [...time, activity];
        setTime(newTime);
    }

    return (
        <div className='activity-container'>
            <div className="profile">
                <Profile
                    time={time}
                ></Profile>
            </div>
            <div className="activities">
                {
                    activities.map(activity => <Excercise
                        key={activity.id}
                        activity={activity}
                        handleClick={handleClick}
                    ></Excercise>)
                }
            </div>

        </div>
    );
};

export default Activity;


