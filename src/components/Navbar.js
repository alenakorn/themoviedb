import React from 'react'
import {NavLink} from 'react-router-dom'
import {Menu} from 'semantic-ui-react'
import {SearchWrap} from './Search'
import { useLocation } from 'react-router-dom'

export const Navbar = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/'
    return (
        <nav className="">
            <Menu size='huge'>
                <Menu.Item>The movie search</Menu.Item>
                <Menu.Item>
                    <NavLink exact to="/" className="nav-link">Home</NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink to="/about" className="nav-link">About</NavLink>
                </Menu.Item>

                { isHomePage
                    ? (
                        <Menu.Item position='right'>
                            <SearchWrap/>
                        </Menu.Item>
                    )
                    : null
                }
            </Menu>
        </nav>
    );
};
