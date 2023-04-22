
import HomeCarousel from './components/HomeCarousel'
import HomeFeaturedProduct from './components/HomeFeaturedProduct';
import ListCarousel from './components/ListCarousel'

export default function HomePage(){
        return (
            <>
            <ListCarousel/>
            <HomeCarousel/>
            <HomeFeaturedProduct/>
            </>
        );
}
