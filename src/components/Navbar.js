import React from 'react'
import {NavLink} from 'react-router-dom'
import {Icon, Menu} from 'semantic-ui-react'
import {SearchWrap} from './Search'
import { useLocation } from 'react-router-dom'

export const Navbar = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/'
    return (
        <nav className="">
            <Menu size='huge' stackable inverted>
                <Menu.Item>
                    <NavLink exact to="/" className="nav-link">
                        <Icon name='tv'/> Movies
                    </NavLink>
                </Menu.Item>
                { isHomePage
                    ? (
                        <Menu.Item position='right'>
                            <SearchWrap/>
                        </Menu.Item>
                    )
                    : (
                        <Menu.Item position='right'>
                            <NavLink exact to="/" className="nav-link"><Icon name='chevron left'/> Back to home page</NavLink>
                        </Menu.Item>
                    )
                }
            </Menu>
        </nav>
    )
}
