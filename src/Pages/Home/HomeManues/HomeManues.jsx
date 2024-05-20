import { useEffect, useState } from "react";
import ManueList from "./HomeManuesList";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const HomeManues = () => {
    const [manues, setManues] = useState([]);
    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API}/menu`)
        .then(res => res.json())
        .then(data => setManues(data));
    },[])
    // const popularManue = manues.filter( manue => manue.category == "popular");
    return (
        <div>
            <SectionTitle heading="Check it out" subHeading="FROM OUR MENU"/>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                {
                   manues.filter( manue => manue.category == "popular").map(manu=> <ManueList key={manu._id} listInfo={manu}/>)                    
                }
            </div>
            <div className="flex items-center justify-center my-5">
                <button className="px-3 py-2 btn-outline  rounded-md border-b-2 bg-gray-100 font-bold">View Full Menu</button>
            </div>
        </div>
    );
};

export default HomeManues;
