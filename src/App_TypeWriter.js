 
import {TypeWriter} from "zhuge-anicom"
import { useEffect, useState } from "react"

function App() {

    const [click,setClick] = useState(false)
    
    return (
        <>
            <TypeWriter style={{'fontFamily':'华文行楷','fontSize':'30px'}} 
                        cycle={3} infinite={false} animationKey={click} id="ll">
                今天的天真好啊
            </TypeWriter>
            <button onClick={()=>{setClick((click)=>{return !click;})}} style={{'width':'30px','height':'30px'}}></button>
        </>
    )
}

export default App
