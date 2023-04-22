import { NavLink, Outlet,Navigate } from "react-router-dom"
import axiosClient from "../../axios-client"
import { useEffect } from "react"
import { useStateContext } from "../context/useContextProvider"

function UserLayout(){

    const {role,setRole,token,setToken} = useStateContext()


     useEffect(()=>{
         if(token){
          axiosClient.get('user/profile').
             then((data)=>{
                setRole(data.data.role.name)
             }).catch((error)=>{
                 console.log(error,'user')
             })

         }
     },[token])

     function onLogOut(e){
         e.preventDefault()
         axiosClient.post('/logout').
         then((data)=>{
            setRole({})
            setToken(null)
            localStorage.clear()
       })
     }

     return role===null? <div>Loading..</div> :
     role==='user' ?
     <div id="defaultLayout">
        <aside>
            <NavLink to='/login'> Login</NavLink>
            <NavLink to='/user/home'> Home</NavLink>
            <NavLink to='/user/setting'>Setting</NavLink>
            <NavLink to='/user/profile'>Profile</NavLink>
            <NavLink to='/' onClick={onLogOut}>Logoutss</NavLink>
        </aside>
        <div className="content">
        <header>
            <div>headerx</div>
        </header>
        <main>
            user nav
        <Outlet/>
        </main>
        </div>
    </div>
    : <Navigate to="/404"/>
}
export default UserLayout
