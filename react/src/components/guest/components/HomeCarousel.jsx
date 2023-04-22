import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
export default function HomeCarousel(){
        return (
            <Carousel
                centerMode={true}
                stopOnHover={false}
                autoPlay={true}
                infiniteLoop={true}
                interval={5000}
                transitionTime={2000}
                >
                <div className="carousel-root-div">
                    <img style={{ width:'95%' }} src="src/images/1.jpeg" />
                </div>
                <div className="carousel-root-div">
                    <img style={{ width:'95%' }} src="src/images/2.png" />
                </div>
                <div className="carousel-root-div">
                    <img style={{ width:'95%' }} src="src/images/3.jpeg" />
                </div>
                <div className="carousel-root-div">
                    <img style={{ width:'95%' }} src="src/images/4.png" />
                </div>
            </Carousel>
        );
}
