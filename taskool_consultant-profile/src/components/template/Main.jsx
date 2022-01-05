import React from 'react'
import styled from 'styled-components'
import ConsultantProfile from '../ConsultantProfile/ConsultantProfile'
import EmptyCourse from '../courses/EmptyCourse'



const Main = () => {
    return (
        <Section className='d-flex padding'>
            <ConsultantProfile />
            <div className='courses d-flex'>
                <EmptyCourse />
            </div>

        </Section>
    )
}




// MAIN SECTION STYLE
const Section = styled.section`
    background-color: #f9f9f9;
    height: fit-content;
    flex: 1;
    
    .courses {
        flex-wrap: wrap;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
        height: fit-content;
        padding: 1rem;

        flex-direction: column;

        div {
            width: 100%;
        }


    }
`










export default Main
