import React from 'react'
import loading from '../images/gif/loading-arrow.gif'


export default function Loading() {
    return (
        <div>
            <h4>loading the featured photos</h4>
            <img src={loading} alt="loading"/>
        </div>
    )
}
