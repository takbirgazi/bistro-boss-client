import { Fade } from "react-awesome-reveal";
import { PropTypes } from 'prop-types';
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAuthUser from "../../../Hooks/useAuthUser";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ProductCard = ({cardInfo}) => {
    const {_id,name, image, recipe } = cardInfo;
    const axiosApi = useAxiosSecure();
    const location = useLocation();
    const navigate = useNavigate();
    const {user} = useAuthUser();
    const cardHandler = ()=>{
        if(user){
            const cartInfo ={
                email: user.email,
                menuId: _id
            }
            axiosApi.post('/carts',cartInfo)
            .then(res=> console.log(res.data))
        }else{
            Swal.fire({
                title: "Log in Please!",
                text: "Please log in to add cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Log In"
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", {state:{from:location}});
                }
            });
        }
        
    }

    return (
        <Fade direction="right">
            <div className="card bg-white border">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title"> {name} </h2>
                    <p>{recipe}</p>
                </div>
                <div className="flex items-center justify-center my-5">
                    <button onClick={cardHandler} className="px-3 py-2 btn-outline  rounded-md border-b-2 bg-gray-100 font-bold">Add to Cart</button>
                </div>
            </div>
        </Fade>
    );
};

export default ProductCard;

ProductCard.propTypes ={
    cardInfo: PropTypes.object,
}