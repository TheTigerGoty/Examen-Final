import React from 'react'
import { Banner, Footer, Form, Header } from './components'

export const App = () => {
    return (
        <>
            <header className='bg-[#F5F7FA]'>
                <Header />
                <Banner />
            </header>
            <Form />
            <Footer />
        </>
    )
}
