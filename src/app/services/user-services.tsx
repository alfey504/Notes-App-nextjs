
type User = {
    username: string,
    token: string
}

export class UserService {

    private static user: User | undefined = undefined
    
    async signUpUser(username: string, password: string): Promise<boolean> {
        const url = this.makeLoginRequestString(username, password)
        try {
            const response = await fetch(url)
            const data = await response.json();
            return (data.success == 1)?  true :  false
        }catch(error: any) {
            console.log(error)
            return false
        }
    }

    private makeLoginRequestString(username: string, password: string): string{
        return "/api/user/signup?username=" + username + "&password=" + password 
    }

    static getUser(): User | undefined{
        return UserService.user
    }
}