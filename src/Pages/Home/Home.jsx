import { Helmet } from "react-helmet-async";
import Category from "./Category/Category";
import Testimonials from "./Testimonials/Testimonials";
import Featured from "./Featured/Featured";
import Banner from './Banner/Banner';
import HomeManues from "./HomeManues/HomeManues";
import { Fade } from "react-awesome-reveal";

const Home = () => {
    return (
        <div>
           <Helmet>
            <title>Home - Bistro Boss</title>
           </Helmet>
           <Banner></Banner>
           <Fade direction="left" className="lg:w-10/12 w-11/12 mx-auto">
               <Category></Category>
               <HomeManues></HomeManues>
           </Fade>
           <Fade direction="right">
            <Featured></Featured>
           </Fade>
           <Fade direction="left">
             <Testimonials></Testimonials>
           </Fade>
        </div>
    );
};

export default Home;