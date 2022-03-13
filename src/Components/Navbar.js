import React from 'react';
import Logo from '../Images/img.png'
import avatar from '../Images/avatar.jpg'
function Navbar(props) {
    return (
        <div className='navbar'>
            <ul>
                <li>
                    <img src={Logo} alt="" />
                </li>
              
                <li>
                    <h4 style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50% , -50%)'
                    }}>
                        NewBioLife
                    </h4>
                </li>
                <li >
                    <img src={avatar} width={40} style={
                        {
                            borderRadius: '50%'
                        }
                    } alt="" />
                </li>
            </ul>
        </div>
    );
}

export default Navbar;