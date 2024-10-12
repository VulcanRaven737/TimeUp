import { time } from './time.js'
import './style.css'

document.getElementById('app').innerHTML = `
  <div>
    <h1 id='time'></h1>
  </div>
`
time(document.getElementById('time'))