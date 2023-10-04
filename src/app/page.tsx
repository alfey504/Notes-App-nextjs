'use client'

import { GreyButton } from "@/app/components/components"

export default function Home() {
  return (
    <main>
      <div id="header" className=" justify-between flex flex-row">
        <div id="title" className="items-start p-5">
        </div>
        <div id="menu" className=' items-end p-5'>
          <a href='/LogIn' className=' text-gray-200 text-xl p-3 hover:text-yellow-600'>Login</a>
          <a href='/SignUp' className='text-gray-200 text-xl p-3 hover:text-yellow-600'>SingUp</a>
        </div>
      </div>
      <div className="flex flex-row mt-20">
        <div id="description" className='flex flex-col items-start pl-16 pt-20 w-3/5'>
          <div id="desc-title">
            <p className='text-6xl text-yellow-600 font-bold w-1/2'>Notes App</p>
            <p className='text-white text-xl w-3/4 pt-10'>Welcome to Collaborate Notes, the next-generation note-taking app that seamlessly combines the power of note creation with effortless sharing and collaboration. Whether you're a student, professional, or creative thinker, CollaboraNotes is designed to make your note-taking experience more productive, efficient, and collaborative than ever before.</p>
            <div className='flex flex-row mt-14 w-1/2'>
              <GreyButton className='pl-5 pr-5 pt-3 pb-3 mr-5 mt-5 w-36' text='Log In' onClick={()=>{ window.location.href = "/LogIn"}}/>
              <GreyButton className='pl-5 pr-5 pt-2 pb-2 mr-5 mt-5 w-36' text='Sign Up' onClick={()=>{ window.location.href = "/SignUp"}}/>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center">
          <img className="mt-20 ml-10" src="/logo.png" width="350" height="350"/>
        </div>
      </div> 
    </main>
  )
}
