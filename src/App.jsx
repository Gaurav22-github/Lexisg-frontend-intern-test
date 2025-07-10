import React from 'react'
import Chatbox from './components/Chatbox'

export default function App() {
  return (
   <>
   <div className="min-h-screen flex items-center justify-center px-4">
         <div className="w-full max-w-2xl bg-gray-100 rounded-2xl shadow-lg p-6">
           <div className='flex justify-center items-center gap-2'>
            <h1 className="text-2xl font-semibold text-center "> Lexi Legal Assistant</h1>
            <img src="https://framerusercontent.com/images/CSr01inYFSNcBiRsiHyP21guEk.png" alt="" width={26} height={26} />
           </div>
           <Chatbox/>
         </div>
       </div>
   </>
  )
}
