import { useState } from "react"


const useBook = ()=>{
   
    const [isBooking , setIsBook] = useState ({})

    

    const handleBook = (id)=>{
        setIsBook ((prev)=>prev.map(item=>item.roomId ===id ?{...item, isBooked:!item.isBooked} : item))
    }

    return(
        
        {isBooking , handleBook}
    )
}
export default useBook;