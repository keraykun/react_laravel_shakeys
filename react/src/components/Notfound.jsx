import { useState } from "react"
import { Link } from "react-router-dom"
export default function NotFound(){
    const [role,setRole] = useState(localStorage.getItem('USER'))
    const redirectBack =(value) =>{
        switch (value) {
            case 'admin':
                return <p>page not 404 redirect to profile <Link to='/admin/profile'>go back</Link></p>
            case 'user':
                return <p>page not 404 redirect to profile <Link to='/user/profile'>go back</Link></p>
            default:
                localStorage.clear()
                return <p>page not 404 redirect to login <button onClick={()=>window.location.replace("/login")}>go back</button></p>
        }
    }
    return (<div>{redirectBack(role)}</div>)
}
