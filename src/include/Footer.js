import React from 'react';
import logo from 'img/head_logo.png'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <div className="wrapper">
                <Link to="/" className='logo__link'>
                    <img src={logo} alt="광주광역시 동구" />
                </Link>
                <p>Copyright © 2023 All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
