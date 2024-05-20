import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";


const ProductList = () => {
    const [menu, setMenu] = useState([]);
    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API}/menu`)
        .then(res => res.json())
        .then(data => setMenu(data))
    },[])

    return (
        <div>
            <div className="flex justify-center my-5">
                <div className="flex gap-2">
                    <button className="p-1 font-semibold uppercase border-b-4 border-yellow-500">Salad</button>
                    <button className="p-1 font-semibold uppercase">Pizza</button>
                    <button className="p-1 font-semibold uppercase">soups</button>
                    <button className="p1 font-semibold uppercase">desserts</button>
                    <button className="p-1 font-semibold uppercase">drinks</button>
                </div>
            </div>
           <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 w-10/12 mx-auto">
            {
                menu.map(card => <ProductCard key={card._id} cardInfo={card}></ProductCard>)
            }
           </div>
        </div>
    );
};

export default ProductList;