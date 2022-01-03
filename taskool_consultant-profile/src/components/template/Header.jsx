import React from 'react'
import styled from 'styled-components'
import { icons } from '../../assets/icons/icons'

const Header = () => {
    return (
        <Navigation className='d-flex justify-between align-center padding'>
            <div className='nav-logo d-flex justify-center'>
                <a href='#'><img src={require('../../assets/images/Taskool-logo-dark.png')} /></a>
            </div>
            <div className='nav-links d-flex justify-center'>
                <div className='action-btn d-flex align-center'>
                    <a href='#' className='nav-link'>{icons.search}</a>
                    <a href='#' className='nav-link'>{icons.notification}</a>
                </div>
                <div className='action-user'>
                    <a href='#'>
                        <img src={require('../../assets/images/user-img-sm.png')} />
                    </a>
                </div>
            </div>
        </Navigation>
    )
}


// HEADER NAV STYLE
const Navigation = styled.nav`
    height: fit-content;

    .action-btn::after {
        content: '';
        display: inline-block;
        width: 1px;
        height: 1.75rem;
        background-color: #E0E0E0;
    }

    .nav-link {
        margin-right: 1.5rem;
    }

    .action-user {
        margin-left: 1.5rem;
    }

    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`





export default Header
