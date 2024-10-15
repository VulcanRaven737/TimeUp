import { time } from './time.js'

document.getElementById('app').innerHTML = `
  <div class='flex items-center justify-center h-screen'>
    <div class='bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 hover:opacity-75 shadow-xl text-7xl antialiased hover:subpixel-antialiased font-semibold rounded-full backdrop-blur-lg backdrop-blur-sm animate-bounce p-10 m-auto text-slate-900 hover:text-slate-700 underline decoration-purple-900/0 hover:decoration-purple-700 decoration-dotted transition-shadow'>
      <h1 id='time'></h1>
    </div>
  </div>
`
time(document.getElementById('time'))