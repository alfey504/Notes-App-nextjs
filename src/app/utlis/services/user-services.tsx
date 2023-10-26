import axios from "axios"

type User = {
    username: string,
    token: string
}

export class UserService {

    async signUpUser(username: string, password: string): Promise<boolean> {
        const url = "http://localhost:8080/user/signup"
        const params = {
            username: username,
            password: password
        }
        const config = {
            headers: {
                'Content-Type' : "application/json",
                Accept: "application/json"
            }
        }
        try {
            const response = await axios.post(url, params, config)
            console.log(response)
            return (response.status == 200)?  true :  false
        }catch(error: any) {
            console.log(error)
            return false
        }
    }

    async logInUser(username: string, password: string): Promise<User | undefined> {
        const url = "http://localhost:8080/user/login"
        const params = {
            username: username,
            password: password
        }
        const config = {
            headers: {
                'Content-Type' : "application/json",
                Accept: "application/json"
            }
        }
        try {
            const response = await axios.post(url, params, config)
            console.log(response)
            const user: User = {
                username: response.data.Data.data.username,
                token: response.data.Data.data.token
            }
            return user
        }catch(error: any) {
            console.log(error)
            return undefined
        }
    }
}