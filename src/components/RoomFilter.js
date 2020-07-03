import React from 'react'
import {useContext} from 'react'
import {RoomContext} from "../context"
import Title from '../components/Title'

const getUnique = (items, value) =>{
    // console.log(items, value);
    
    return [...new Set(items.map(item => item[value]))]
}

export default function RoomFilter({rooms}) {

    const context = useContext(RoomContext)
    
    
    const {
        handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pet
    } = context;

    // filter with room types

    let types = getUnique(rooms, 'type');
    types = ['all', ...types]

    types = types.map((item, index) =>{
    return <option value={item} key={index}>{item}</option>
    })


    //filter with gusets

    let capacities = getUnique(rooms, 'capacity');

    capacities = capacities.map((item, index) =>{
    return <option value={item} key={index}>{item}</option>
    })
     
   
    return (
        <section className="filter-container">
           <Title title="search rooms"/>
           
           <form className="filter-form">
            {/* select type */}

                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                        {types}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="capacity">gusets</label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                        {capacities}
                    </select>
                </div>


                <div className="form-group">
                    <label htmlFor="price">price range ${price}</label>
                    <input type="range" name="price" id="price" min={minPrice} max={maxPrice} value={price} onChange={handleChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="size">size of room</label>
                    <input type="number" name="minSize" id="minSize"  value={minSize} onChange={handleChange} />
                    <input type="number" name="maxSize" id="maxSize"  value={maxSize} onChange={handleChange}/>
                </div>

                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast"  checked={breakfast} onChange={handleChange}/>
                        <label htmlFor="breakfast">Breakfast</label>
                    </div>
                    </div>
                    <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="pet" id="pet" checked={pet} onChange={handleChange}/>
                        <label htmlFor="pet">pet</label>
                    </div>
                    </div>
                    
                

           </form>
        </section>
    )
}
