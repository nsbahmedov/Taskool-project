import styled from "styled-components";

const TextAreas = styled.textarea`
    border-style: none;
    border-radius: 8px;
    padding: 1rem;
    color: var(--text-gray-2);
    background-color: var(--detail-bg-gray);
    min-width: 100%;
    max-width: 100%;
    min-height: 25vh;
    max-height: 35vh;
    ::placeholder {
        color: #000;
        font-size: 0.875rem;
    }
`

export default TextAreas