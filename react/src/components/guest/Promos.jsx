import { Link, Outlet,useLocation } from "react-router-dom"

export default function Promos(){
   const location = useLocation()
   const navigation = [
        {
        label: 'Promo',
        path: '/promos',
        },
        {
        label: 'News',
        path: '/promos/news',
        },
    ];
    return (
    <div className="relative p-5 flex flex-col justify-start items-start h-full bg-slate-200">
        <div className="w-full flex flex-wrap gap-3 items-start justify-start h-full flex-row p-1 mx-auto max-w-[50%]">
        <section className="flex justify-between w-full " aria-label="Breadcrumb">
            <ol className=" flex-none inline-flex gap-5 items-center my-3 sm:mb-0 font-bold border-b-[4px] relative  border-b-slate-300 w-full">
                {navigation.map((item, i) => (
                <li key={i}>
                    <Link
                    className={item.path==location.pathname?
                    'active promos-list border-b-red- border-b-3 text-2xl hover:text-red-600'
                    :
                    'promos-list border-b-red- border-b-3 text-2xl hover:text-red-600'}
                    to={`${item.path}`}
                    >
                    {item.label}
                    </Link>
                </li>
                ))}
            </ol>
        </section>
        <section className="h-full flex-grow">
            <Outlet/>
        </section>
        </div>
    </div>)
}
