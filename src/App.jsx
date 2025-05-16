import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-pink-400">
      <div className="bg-white/80 p-10 rounded-2xl shadow-2xl flex flex-col items-center">
        <h1 className="text-3xl font-bold text-indigo-700 mb-4">
          🎉 Tailwind CSS is Working!
        </h1>
        <p className="text-lg text-gray-700">
          If you see this centered, colorful card—congrats, Tailwind is set up!
        </p>
      </div>
    </div>
  );
}

export default App;

