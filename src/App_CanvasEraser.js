import {CanvasEraser} from "zhuge-anicom"
// import CanvasEraser from "zhuge-animation"
import "./App.css"
//refrence App style:
// width: 100vw;
// height: 100vh;
// position: relative;
function App() {
    console.log("jjjj")
    return (
        <div className = "App">
            <CanvasEraser/>
            <img src="/b3.png" className="App-img"/>
        </div>  
    )
}

export default App
