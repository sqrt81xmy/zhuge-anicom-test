import "./App.css" 
import {FlipUpWithOcclusionMultiLines,goFlipUpWithOcclusionMultiLines} from "zhuge-anicom"
import {FlipUpWithOcclusion,goFlipUpWithOcclusion} from "zhuge-anicom"
function App() { 
    const handleOnClick = ()=>{
        // goFlipUpWithOcclusionMultiLines()
        goFlipUpWithOcclusion()
    }
    return (
        <div className="App"> 
            {/* <FlipUpWithOcclusionMultiLines text={"今天的天可真蓝啊今天的天可真蓝啊"} cnt={8}/> */}
            <FlipUpWithOcclusion text="今天的天可真蓝啊"/>
            <button onClick={handleOnClick}></button>
        </div>
    )
}

export default App
