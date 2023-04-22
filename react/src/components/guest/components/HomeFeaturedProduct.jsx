export default function HomeFeaturedProduct(){

    return(
        <div className='mx-auto flex flex-col max-w-[70%] mx-auto p-2'>
            <div className='text-2xl  m-3 font-bold '>Featured Products</div>
            <div className='flex flex-wrap gap-4 m-3 p-2 '>
                <a href="#"  className="featured-products relative px-1 flex flex-col items-center border border-gray-200 rounded-lg shadow md:flex-row md:max-w-sm hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div className="ribbon w-20 h-20 absolute inset-0">
                        <img src="src/images/new-logo.png" alt="" />
                    </div>
                    <img className="product-image object-cover w-full rounded-t-lg h-96 md:h-40 md:w-40 md:rounded-none md:rounded-l-lg" src="src/images/featured/a.png" alt=""/>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">Angus Burger Pizza</h5>
                        <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">Pizza with juicy beef burger patty, fresh tomatoes, topped with fresh onions</p>
                        <section className="flex justify-between">
                            <div>
                                <small>Start at</small>
                                <p className='font-bold text-lg'>₱ 3,000</p>
                            </div>
                            <div><button className="text-sm text-white font-bold rounded-lg bg-red-700 hover:bg-red-500 py-1 px-2">ORDER</button></div>
                        </section>
                    </div>
                </a>

                <a href="#"  className="featured-products relative px-1 flex flex-col items-center border border-gray-200 rounded-lg shadow md:flex-row md:max-w-sm hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div className="ribbon w-20 h-20 absolute inset-0">
                        <img src="src/images/new-logo.png" alt="" />
                    </div>
                    <img className="product-image object-cover w-full rounded-t-lg h-96 md:h-40 md:w-40 md:rounded-none md:rounded-l-lg" src="src/images/featured/b.png" alt=""/>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">Manager's Choice</h5>
                        <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">Loaded with beef, Italian sausage, pepperoni, salami, mushrooms, green bell pepper, and onions.</p>
                        <section className="flex justify-between">
                            <div>
                                <small>Start at</small>
                                <p className='font-bold text-lg'>₱ 3,000</p>
                            </div>
                            <div><button className="text-sm text-white font-bold rounded-lg bg-red-700 hover:bg-red-500 py-1 px-2">ORDER</button></div>
                        </section>
                    </div>
                </a>

                <a href="#"  className="featured-products relative px-1 flex flex-col items-center border border-gray-200 rounded-lg shadow md:flex-row md:max-w-sm hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div className="ribbon w-20 h-20 absolute inset-0">
                        <img src="src/images/new-logo.png" alt="" />
                    </div>
                    <img className="product-image object-cover w-full rounded-t-lg h-96 md:h-40 md:w-40 md:rounded-none md:rounded-l-lg" src="src/images/featured/c.png" alt=""/>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">Pepperoni Crrrunch</h5>
                        <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">Spicy pepperoni slices with crunchy cracklin' U.S. potato strings.</p>
                        <section className="flex justify-between">
                            <div>
                                <small>Start at</small>
                                <p className='font-bold text-lg'>₱ 3,000</p>
                            </div>
                            <div><button className="text-sm text-white font-bold rounded-lg bg-red-700 hover:bg-red-500 py-1 px-2">ORDER</button></div>
                        </section>
                    </div>
                </a>

                <a href="#"  className="featured-products relative px-1 flex flex-col items-center border border-gray-200 rounded-lg shadow md:flex-row md:max-w-sm hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div className="ribbon w-20 h-20 absolute inset-0">
                        <img src="src/images/new-logo.png" alt="" />
                    </div>
                    <img className="product-image object-cover w-full rounded-t-lg h-96 md:h-40 md:w-40 md:rounded-none md:rounded-l-lg" src="src/images/featured/g.png" alt=""/>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">Spinach & Shrimp</h5>
                        <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">Creamy spinach with succulent premium shrimp and a blend of different cheeses.</p>
                        <section className="flex justify-between">
                            <div>
                                <small>Start at</small>
                                <p className='font-bold text-lg'>₱ 3,000</p>
                            </div>
                            <div><button className="text-sm text-white font-bold rounded-lg bg-red-700 hover:bg-red-500 py-1 px-2">ORDER</button></div>
                        </section>
                    </div>
                </a>

                <a href="#"  className="featured-products relative px-1 flex flex-col items-center border border-gray-200 rounded-lg shadow md:flex-row md:max-w-sm hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div className="ribbon w-20 h-20 absolute inset-0">
                        <img src="src/images/new-logo.png" alt="" />
                    </div>
                    <img className="product-image object-cover w-full rounded-t-lg h-96 md:h-40 md:w-40 md:rounded-none md:rounded-l-lg" src="src/images/featured/e.png" alt=""/>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">Roast Beef Pizza</h5>
                        <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">Indulge in succulent roast beef, tender and done just right, now on a pizza! Made even more delicious with our Rosemary & Mushroom sauce!</p>
                        <section className="flex justify-between">
                            <div>
                                <small>Start at</small>
                                <p className='font-bold text-lg'>₱ 3,000</p>
                            </div>
                            <div><button className="text-sm text-white font-bold rounded-lg bg-red-700 hover:bg-red-500 py-1 px-2">ORDER</button></div>
                        </section>
                    </div>
                </a>

                <a href="#"  className="featured-products relative px-1 flex flex-col items-center border border-gray-200 rounded-lg shadow md:flex-row md:max-w-sm hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div className="ribbon w-20 h-20 absolute inset-0">
                        <img src="src/images/new-logo.png" alt="" />
                    </div>
                    <img className="product-image object-cover w-full rounded-t-lg h-96 md:h-40 md:w-40 md:rounded-none md:rounded-l-lg" src="src/images/featured/f.png" alt=""/>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">Shakey's Special</h5>
                        <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">Loaded with beef, Italian sausage, pepperoni, salami, mushrooms, green bell pepper, and onions.</p>
                        <section className="flex justify-between">
                            <div>
                                <small>Start at</small>
                                <p className='font-bold text-lg'>₱ 3,000</p>
                            </div>
                            <div><button className="text-sm text-white font-bold rounded-lg bg-red-700 hover:bg-red-500 py-1 px-2">ORDER</button></div>
                        </section>
                    </div>
                </a>
            </div>
        </div>
    )

}
