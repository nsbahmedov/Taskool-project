import React, { useState } from 'react'
import UploadCourse from '../UploadCourse';
import Footer from '../../template/Footer'
import styled from 'styled-components';
import Inputs from '../../../styled-components/Inputs'
import Selects from '../../../styled-components/Selects'
import { NextBtn } from '../../../styled-components/Buttons';
import { Link } from 'react-router-dom';
import { AddWeekBtn } from '../../../styled-components/Buttons'
import TextIcon from '../../../assets/images/text-icon.png'
import GalleryIcon from '../../../assets/images/gallery-green.png'
import ReceiptIcon from '../../../assets/images/receipt-edit.png'
import ChartIcon from '../../../assets/images/chart.png'
import VideoIcon from '../../../assets/images/video-play.png'




const CourseContent = () => {

    const [week, setWeek] = useState(1)
    const isNewWeek = week > 1 ? 'visible' : 'hidden'

    const addNewWeek = () => {
        setWeek(prev => 2)
    }

    return (
        <AddContentOfCourse>
            <UploadCourse />
           
            <Content>
            <div className='week'>
                <Selects week style={{visibility: `${isNewWeek}`}}>
                    <option>Həftə {week}</option>
                    </Selects>
                <div className='content-area'>
                    <h2>Create content of Week {week}</h2>
                    <div className='all-contents'></div>
                </div>
            </div>
                <CourseDetails className='d-flex flex-column'>
                    <div className='week-info'>
                        <h2>Həftə {week}</h2>
                        <AddWeekBtn onClick={addNewWeek}>+ &nbsp;&nbsp; Add new week</AddWeekBtn>
                    </div>
                    <div className='toolbox'>
                        <div className='toolbox-text'>
                            <p className='head-text'>Toolbox</p>
                            <p className='body-text'>Drag tools to the box and create assignment</p>
                        </div>
                        <div className='toolbox-main'>
                            <div className='elements'>
                                <div className='element'>
                                    <div className='circle circle1'>
                                        <img src={TextIcon} />
                                    </div>
                                    <p>Text</p>
                                </div>

                                <div className='element'>
                                    <div className='circle circle2'>
                                        <img src={GalleryIcon} />
                                    </div>
                                    <p>İmage</p>
                                </div>

                                <div className='element'>
                                    <div className='circle circle3'>
                                        <img src={VideoIcon} />
                                    </div>
                                    <p>İmage</p>
                                </div>

                                <div className='element'>
                                    <div className='circle circle4'>
                                        <img src={ReceiptIcon} />
                                    </div>
                                    <p>Quiz</p>
                                </div>
                            </div>
                            <div className='elements'>
                                <div className='element'>
                                    <div className='circle circle5'>
                                        <img src={ChartIcon} />
                                    </div>
                                    <p>Chart</p>
                                </div>

                                <div className='element'>
                                    <div className='circle circle2'>
                                        <img src={GalleryIcon} />
                                    </div>
                                    <p>Rate</p>
                                </div>

                                <div className='element'>
                                    <div className='circle circle3'>
                                        <img src={VideoIcon} />
                                    </div>
                                    <p>Simulation</p>
                                </div>

                                <div className='element'>
                                    <div className='circle circle4'>
                                        <img src={ReceiptIcon} />
                                    </div>
                                    <p>Teamwork</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Selects><option>Choose main category</option></Selects>
                    <Inputs placeholder='Məbləği daxil edin' />
                    <Selects><option>Choose language</option></Selects>
                    <NextBtn as={Link} to={'/coursecontent'} className='border'>
                        Paylaş</NextBtn>
                </CourseDetails>
            </Content>
            <Footer />
        </AddContentOfCourse>
    )
}


const AddContentOfCourse = styled.div`
    display: flex;
    flex-direction: column;
`

const Content = styled.section`
    padding: 3rem 6rem;
    display: flex;
    justify-content: space-between;

    .week {
        display: flex;
        flex-direction: column;
    }

    .content-area {
        height: 50%;
        padding: 2rem 8rem;
        border: 2px dashed #BDBDBD;
        border-radius: 0.5rem;
        display: flex;
        flex-direction: column;
        h2 {
            font-size: 1.25rem;
            color: #828282;
        }
    }

    .all-contents {
        padding: 1rem;
        height: 10rem;
    }
`

const CourseDetails = styled.div`
    width: 50%;
    padding-left: 8.5rem;

    .week-info {
        display: flex;
        justify-content: space-between;

        h2 {
            color: #4F4F4F;
        }
    }

    .elements {
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .element {
        display: flex;
        flex-direction: column;
        align-items: center;

        p {
            margin-top: 0.5rem;
        }
    }

    .circle {
        padding: 0.5rem;
        border-radius: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .circle1 {
        background-color: #F7DAC8;
    }

    .circle2 {
        background-color: #E2F6CF;
    }

    .circle3 {
        background-color: #E7E1FD;
    }

    .circle4 {
        background-color: #FBE8F9;
    }

    .circle5 {
        background-color: #CCE1F6;
    }


    .toolbox-text {

        .head-text {
            color: #4F4F4F;
        }
        .body-text {
            color: #828282;
            margin-top: 0.5rem;
        }
    }

    .toolbox-main {
        border: 1px solid #BDBDBD;
        border-radius: 0.5rem;
        margin-top: 1.5rem;
        display: flex;
        flex-direction: column;
    }

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



export default CourseContent
