import { useState , useRef } from 'react';

export default function App() {

  // const [startTime , setStartTime] = useState(null)
  // const [currTime  , setCurrTime] = useState(null)
  // const intervalRef  = useRef(null)
  // const time = useRef(null)


  // function handleStart(){
  //     setStartTime(Date.now())

  //     clearInterval(intervalRef.current)
  //     intervalRef.current = setInterval(()=>setCurrTime(Date.now()) , 10)
  // }

  // function handleStop(){
  //     clearInterval(intervalRef.current)
  // }

  // if (startTime != null && currTime != null) 
  // time.current = (currTime - startTime)/1000



  const intervalRef = useRef(null)
  const [time , setTime] = useState(0)

  function handleStart(){
      clearInterval(intervalRef.current)
      intervalRef.current = setInterval(()=>setTime((currVal)=>currVal+10), 10)
      
  }

  function handleStop(){
     clearInterval(intervalRef.current)
  }

  function handleReset(){
    setTime(0)
    clearInterval(intervalRef.current)
  }

  
  
  return (
    <div className='flex flex-col h-screen bg-gray-300 items-center justify-evenly'>

        <h1 className='text-4xl mt-2 font-bold'>Stop Watch</h1>

        <div className='flex flex-col items-center justify-center'>
          <div className='w-6 border-4 shadow-2xl shadow-black'></div>
          <div className='h-2 border-3' ></div>
          <div className='h-10 w-10 rounded-[100%] border-4 shadow-xl shadow-gray-600 flex justify-around text-2xl font-extrabold bg-neutral-100'> ' ' </div>
          <div className='h-94 w-96 max-md:h-74 max-md:w-76 border-3 rounded-[100%] shadow-xl shadow-gray-600 bg-black'> 
            <div className='h-92 w-92 max-md:h-72 max-md:w-72 border-4 rounded-[100%] flex p-8 items-center justify-center absolute z-10 bg-slate-300'>
              <div className='text-xl font-semibold border-3 p-2 w-2/3 flex gap-8 shadow-sm shadow-gray-600 bg-neutral-100'>Timer : <span>{time/1000}</span></div>
            </div> 
          </div>

        </div>

        <div className='flex gap-20 max-md:gap-10'>
              <button onClick={handleStart} className='p-3 px-5 max-md:p-2 max-md:px-4 rounded-2xl bg-gray-700 text-neutral-100 cursor-pointer shadow-xl'>Start</button>
              <button onClick={handleReset} className='p-3 px-5 max-md:p-2 max-md:px-4 rounded-2xl bg-gray-700 text-neutral-100 cursor-pointer shadow-xl'>Reset</button>
              <button onClick={handleStop}  className='p-3 px-5 max-md:p-2 max-md:px-4 rounded-2xl bg-gray-700 text-neutral-100 cursor-pointer shadow-xl'>Stop</button>
        </div>
    </div>
  )
}
