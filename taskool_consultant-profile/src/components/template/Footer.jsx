import React from 'react'
import styled, {css} from 'styled-components'
import { icons } from '../../assets/icons/icons'

const Footer = () => {
    return (
        <FooterDiv className='d-flex justify-between align-center padding'>
            <div className='copyright d-flex align-center'>
                {icons.copyright} <p>Taskool 2021. Bütün hüquqlar qorunur.</p>
            </div>

            <div className='footer-links'>
                <FooterLink>Qaydalar və şərtlər</FooterLink>
                <FooterLink>Məxfilik siyasəti</FooterLink>

            </div>
            
        </FooterDiv>
    )
}


// FOOTER STYLE
const FooterDiv = styled.footer`
    height: fit-content;

    .copyright {
        text-align: center;
    }

    .copyright > p {
        color: var(--text-gray-2);
        margin-left: 0.5rem;
    }

    ${props => props.topBorder && css`
        background-color: red;
    `}

    @media screen and (max-width: 768px) {
        flex-direction: column-reverse;
        padding: 1rem;
    }
`

const FooterLink = styled.a`
    text-decoration: none;
    font-size: 0.875rem;
    color: var(--text-gray-2);
    cursor: pointer;

    :hover {
        color: #000;
    }

    :not(:last-child) {
        margin-right: 2rem;
    }

    

`

export default Footer
