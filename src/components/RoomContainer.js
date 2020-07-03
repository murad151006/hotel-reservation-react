import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import {withRoomConsumer} from '../context'
import Loading from '../components/Loading'

function RoomConsumer({context}){
    const {loading, sortedRooms, rooms} = context

                if (loading){
                    return <Loading/>
                }
    
                return (
                    <>
                    <RoomFilter rooms={rooms}/>
                    <RoomList rooms={sortedRooms}/>
                </>
                ) 
}

export default withRoomConsumer(RoomConsumer)

// import React from 'react'
// import RoomFilter from './RoomFilter'
// import RoomList from './RoomList'
// import {RoomConsumer} from '../context'
// import Loading from '../components/Loading'
// export default function RoomContainer() {

//     <RoomConsumer>
//         {value =>{
//             const {loading, sortedRooms, rooms} = value

//             if (loading){
//                 return <Loading/>
//             }

//             return (
//                 <div>
//                 <RoomFilter/>
//                 <RoomList/>
//                 Hello from room container
//             </div>
//             )
//         }}
//     </RoomConsumer>
// }
