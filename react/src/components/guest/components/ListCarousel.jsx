
import { Carousel } from "react-responsive-carousel";

export default function ListCarousel(){
    return(
        <div className="flex items-start justify-center w-full mb-10">
            <div style={{ width:700}}>
            <Carousel
                centerSlidePercentage={28}
                centerMode={true}
                showIndicators={false}
                showStatus={false}
                stopOnHover={false}
                infiniteLoop={true}
                showThumbs={false}>
            <div className="carousel-nav-list relative hover:bg-white cursor-pointer rounded-lg p-2">
                    <div className="flex items-center gap-2">
                        <img style={{ width:'auto',height:'60px' }} src="src/images/home/a.png" />
                        <div className="font-bold text-md text-white">Burger</div>
                    </div>
                <div className="carousel-nav-list-bg"></div>
            </div>
            <div className="carousel-nav-list relative hover:bg-white cursor-pointer rounded-lg p-2">
                    <div className="flex items-center gap-2">
                        <img style={{ width:'auto',height:'60px' }} src="src/images/home/b.png" />
                        <div className="font-bold text-md text-white">Combos</div>
                    </div>
                <div className="carousel-nav-list-bg"></div>
            </div>
            <div className="carousel-nav-list relative hover:bg-white cursor-pointer rounded-lg p-2">
                    <div className="flex items-center gap-2">
                        <img style={{ width:'auto',height:'60px' }} src="src/images/home/c.png" />
                        <div className="font-bold text-md text-white">Starters</div>
                    </div>
                <div className="carousel-nav-list-bg"></div>
            </div>
            <div className="carousel-nav-list relative hover:bg-white cursor-pointer rounded-lg p-2">
                    <div className="flex items-center gap-2">
                        <img style={{ width:'auto',height:'60px' }} src="src/images/home/d.png" />
                        <div className="font-bold text-md text-white">Drinks</div>
                    </div>
                <div className="carousel-nav-list-bg"></div>
            </div>
            <div className="carousel-nav-list relative hover:bg-white cursor-pointer rounded-lg p-2">
                    <div className="flex items-center gap-2">
                        <img style={{ width:'auto',height:'60px' }} src="src/images/home/e.png" />
                        <div className="font-bold text-md text-white">Extras</div>
                    </div>
                <div className="carousel-nav-list-bg"></div>
            </div>
            <div className="carousel-nav-list relative hover:bg-white cursor-pointer rounded-lg p-2">
                    <div className="flex items-center gap-2 w-full">
                        <img style={{ width:'auto',height:'60px' }} src="src/images/home/g.png" />
                        <div className="font-bold text-md text-white">Supercard Exclusives</div>
                    </div>
                <div className="carousel-nav-list-bg"></div>
            </div>
            <div className="carousel-nav-list relative hover:bg-white cursor-pointer rounded-lg p-2">
                    <div className="flex items-center gap-2 w-full">
                        <img style={{ width:'auto',height:'60px' }} src="src/images/home/h.png" />
                        <div className="font-bold text-md text-white">Group Meals</div>
                    </div>
                <div className="carousel-nav-list-bg"></div>
            </div>
            <div className="carousel-nav-list relative hover:bg-white cursor-pointer rounded-lg p-2">
                <div className="flex items-center gap-2 w-full">
                        <img style={{ width:'auto',height:'60px' }} src="src/images/home/i.png" />
                        <div className="font-bold text-md text-white">Pizza</div>
                    </div>
                <div className="carousel-nav-list-bg"></div>
            </div>
            <div className="carousel-nav-list relative hover:bg-white cursor-pointer rounded-lg p-2">
                    <div className="flex items-center gap-2 w-full">
                        <img style={{ width:'auto',height:'60px' }} src="src/images/home/j.png" />
                        <div className="font-bold text-md text-white">Group Meals</div>
                    </div>
                <div className="carousel-nav-list-bg"></div>
            </div>
            <div className="carousel-nav-list relative hover:bg-white cursor-pointer rounded-lg p-2">
                    <div className="flex items-center gap-2 w-full">
                        <img style={{ width:'auto',height:'60px' }} src="src/images/home/k.png" />
                        <div className="font-bold text-md text-white">Pasta</div>
                    </div>
                <div className="carousel-nav-list-bg"></div>
            </div>
            <div className="carousel-nav-list relative hover:bg-white cursor-pointer rounded-lg p-2">
                    <div className="flex items-center gap-2 w-full">
                        <img style={{ width:'auto',height:'60px' }} src="src/images/home/l.png" />
                        <div className="font-bold text-md text-white">Chicken N' Mojos</div>
                    </div>
                <div className="carousel-nav-list-bg"></div>
            </div>
            <div className="carousel-nav-list relative hover:bg-white cursor-pointer rounded-lg p-2">
                    <div className="flex items-center gap-2 w-full">
                        <img style={{ width:'auto',height:'60px' }} src="src/images/home/m.png" />
                        <div className="font-bold text-md text-white">Soul & Salad</div>
                    </div>
                <div className="carousel-nav-list-bg"></div>
            </div>
            <div className="carousel-nav-list relative hover:bg-white cursor-pointer rounded-lg p-2">
                <div className="flex items-center gap-2 w-full">
                        <img style={{ width:'auto',height:'60px' }} src="src/images/home/n.png" />
                        <div className="font-bold text-md text-white">R&B Milk Tea</div>
                    </div>
                <div className="carousel-nav-list-bg"></div>
            </div>
            </Carousel>
        </div>
    </div>
    )
}
