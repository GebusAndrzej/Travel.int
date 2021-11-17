import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../Logo'
import { Menu, Nav, NavBar_Button, NavBar_ButtonBox } from './NavBar.styled'

const NavBar = (): JSX.Element => {
    return (
        <Nav>
            <Logo></Logo>
            <Menu>
                <NavLink to="#">Home</NavLink>
                <NavLink to="#">Category</NavLink>
                <NavLink to="#">About us</NavLink>
                <NavLink to="#">Tours</NavLink>
                <NavLink to="#">Contact</NavLink>
            </Menu>
            <NavBar_ButtonBox>
                <NavBar_Button to="/login" variant="transparent">
                    <a>Log in</a>
                </NavBar_Button>
                <NavBar_Button to="/login" variant="primary">
                    Sign up
                </NavBar_Button>
            </NavBar_ButtonBox>
        </Nav>
    )
}

export default NavBar
