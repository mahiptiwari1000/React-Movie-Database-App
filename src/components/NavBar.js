import React from 'react';
import '../styles/navbar.css';

const NavBar = ({inputValue,setInputValue,search}) => {
    console.log(inputValue);
    return (
        <div className='navbar'>
            <span className='heading'>MOVIE DB</span>
            <input onChange={(e) => {
                setInputValue(e.target.value)
            }} onKeyDown={search} type='text' placeholder='Search...' className='search-bar'/>
        </div>
    );
};

export default NavBar;