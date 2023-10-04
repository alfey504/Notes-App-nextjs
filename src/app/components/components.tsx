"use client"

import { ChangeEvent } from "react"

export function GreyButton(props: {className: string, text: string, onClick:()=>void}): JSX.Element{
    let {className, text, onClick} = props
    return (
        <button type="button" className={className + ' text-2xl text-white border rounded-xl bg-light-grey border-light-grey hover:bg-yellow-600 hover:text-black active:bg-yellow-200'} onClick={onClick}>{text}</button>
    )
}

export function TextInput(props: {className: string, placeHolder: string, type: string, onChange: (e: ChangeEvent<HTMLInputElement>)=>void}): JSX.Element {
    let {className, placeHolder, type, onChange} = props
    return(
        <input className={className + " " + "text-xl p-3 text-white bg-transparent border-b"} placeholder={placeHolder} type={type} onChange={onChange}/>
    )
}

export function NavBar(): JSX.Element {
    return(
        <div id="header" className=" justify-between flex flex-row">
            <div id="title" className="items-start p-5">
                <img src="/logo.png" width="50" height="50" onClick={()=>{ window.location.href = "/"}}/>
            </div>
            <div id="menu" className=' items-end p-5'>
                <a href='/LogIn' className=' text-gray-200 text-xl p-3 hover:text-yellow-600'>Login</a>
                <a href='/SignUp' className='text-gray-200 text-xl p-3 hover:text-yellow-600'>SingUp</a>
            </div>
        </div>
    )
}