import { Outlet,Link,NavLink } from "react-router-dom";
import { HiSearch,HiOutlineShoppingCart } from 'react-icons/hi';
import { BsFacebook,BsTwitter,BsInstagram } from 'react-icons/bs';


export default function GuestLayout(){

    return (
    <div className="landing-page h-screen flex flex-col justify-between items-stretch">
        <nav className="flex flex-col flex-none">
            <section className="nav-list pb-6 flex w-full justify-around">
                <div className="hero-list flex items-center">
                    <img style={{ width: 320, AspectRatio: 320 / 110, height: 110 }} src="../src/images/logo.png"/>
                </div>
                <ul className="flex text-white text-lg items-center gap-10">
                    <li className="cursor-pointer hover:text-amber-300 ease-out duration-300">
                        <NavLink to="/" className="hero-list hover:border-b-4 border-amber-300">Home</NavLink>
                    </li>
                    <li className="cursor-pointer hover:text-amber-300 ease-out duration-300">
                        <NavLink to="menus" className="hero-list hover:border-b-4 border-amber-300">Menus</NavLink>
                    </li>
                    <li className="cursor-pointer hover:text-amber-300 ease-out duration-300">
                        <NavLink to="promos" className="hero-list hover:border-b-4 border-amber-300">Promos</NavLink>
                    </li>
                    <li className="cursor-pointer hover:text-amber-300 ease-out duration-300">
                        <NavLink to="bookparty" className="hero-list hover:border-b-4 border-amber-300">Book a Party</NavLink>
                    </li>
                </ul>
                <ul className="flex text-white text-lg items-center gap-10">
                    <li className="flex items-center"><Link className="p-2 bg-slate-700 hover:bg-slate-600  rounded-full"><HiSearch  className="text-3xl text-white"/></Link></li>
                    <li className="flex items-center"><Link className="p-2 bg-slate-700 hover:bg-slate-600  rounded-full"><HiOutlineShoppingCart  className="text-3xl text-white"/></Link></li>
                    <li className="bg-red-700 rounded-md hover:bg-red-600 cursor-pointer px-3 py-1"><Link to='login'>Login</Link></li>
                    <li className="bg-red-700 rounded-md hover:bg-red-600 cursor-pointer px-3 py-1"><Link to='register'>Register</Link></li>
                </ul>
            </section>
        </nav>
        <main className="w-full flex-grow">
          <Outlet/>
        </main>
        <footer className="h-24 bg-black w-full flex py-3 flex-none">
            <div  className='min-w-[70%] mx-auto flex justify-center gap-20'>
            <ul className="social-medias flex gap-5">
                <li className="flex items-center"><Link className=" bg-black  rounded-full"><BsFacebook  className="text-3xl text-white"/></Link></li>
                <li className="flex items-center"><Link className=" bg-white text-black  rounded-full"><BsInstagram  className="text-3xl text-black"/></Link></li>
                <li className="flex items-center"><Link className=" bg-white text-black  rounded-full"><BsTwitter  className="text-3xl p-1 text-black"/></Link></li>
            </ul>
            <ul className="flex text-uppercase text-slate-200 uppercase font-bold gap-5">
                <li className="flex items-center"><Link className="hover:text-amber-300 ease-out duration-700">home</Link></li>
                <li className="flex items-center"><Link className="hover:text-amber-300 ease-out duration-700">about us</Link></li>
                <li className="flex items-center"><Link className="hover:text-amber-300 ease-out duration-700">Home</Link></li>
                <li className="flex items-center"><Link className="hover:text-amber-300 ease-out duration-700">Contact Us</Link></li>
                <li className="flex items-center"><Link className="hover:text-amber-300 ease-out duration-700">Legal Terms</Link></li>
                <li className="flex items-center"><Link className="hover:text-amber-300 ease-out duration-700">Investors</Link></li>
                <li className="flex items-center"><Link className="hover:text-amber-300 ease-out duration-700">Sustainability</Link></li>
            </ul>
            <ul className="flex text-uppercase text-slate-200 uppercase font-bold gap-5">
                <li className="flex items-center"><img style={{ width:'auto',height:'50px' }} src="../src/images/footer/delivery.png" alt="" /></li>
                <li className="flex items-center"><img style={{ width:'auto',height:'50px' }} src="../src/images/footer/hashtag.png" alt="" /></li>
            </ul>
            </div>
        </footer>
    </div>)
}
