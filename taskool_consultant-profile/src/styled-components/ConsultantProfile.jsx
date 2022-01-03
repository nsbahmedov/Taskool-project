import React from 'react'
import styled, { css } from 'styled-components'
import { icons } from '../assets/icons/icons'



const ConsultantProfile = () => {



    return (
        <Profile className='border'>
            <div className='user-info'>
                <img src={require('../assets/images/user-img-lg.png')} />
                <h2>Gunel Mammadova</h2>
            </div>
            <div className='user-action'>
                <UserAction href='#' active>{icons.gallery}Kurslarım</UserAction>
                <UserAction href='#'>{icons.money}Balans</UserAction>
                <UserAction href='#' >{icons.settings}Ayarlar</UserAction>
                <UserAction href='#' >{icons.logout}Çıxış</UserAction>
            </div>
        </Profile>
    )
}



const Profile = styled.div`
    width: fit-content;
    height: fit-content;
    background-color: #fff;
    padding: 2rem;
    text-align: center;

    h2 {
        font-size: 1.25rem;
        margin-top: 0.5rem;
        color: var(--text-dark);
    }

    @media screen and (max-width: 600px) {
        width: fit-content;
    }

    .user-action {
        padding-top: 2rem;
    }
`

const UserAction = styled.a`
    padding: 0.875rem 1.5rem;
    margin-top: 0.5rem;
    border-style: none;
    border-radius: 0.5rem;
    color: var(--text-dark);

    display: flex;
    align-items: center;

    svg {
        margin-right: 1rem;
    }

    ${props => props.active && css`
        background-color: #FFE01B;
    `}

    :hover {
        transform: scale(1.04);
    }
    
`




export default ConsultantProfile