'use client'

import { GreyButton, NavBar, TextInput } from "@/app/components/components";
import { useState } from "react";
import { UserService } from "../services/user-services";

export default  function LogIn(): JSX.Element {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [retypedPassword, setRetypedPassword] = useState("")
    
    const submit = () => {
        if(username == ""){
            alert("Please enter your username")
        }else if(password == ""){
            alert("Please enter a password")
        }else if(retypedPassword == ""){
            alert("please retype your password")
        }else if(retypedPassword != password){
            alert("the password does not match")
        }else{
            signUp(username, password)
        }
    }

    const signUp = async (username: string, password: string) => {
        const userService = new UserService()
        let response  = await userService.signUpUser(username, password)
        if(!response){
            alert("Error signing you up")
            return
        }
        window.location.href = "/"
    }

    return(
        <main>
            <NavBar/>
            <div className="flex flex-col justify-center items-center">
                <div id="login-form" className="bg-light-grey flex flex-col justify-center items-center mt-16 rounded-3xl w-4/12">
                    <img className="mt-10" src="/logo.png" width="75" height="75"/>
                    <text className="text-3xl mt-2 mb-5 text-yellow-600">Notes App</text>
                    <TextInput className="m-5" placeHolder="username" type="text" onChange={(e)=> {setUsername(e.target.value)}}/>
                    <TextInput className="m-5" placeHolder="password" type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
                    <TextInput className="m-5" placeHolder="retype-password" type="password" onChange={(e)=>{setRetypedPassword(e.target.value)}}/>
                    <text className="text-white text-sm mt-4">Already have an account? <a className=" text-yellow-600 hover:underline active:text-yellow-200" href="/SignUp">Click here</a> to Log In</text>
                    <GreyButton className="m-10 pl-5 pr-5 pt-3 pb-3" text="Sign In" onClick={submit}/>
                </div>
            </div>
        </main>
    )
}