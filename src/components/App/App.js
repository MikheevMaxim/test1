import React, {useState} from "react";
import './App.css';
import Popup from "../PopUp/Popup";

function App() {
    const [state, setState] = useState(() => {
        return {
            arr: [5, 12],
            popupActive: false,
            sum: 0
        }
    })

    let newInput1Value = React.createRef()
    let newInput2Value = React.createRef()

    const popupActivator = () => {
        state.popupActive = true
        setState({...state})
        state.popupActive = false
        setTimeout(() => {setState({...state})}, 1000)
    }

    const clickButton = () => {
        let input1Value = newInput1Value.current.value
        let input2Value = newInput2Value.current.value
        let sum = +input1Value + +input2Value
        state.sum = sum
        state.arr.push(sum)
        setState({...state})
        popupActivator()
    }

    return (
        <div className="App">
            {state.popupActive ? <Popup sum={state.sum}/> : null}
            <div className="workingField">
                <div className="Arr"><p>{state.arr.join(", ")}</p></div>
                <div  className="inputs">
                    <input className="input1" ref={newInput1Value} autoFocus />
                    <input className="input2" ref={newInput2Value} />
                </div>
                <div onClick={clickButton} className="button"><p>Выполнить</p></div>
            </div>
        </div>
    );
}

export default App;
