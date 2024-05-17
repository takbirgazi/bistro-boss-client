import { Helmet } from "react-helmet-async";
import Category from "./Category/Category";
import Testimonials from "./Testimonials/Testimonials";
import Featured from "./Featured/Featured";
import Banner from './Banner/Banner';
import HomeManues from "./HomeManues/HomeManues";

const Home = () => {
    return (
        <div>
           <Helmet>
            <title>Home - Bistro Boss</title>
           </Helmet>
           <Banner></Banner>
           <div className="lg:w-10/12 w-11/12 mx-auto">
               <Category></Category>
               <HomeManues></HomeManues>
           </div>
           <Featured></Featured>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;