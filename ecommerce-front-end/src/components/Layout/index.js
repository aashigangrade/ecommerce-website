import React from 'react'
import HomePage from '../../containers/HomePage'
import Header from '../Header'

export default function Layout(props) {
    return (
        <>
            <Header/>
            <HomePage/>
            {props.children}
        </>
    )
}
