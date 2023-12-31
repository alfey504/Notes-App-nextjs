'use client'

import { GreyButton, NavBar } from "@/app/utlis/components/components"
import { TextInput } from "@/app/utlis/components/components"
import { useState } from "react"
import { UserService } from "../utlis/services/user-services"
import { User } from "../utlis/models/user"
import cookieCutter from "cookie-cutter"

export default function LogIn(): JSX.Element {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const submit = () => {
        if(username == ""){
            alert("please enter an username")
        }else if(password == ""){
            alert("please enter your password")
        }else{
            loginUser()
        }
    }

    const loginUser = async () => {
        const userService = new UserService()
        let user = await userService.logInUser(username, password)
        if(user == undefined) {
            alert("Unable to login user")
            return
        }
        console.log(user)
        setCookies(user)
    }

    const setCookies = async (user: User) => {
        cookieCutter.set("username", user.username)
        cookieCutter.set("token", user.token)
    }

    return(
        <main>
            <NavBar/>
            <div className="flex flex-col justify-center items-center">
                <div id="login-form" className="bg-light-grey flex flex-col justify-center items-center mt-32 rounded-3xl w-4/12">
                    <img className="mt-10" src="/logo.png" width="75" height="75"/>
                    <text className="text-3xl mt-2 mb-5 text-yellow-600">Notes App</text>
                    <TextInput className="m-5" placeHolder="username" type="text" onChange={(e)=>{setUsername(e.target.value)}}/>
                    <TextInput className="m-5" placeHolder="password" type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
                    <text className="text-white text-sm mt-4">Don't have an account? <a className=" text-yellow-600 hover:underline active:text-yellow-200" href="/SignUp">Click here</a> to Sign Up</text>
                    <GreyButton className="m-10 pl-5 pr-5 pt-3 pb-3" text="Log In" onClick={submit}/>
                </div>
            </div>
        </main>
    )
}



