import React, { useEffect, useState } from 'react';
import Excercise from '../Excercise/Excercise';
import './Activity.css'

const Activity = () => {
    const [activities, setActivities] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setActivities(data));
    }, [])
    return (
        <div className='activity-container'>
            <div className="activities">
                {
                    activities.map(activity => <Excercise
                        key={activity.id}
                        activity={activity}
                    ></Excercise>)
                }
            </div>
            <div className="profile">
                <h1>profile</h1>
            </div>
        </div>
    );
};

export default Activity;


