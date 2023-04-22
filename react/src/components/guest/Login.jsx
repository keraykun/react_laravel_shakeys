import { useNavigate,Link } from "react-router-dom";
import { useRef } from "react";
import { useStateContext } from "../context/useContextProvider";
import axiosClient from "../../axios-client";
import UserAccess from "../../components/auth/UserAccess"

export default function Login (){

    const email = useRef()
    const password = useRef()
    const navigate = useNavigate()

    const {setRole,token,setToken,role,setAuthRole} = useStateContext()

    const onHandlerSubmit = (ev) =>{
        ev.preventDefault()

        const payload = {
            email:email.current.value,
            password:password.current.value,
        }

        axiosClient.get('/csrf-cookie').then(response => {
            axiosClient.post('/login',payload).
                then(({data})=>{
                    setToken(data.token)
                    if(data.user.role.name==='user'){
                        setRole(data.user.role.name)
                        setAuthRole(data.user.role.name)
                        navigate("/user/profile");
                    }else if(data.user.role.name==='admin'){
                        setRole(data.user.role.name)
                        setAuthRole(data.user.role.name)
                        navigate("/admin/profile");
                    }else{
                        throw Error('user data not found')
                    }
                }).
                catch(err=>{
                    console.log(err)
            })
        });
    }

    return token? <UserAccess role={role}/> :
    <div className="m-5 relative flex flex-col justify-start items-start overflow-hidden">
    <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
    <div>
    <h1 className="text-2xl font-bold text-center">Login to Shakey's</h1>
    </div>
        <form onSubmit={onHandlerSubmit} className="mt-6">
            <div className="mb-2">
                <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-800"
                    >
                    Email
                </label>
                <input
                    ref={email}
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>
            <div className="mb-2">
                <label
                    htmlFor="password"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Password
                </label>
                <input
                    ref={password}
                    type="password"
                    className="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>
            <a
                href="#"
                className="text-lg text-red-600 hover:underline"
            >
                Forget Password?
            </a>
            <div className="mt-6">
                <button  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:bg-green-600">
                    Login
                </button>
            </div>
        </form>

        <p className="mt-8 text-lg font-light text-center text-gray-700">
            {" "}
            Don't have an account?{" "}
            <a href="register" className="font-medium text-blue-600 hover:underline">
                Sign up
            </a>
        </p>
    </div>
    </div>

}
