import React, { useState } from 'react'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import { icons } from '../../../assets/icons/icons'
import Inputs from '../../../styled-components/Inputs'
import Selects from '../../../styled-components/Selects'
import {NextBtn} from '../../../styled-components/Buttons';
import TextAreas from '../../../styled-components/TextAreas'
import UploadCourse from '../UploadCourse';
import Footer from '../../template/Footer'




const CreateNewCourse = () => {

    const [value, setValue] = useState(new Date());

    return (
        <div>
            <UploadCourse/>
        <NewCourse className='d-flex justify-between'>
                {/* NEW COURSE COVER */}
            <CourseCover className='border'>
                <h4>Start building your project</h4>
                <div className='coverContent d-flex justify-between align-center'>
                    <div className='coverPhoto d-flex flex-column align-center'>
                        <div className='circle'>{icons.covergallery}</div>
                        <p>Cover photo</p>
                        <small>(png, jpg, jpeg)</small>
                    </div>
                    <div className='coverVideo d-flex flex-column align-center'>
                        <div className='circle'>{icons.videoplay}</div>
                        <p>Video lesson</p>
                        <small>(Max size 2MB)</small>
                    </div>
                </div>
            </CourseCover>

                {/* NEW COURSE DETAILS */}
            <CourseDetails className='d-flex flex-column'>
                <Inputs placeholder='Sessiyanın başlığı' />
                    {/* calendaar */}
                <div className='calendar'>
                <p>Tarixi seçin</p>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <StaticDatePicker
                        displayStaticWrapperAs="desktop"
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                    />
                </LocalizationProvider>
                </div>
                <Selects><option>Choose main category</option></Selects>
                <Inputs placeholder='Məbləği daxil edin' />
                <Selects><option>Choose language</option></Selects>
                <Inputs placeholder='Kursun youtube linki' />
                <TextAreas placeholder={'Description'}></TextAreas>
                <NextBtn as={Link} to={'/coursecontent'} className='border'>
                    Next</NextBtn>
            </CourseDetails>
        </NewCourse>

        <Footer />
        </div>
    )
}


const NewCourse = styled.section`
    flex: 1;
    padding: 2.5rem 6rem;

    @media screen and (max-width: 768px) {
        padding: 1rem;
        flex-direction: column;

        div {
            width: 100%;
        }
    }
`

const CourseCover = styled.div`
    width: 50%;
    height: fit-content;
    padding:2rem 3rem;
    border: 2px dashed #BDBDBD;
    text-align: center;

    @media screen and (max-width: 768px) {
        padding: 1rem;
    }


    h4 {
        font-size: 1.25rem;
        color: var(--text-gray-3);
        margin-bottom: 2.5rem;
        padding: 1rem 5rem;
    }

    .coverContent {
        padding: 1rem 4rem;
    }

    .circle {
        width: 3.5rem;
        height: 3.5rem;
        padding: 1rem;
        background-color: #CCE1F6;
        border-radius: 100%; 
    }

    p {
        margin-top: 1.5rem;
        color: var(--text-dark);
    }

    small {
        margin-top: 0.5rem;
        color: var(--text-gray-2);
    }

    @media screen and (max-width: 768px) {
        .coverContent {
        padding: 1rem;
        }
    }

`

const CourseDetails = styled.div`
    width: 50%;
    padding-left: 8.5rem;

    > *:not(:first-child) {
        margin-top: 1.5rem;
    }

    p{
        color:  var(--text-gray-2);
    }

    @media screen and (max-width: 768px) {
        padding: 1rem;
    }
`



export default CreateNewCourse
