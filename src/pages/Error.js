import React from 'react'
import {Link} from 'react-router-dom'
import Hero from '../components/Hero'
import Banner from '../components/Banner'


export default function Error() {
    return (
       
            <Hero>
                <Banner title="404"
                subtitle="Error Not Found"> 
                <Link to="/rooms" className="btn-primary">
                    Return home
                </Link>
                </Banner>
            </Hero>
       
    )
}
