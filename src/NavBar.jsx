import React from 'react'
import {NavLink} from "react-router-dom";

export default function NavBar(){
    function isActive(){
        if (isActive === true){
        }
    }

    return (
            <main className='nav'>
                <nav>

                    {/* Creating nav bar that redirects to other pages and has active style applied to text color and background */}
                    <NavLink style={({isActive}) => ({
                        background: isActive ? 'black' : 'undefined',
                        color: isActive ? 'white' : 'undefined'})}
                        className='navItem' to="/home"> Home
                    </NavLink>
                    <NavLink style={({isActive}) => ({
                        background: isActive ? 'black' : 'undefined',
                        color: isActive ? 'white' : 'undefined'})}
                        className='navItem' to="/about"> About
                    </NavLink>
                    <NavLink style={({isActive}) => ({
                        background: isActive ? 'black' : 'undefined',
                        color: isActive ? 'white' : 'undefined'})}
                        className='navItem' to="/projects"> Projects
                    </NavLink>
                    <NavLink style={({isActive}) => ({
                        background: isActive ? 'black' : 'undefined',
                        color: isActive ? 'white' : 'undefined'})}
                        className='navItem' to="/workhistory"> Work History
                    </NavLink>
                    <NavLink style={({isActive}) => ({
                        background: isActive ? 'black' : 'undefined',
                        color: isActive ? 'white' : 'undefined'})}
                        className='navItem' to="/contact"> Contact
                    </NavLink>
                </nav>
            </main>
    )
}
