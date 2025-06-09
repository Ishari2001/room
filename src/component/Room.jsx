import useBook from "../hook/useBook";
import useLight from "../hook/useLight";


const Room = ({id,price,roomType,ac,isBooked}) => {


  const { isSwitchOn , handleSwitch} = useLight()
  const {isBooking , handleBook} =  useBook()
  
    return (

       <div className="roomCard">
        <h2>Room Number: {id} </h2>
        <h3>Room Type : {roomType}</h3>
        <h3>Price : {price}</h3>
        <h3>AC : {`${ac}`}</h3>
        <h4>Light : {`${isSwitchOn}`} </h4>
        <h4>Book : {`${isBooked}`} </h4>
        <button onClick={handleSwitch} >Light</button>


       </div>
      );
}
 
export default Room;