import Room from "./Room";
import { useState } from "react";



const RoomManage = ({roomList}) => {

    const[isBooking , handleBook] = useState (roomList)
    return(
        <>
        <div className="roomContainer">
            {
                roomList.map(item=>(
                    <Room
                        id = {item.roomId}
                        price = {item.price}
                        roomType = {item.roomType}
                        ac = {`${item.AC}`}
                        isBooked = {item.isBooked}
                        
                    
                        
                    />
                ))
            }
        </div>
        
        
        
        </>
    )
   
}
 
export default RoomManage;