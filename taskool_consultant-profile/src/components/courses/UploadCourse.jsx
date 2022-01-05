import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Footer from '../template/Footer'
import CreateNewCourse from './NewCourse/CreateNewCourse'

const UploadCourse = () => {
    return (
        <Upload className='d-flex flex-column justify-between'>
            <header className='d-flex justify-between align-center'>
                <Link to={'/'}>Kursunu dərc et</Link>
                <Link to={'/'}>Çıxış</Link>
            </header>

            <CreateNewCourse />

            <Footer />
        </Upload>
    )
}


const Upload = styled.div`
    height: 100vh;
    
    header {
        background-color: var(--upload-header);
        padding: 0.5rem 6rem;
        height: fit-content;
    }

    header a {
        color: var(--text-gray-2);
    }

    header a:first-child {
        font-size: 1.25rem;
    }

    header a:last-child {
        font-size: .875rem;
    }

    footer {
        border-top: 1px solid grey;
    }
    
    @media screen and (max-width: 768px) {
        header {
            padding: 1rem;
        }
    }

`

export default UploadCourse
