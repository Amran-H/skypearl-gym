import React from 'react';
import './Header.css'
import icon from '../../images/favpng_sports-icon-gym-icon-weightlifter-icon.png'
// import icon from '../../images'

const Header = () => {
    return (
        // <div>
        //     <nav className='header'>
        //         <img src={icon} alt="" />
        //         <h2>SkyPearl-Gym</h2>
        //     </nav>
        // </div>

        <div>
            <nav className='header'>
                <div className='logo'>
                    <img src={icon} alt="" />
                    <h2>SkyPearl-Gym</h2>
                </div>
                {/* <div>
                    <a href="/shop">Shop</a>
                    <a href="/orders">Orders</a>
                    <a href="/inventory">Inventory</a>
                    <a href="/about">About</a>
                </div> */}
            </nav>
        </div>
    );
};

export default Header;