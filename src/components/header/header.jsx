import React from 'react';
import Link from '../util/link'
import './header.scss'; 

export default ()=>{

    return (
        <div className='header'>
            <nav>
                <div>
                    <Link to={'/'}>Accordion</Link>
                    <Link to={'/search'}>Search</Link>
                    <Link to={'/dropdown'}>DropDown</Link>
                    <Link to={'/translate'}>Translate</Link>
                </div>
            </nav>
        </div>
    );

}