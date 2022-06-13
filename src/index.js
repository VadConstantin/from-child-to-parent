import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ToDoList from './components/ToDoList'
import Incrementeur from './components/Incrementeur'

const Verdict = ({temperature}) => {
  return <div>{temperature >= 100 ? "l'eau bout" : "l'eau ne bout pas"}</div>
}


const TempInput = ({ onTemperatureChange }) => {
  const [ temperature, setTemperature ] = useState("")

  const handleChange = (e) => {

    onTemperatureChange(e.target.value) // on fait remonter l'information au parent RealTemp via ce props :
    // https://javascript.plainenglish.io/how-to-pass-props-from-child-to-parent-component-in-react-d90752ff4d01
    setTemperature(e.target.value)

  }

  return (
    <div>
      <form>
        <label htmlFor="temp">temperature</label>
        <input id="temp" type="text" value={temperature || ""} name="temperature" onChange={handleChange}/>
      </form>
    </div>
  )
}


const ParentComponent = () => {
  const [ temp, setTemp ] = useState(1000)

  const pullTemp = (temp) => {
    setTemp(temp)
  }

  return (
    <div>
      <TempInput onTemperatureChange={pullTemp}/>
      <Verdict temperature={temp} />
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ParentComponent />
  </React.StrictMode>
);
