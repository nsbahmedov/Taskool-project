import React from 'react'
import styled from 'styled-components'
import Header from './template/Header'
import Main from './template/Main'
import Footer from './template/Footer'

const Consultant = () => {
    return (
        <Container className='d-flex flex-column justify-between'>
            <Header />
            <Main />
            <Footer />
        </Container>
    )
}



// HOME PAGE STYLE
const Container = styled.div`
    width: 100%;
    height: 100vh;
`

export default Consultant




