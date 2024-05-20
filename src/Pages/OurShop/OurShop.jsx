import BannerOurShop from "./BannerOurShop/BannerOurShop";
import ProductList from "./ProductList/ProductList";

const OurShop = () => {
    return (
        <div>
            <BannerOurShop></BannerOurShop>
            <div className="my-10 w-full mx-auto"> 
                 <ProductList></ProductList>
            </div>
        </div>
    );
};

export default OurShop;