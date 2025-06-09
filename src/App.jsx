import RoomBook from "./component/RoomBook"
import RoomManage from "./component/RoomManage"
import './App.css'

function App() {

  const roomList=[
    {
      roomId:1,
      roomType:"Single Room",
      price:2500,
      AC:true,
      isBooked: false


    },
    {
      roomId:2,
      roomType:"Double Room",
      price:5000,
      AC:true,
      isBooked: false
    },
    {
      roomId:3,
      roomType:"Family Room",
      price:10000,
      AC:true,
      isBooked: false
    },
    {
      roomId:4,
      roomType:"Suite Room",
      price:15000,
      AC:true,
      isBooked: false
    },
    {
      roomId:5,
      roomType:"Deluxe Room",
      price:20000,
      AC:true,
      isBooked: false
    }

  ]

  return(
   <>
       <RoomManage roomList={roomList}/>
       <RoomBook roomList={roomList}/>
       
       
   </>
     
    
  )

  
  




}

export default App
