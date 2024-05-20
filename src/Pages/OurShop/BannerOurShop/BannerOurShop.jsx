import { Parallax } from "react-parallax";
import ourShopBg from "../../../assets/images/ourShopbg.png";


const BannerOurShop = () => {
    return (
        <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={ourShopBg}
        bgImageAlt="Fitured"
        strength={-200}
    >
        <div className="flex items-center justify-center py-32">
            <div className="px-5 py-10 bg-black bg-opacity-20 rounded w-1/2 mx-auto text-white">
                <h2 className="font-bold text-center text-4xl">Our Shop</h2>
                <p className="text-center py-2 text-sm">Would You Like To Try Dish</p>
            </div>
        </div>
    </Parallax>
    );
};

export default BannerOurShop;