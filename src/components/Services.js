import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'



export default class Services extends Component {

    state={
        services : [
            {
                icon : <FaCocktail/>,
                title: "free cocktail",
                info: "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  (The Extremes of Good and Evil) by Cicero, written in 45 BC. "
            },

            {
                icon : <FaHiking/>,
                title: "free cocktail",
                info: "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  (The Extremes of Good and Evil) by Cicero, written in 45 BC. "
            },

            {
                icon : <FaShuttleVan/>,
                title: "free cocktail",
                info: "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  (The Extremes of Good and Evil) by Cicero, written in 45 BC. "
            },
            {
                icon : <FaBeer/>,
                title: "free cocktail",
                info: "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  (The Extremes of Good and Evil) by Cicero, written in 45 BC. "
            },
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services"></Title>
                <div className="services-center">
                {this.state.services.map((item,index) =>{
                    return <article key={index} className="service">
                        <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
                    </article>
                })}
                </div>
            </section>
        )
    }
}
