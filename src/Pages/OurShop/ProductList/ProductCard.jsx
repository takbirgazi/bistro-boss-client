import { Fade } from "react-awesome-reveal";
import { PropTypes } from 'prop-types';

const ProductCard = ({cardInfo}) => {
    const {name, image, recipe } = cardInfo;

    return (
        <Fade direction="right">
            <div className="card bg-white border">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title"> {name} </h2>
                    <p>{recipe}</p>
                </div>
                <div className="flex items-center justify-center my-5">
                    <button className="px-3 py-2 btn-outline  rounded-md border-b-2 bg-gray-100 font-bold">Add to Cart</button>
                </div>
            </div>
        </Fade>
    );
};

export default ProductCard;

ProductCard.propTypes ={
    cardInfo: PropTypes.object,
}