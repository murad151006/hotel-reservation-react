import React from 'react'
import defaultImg from '../images/room-1.jpeg'
import {Link} from 'react-router-dom'
import propTypes from 'prop-types';

export default function Room({rooms}) {

    const {name, slug, images, price} = rooms;
   
    
    return (
        <article className="room">
            <div className="img-container">
                <img src={images[0] || defaultImg} alt="sr"/>
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>per night</p>
                </div>
                <Link to={`/rooms/${slug}`} className="room-link btn-primary">
                    Features
                </Link>
            </div>
            <p className="room-info">
                {name}
            </p>
        </article>
        
    )
}

Room.propTypes = {
    room: propTypes.shape({
        name : propTypes.string.isRequired,
        slug : propTypes.string.isRequired,
        images : propTypes.arrayOf(propTypes.string).isRequired,
        price : propTypes.number.isRequired
    })
}
