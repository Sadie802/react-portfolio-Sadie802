import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import { Nav, NavItem, Navbar, NavbarToggler, Collapse } from 'reactstrap'

export default function NavBar(){

    const [isOpen, setIsOpen] = useState(false)


    return (
            <main className='nav'>   
                <nav>
                    {/* Creating hamburger nav menu using Reactstrap - active style applied */}
                <Navbar dark>
                    <NavbarToggler
                    className="toggle"
                    onClick={() => { setIsOpen(!isOpen) }}
                    />
                    <Collapse isOpen={isOpen} style={{position:'absolute', top:'55px'}}navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink style={({isActive}) => ({
                                    textDecoration: isActive ? 'underline' : 'undefined'})}
                                    className='navItem' to='/home'> Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink style={({isActive}) => ({
                                    textDecoration: isActive ? 'underline' : 'undefined'})}
                                    className='navItem' to="/about"> About
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink style={({isActive}) => ({
                                    textDecoration: isActive ? 'underline' : 'undefined'})}
                                    className='navItem' to="/projects"> Projects
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink style={({isActive}) => ({
                                    textDecoration: isActive ? 'underline' : 'undefined'})}
                                    className='navItem' to="/workhistory"> Work History
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink style={({isActive}) => ({
                                    textDecoration: isActive ? 'underline' : 'undefined'})}
                                    className='navItem' to="/contact"> Contact
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                </nav>
            </main>
    )
}
