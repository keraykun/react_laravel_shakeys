export default function PromosList(){
    return(
        <div className='flex flex-wrap gap-4 m-3 p-2'>
            <a href="#"  className="featured-products bg-white relative p-2 flex flex-col items-center border border-gray-200 rounded-md shadow md:flex-row md:max-w-sm hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full h-96 md:h-40 md:w-40 md:rounded-none" src="../src/images/promos/a.png" alt=""/>
                <div className="flex flex-col p-5 justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">Super 2023 Classic Meal Deal</h5>
                    <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">Includes Choice of any Large Premium, All-Time Favorite or Classic Pizza, 5pcs. Chicken 'N' Mojos, Choice of Pasta Platter,  1 Pitcher House Blend Iced Tea. PLUS a Classic Supercard with a FREE upgraded Welcome Treat. Good for 5-6 pax</p>
                </div>
            </a>
            <a href="#"  className="featured-products bg-white relative p-2 flex flex-col items-center border border-gray-200 rounded-md shadow md:flex-row md:max-w-sm hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full h-96 md:h-40 md:w-40 md:rounded-none" src="../src/images/promos/b.png" alt=""/>
                <div className="flex flex-col p-5 justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">Super 2023 Gold Meal Deal</h5>
                    <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">Includes Choice of any Party Premium, All-Time Favorite or Classic Pizza, 8pcs. Chicken 'N' Mojos, Choice of Pasta Platter,  2 Pitcher House Blend Iced Tea. PLUS a Gold Supercard with a FREE upgraded Welcome Treat. Good for 8-10 pax​</p>
                </div>
            </a>
        </div>
    )
}
