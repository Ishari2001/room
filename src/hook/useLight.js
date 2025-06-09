
import { useState } from "react"


const useLight = ()=>{
    const [isSwitchOn , setIsSwitchOn] = useState (false)
    

    const handleSwitch = ()=>{
        isSwitchOn ? setIsSwitchOn(false) : setIsSwitchOn(true)
    }

    

    return(
        {isSwitchOn,handleSwitch}
       
    )
}
export default useLight;