import React from 'react'
import bgimage from '../../assets/img/background.jpg'


export const Layout = ({ children }) => {
    return (
        <div style={
            {
                backgroundImage: `url(${bgimage})`,
                backgroundAttachment:'fixed',
                backgroundSize:'cover',
                width: '100vw',
                height: '100vh'
            }} >{children}</div>
    )
}
