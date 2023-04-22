import { NavLink, Outlet,Navigate, useNavigate } from "react-router-dom"
import axiosClient from "../../axios-client"
import { useEffect } from "react"
import { useStateContext } from "../context/useContextProvider"


function AdminLayout(){

   const {role,setRole,setToken,token} = useStateContext()
   const navigate = useNavigate()

    useEffect(()=>{
        if(token){
         axiosClient.get('admin/profile').
            then((data)=>{
               setRole(data.data.role.name)
            }).catch((error)=>{
                console.log(error,'admin')
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
     role==='admin' ?
    <div id="defaultLayout">
        <aside>
            <NavLink to='/login'> Login</NavLink>
            <NavLink to='/admin/home'> Home</NavLink>
            <NavLink to='/admin/setting'>Setting</NavLink>
            <NavLink to='/admin/profile'>Profile</NavLink>
            <NavLink to='/admin/product'>Product</NavLink>
            <NavLink to='/' onClick={onLogOut}>Logoutss</NavLink>
        </aside>
        <div className="content">
        <header>
            <div>headerx</div>
        </header>
        <main>
        <Outlet/>
        </main>
        </div>
    </div>
      : <Navigate to="/404"/>
}
export default AdminLayout

