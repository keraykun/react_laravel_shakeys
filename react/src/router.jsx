


import {createBrowserRouter } from "react-router-dom"


import Notfound from "./components/Notfound"

import Protectedlayout   from "./components/layouts/ProtectedLayout"

import AdminLayout  from "./components/layouts/AdminLayout"
import Setting from './components/admin/Setting'
import Profile from "./components/admin/Profile"
import Home from './components/admin/Home'
import Product, {  deleteProductAction, productsLoader } from "./components/admin/product/Product"
import EditProduct, { EditProductLoader, UpdateProductLoader } from "./components/admin/product/ProructEdit"
import ProductAdd, { AddProductLoader } from "./components/admin/product/ProductAdd"
import ProductIndex from "./components/admin/product/ProductIndex"

import UserLayout from "./components/layouts/UserLayout"
import UserSetting from './components/user/UserSetting'
import UserProfile from "./components/user/UserProfile"
import UserHome from './components/user/UserHome'

import GuestLayout from "./components/layouts/GuestLayout"
import HomePage from './components/guest/HomPage'
import Login from './components/guest/Login'
import Menus from './components/guest/Menus'
import Promos from './components/guest/Promos'
import PromosNews from './components/guest/components/PromosNews'
import PromosList from './components/guest/components/PromosList'

import BookParty from './components/guest/BookParty.jsx'

const router = createBrowserRouter([
    {
      element: <Protectedlayout />,
      children: [
        {
          path: "admin",
          element: <AdminLayout />,
          children: [
            {
              path: "home",
              element: <Home />,
            },
            {
              path: "profile",
              element: <Profile />,
            },
            {
              path: "setting",
              element: <Setting />,
            },
            {

              path: "product",
              element: <Product />,
              children:[
                {
                  index:true,
                  element:<ProductIndex/>,
                  loader: productsLoader,
                  action: deleteProductAction,
                },
                {
                  path:'create',
                  element:<ProductAdd/>,
                  action:AddProductLoader
                },
                {
                  path:':id',
                  element:<EditProduct/>,
                  loader:EditProductLoader,
                  action:UpdateProductLoader
                }
              ]
            },
        ],
        },
        {
            path: "user",
            element: <UserLayout />,
            children: [
              {
                path: "home",
                element: <UserHome />,
              },
              {
                path: "profile",
                element: <UserProfile />,
              },
              {
                  path: "setting",
                  element: <UserSetting />,
              }
          ],
          },
      ],
    },
    {
        path: "/",
        element: <GuestLayout />,
        children:[
            {
            index:true,
            element:<HomePage/>
            },
            {
            path: "menus",
            element: <Menus />,
            },
            {
            path: "promos",
            element: <Promos />,
            children:[
                 {
                    index:true,
                    element:<PromosList/>
                 },
                 {
                    path:'news',
                    element:<PromosNews/>
                 }
                ],
            },
            {
            path: "bookparty",
            element: <BookParty/>,
            },
            {
            path: "login",
            element: <Login />,
           },
        ]
    },
    {
        path: "*",
        element: <Notfound />,
    }
  ]);

export default router
