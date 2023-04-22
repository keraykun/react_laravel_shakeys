
import axiosClient from "../../axios-client"

export default function UserProfile (){
    const showProfile = (event) =>{
        event.preventDefault()
        axiosClient.get('/profile').
        then((data)=>{
            console.log(data)
        }).catch((error)=>{
            console.log(error)
        })
    }

    return (
    <div>User ssadsa  xd
        <button onClick={showProfile}>Click me</button>
    </div>)

}
