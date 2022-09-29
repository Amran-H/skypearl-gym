import React from 'react';
import './Excercise.css'

const Excercise = (props) => {
    const { name, image, body, age, time } = props.activity;
    const { handleClick } = props
    return (
        <div className='excercise'>
            <div className='img'>
                <img src={image} alt="" />
            </div>
            <div className='excercise-info'>
                <p className='product-name'>{name}</p>
                <p>{body}</p>
                <p>For age: <strong>{age}</strong></p>
                <p>Time required: <strong>{time}m</strong></p>
            </div>
            <button onClick={() => handleClick(props.activity)} className='btn-add'>
                <p>Add to list</p>
            </button>
        </div>
    );
};

export default Excercise;