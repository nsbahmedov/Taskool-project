import React from 'react'
import styled from 'styled-components'
import {AddBtn} from '../../styled-components/Buttons'
import {Link} from 'react-router-dom'



const EmptyCourse = () => {
    return (
        <Empty>
            <h2>Kurslarım</h2>
            <div className='empty-course border'>
                <img src={require('../../assets/images/emty-course.png')} alt='emty course' />
                <h3>Add your first course</h3>
                <p>You dont publish any course yet.<br/>
                    Start with your first course</p>
                <AddBtn as={Link} to={'/UploadCourse'} className='border'>
                   Kurs əlavə et
                    </AddBtn>
            </div>
        </Empty>
    )
}


const Empty = styled.div`
    width: fit-content;
    height: fit-content;
    padding: 0.5rem 2rem;
    
    .empty-course {
        text-align: center;
        background-color: #fff;
        padding: 2rem 1rem;
        margin-top: 2rem;
    }

    h2 {
        color: var(--text-gray-1);
    }

    h3 {
        font-size: 1.25rem;
        color: var(--text-purple);
    }

    p {
        margin-top: 0.5rem;
        color: var(--text-gray-3);
        margin-bottom: 3rem;
    }

`



export default EmptyCourse
