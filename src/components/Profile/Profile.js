import React from 'react';
import './Profile.css'

const Profile = (time) => {
    return (
        <div className='profile-container'>
            <div className='name'>
                <div className='p-img'>
                    <img src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?b=1&k=20&m=1300512215&s=170667a&w=0&h=LsZL_-vvAHB2A2sNLHu9Vpoib_3aLLkRamveVW3AGeQ=" alt="" />
                </div>
                <div>
                    <h3>Amran Hossain</h3>
                    <p>Noakhali, Bangaldesh</p>
                </div>
            </div>
            <p>Selected activities: {time.length}</p>
            <div className='p-info'>
                <div><p><strong>53</strong><small>kg</small></p>
                    <p>Weight</p>
                </div>
                <div><p><strong>5.8</strong><small>feet</small></p>
                    <p>Height</p></div>
                <div><p><strong>22</strong><small>yrs</small></p>
                    <p>Age</p></div>
            </div>
            <h4>Take a break</h4>
            <div className='btn-break'>
                <button>20</button>
                <button>30</button>
                <button>40</button>
                <button>50</button>
                <button>60</button>
            </div>
            <br />
            <h4>Workout info</h4>
            <div className='workout-info'>
                <div className='time'>
                    <p>Workout time</p>
                    <p>898</p>
                </div>
                <br />
                <div className='break'>
                    <p >Break time</p>
                    <p>40</p>
                </div>
            </div>
            <br />
            <br />
            <button className='btn-done'><p>Workout Done</p></button>
        </div>
    );
};

export default Profile;