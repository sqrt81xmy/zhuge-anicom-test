import { Wheel } from "zhuge-anicom";

function App() {
    const r = 0.1*window.innerWidth;
    return ( 
        <Wheel r={r} AlbumData={ [ 
            "星期一","星期二","星期三","星期四"  
       ]}/>
    )
}

export default App
