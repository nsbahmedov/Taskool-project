import styled, { css } from "styled-components";


const Selects = styled.select`
    border-style: none;
    border-radius: 8px;
    padding: 1rem;
    color: var(--text-gray-2);
    background-color: var(--detail-bg-gray);

    ${props => props.week && css`
        text-align: center;
        padding: 0.5rem;
        margin-bottom: 1rem;
        visibility: hidden;
    `}
`

export default Selects