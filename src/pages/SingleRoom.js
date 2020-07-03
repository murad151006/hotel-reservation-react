import React, { Component } from 'react'
import defaultBG from '../images/room-1.jpeg'
import {RoomContext} from '../context'
import {Link} from 'react-router-dom'
//import Hero from '../components/Hero'
import Banner from '../components/Banner'
import StyledHero from '../components/StyledHero'

export default class SingleRoom extends Component {
    constructor(props){
        super(props)
      
        this.state = {
            slug : this.props.match.params.slug,
            defaultBG
        }
    }

    static contextType = RoomContext;
    render() {

        const {getRoom} = this.context;

        const room = getRoom(this.state.slug)

        if(!room){
            return <div className="error">
                <h3>No such room could be found</h3>
                <Link to="/rooms" className="btn-primary">
                    Back to rooms
                </Link>
            </div>
        }

        const {name, description, capacity, size, price, extras, breakfast, pets, images} = room;

        const [mainImg, ...defaultIMG] = images;
        console.log(mainImg);
        
        return (
            <>
            <StyledHero img={mainImg || this.state.defaultBG}>
                <Banner title={name}>
                    <Link to="/rooms" className="btn-primary">Back to Rooms</Link>
                </Banner>
            </StyledHero>
            <section className="single-room">
                <div className="single-room-images">

                {defaultIMG.map((image, index) =>{
                    return <img src={image} key={index} alt={name}/>
                })}
                </div>
            <div className="single-room-info">
                <article className="desc">
                    <h3>description</h3>
            <p>{description}</p>
                </article>

                <article className="info">
                    <h3>Info</h3>
            <h6>Price: ${price} SQFT</h6>
            <h6>size: {size} SQFT</h6>
            <h6>Max Cpacity: {capacity} people</h6>
            <h6>{ pets? "pets allowed": "no pets allowed"}</h6>
            <h6>{ breakfast && "free breakfast"}</h6>
                </article>
            </div>
            </section>

            <section className="room-extras">
                <h6>extras</h6>
                <ul className="extras">
                    {extras.map((extra, index) =>{
                        return <li key={index}> -{extra} </li>
                    })}
                </ul>
            </section>
            </>
        )
    }
}

