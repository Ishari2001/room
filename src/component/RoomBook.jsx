import useBook from "../hook/useBook";


const RoomBook = ({roomList}) => {

     

   
    return(
        <>
        <div className="bookContainer">
            {
                roomList.map(item=>(
                    <div className="roomCon">
                        <div className="room">
                            <p>Room Number : {item.roomId}</p>
                        </div>
                        <div className="status">
                            <button onClick={()=>{handleBook(item.roomId)}}>booking</button>
                            
                            


                            </div>
                        </div>
                
                ))
            }
        </div>
        
        
        
        </>
    )
   
}
 
export default RoomBook;