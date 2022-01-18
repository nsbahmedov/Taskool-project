import styled from "styled-components";


const Buttons = styled.button`

    margin-top: 1.5rem;
    cursor: pointer;
    color: #fff;
    text-align: center;

`

export const AddBtn = styled(Buttons)`
      background-color: #7561DA;
    padding: 0.75rem 2.5rem;
`

export const NextBtn = styled(Buttons)`
        width: 50%;
        align-self: flex-end;
        background-color: #FFE01B;
        padding: 0.5rem 0;
        color: var(--text-dark);
`

export const AddWeekBtn = styled.button`
    cursor: pointer;
    color: #fff;
    text-align: center;
    padding: 0.5rem;
    background-color: #B6A5F5;
    border-radius: 0.5rem;
`



export default Buttons