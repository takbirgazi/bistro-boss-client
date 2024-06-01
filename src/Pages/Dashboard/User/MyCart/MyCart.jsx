import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import image from "../../../../assets/home/06.png";
import useCart from "../../../../Hooks/useCart";


const MyCart = () => {
  const [cart] = useCart();
  // const total = cart.reduce((prev, current) => {
  //   return prev + current.price;
  // }, 0);
  console.log(cart)

    return (
        <div>
            <Helmet>
            <title>My Cart: Dashboard - Bistro Boss</title>
           </Helmet>
           <SectionTitle heading="My Cart" subHeading="WANNA ADD MORE?" />
           <div className="w-11/12 mx-auto p-4 m-4 bg-white border rounded">
                <div className="flex justify-evenly ">
            <h2 className="text-2xl font-bold">Total Order {cart.length}</h2>
            <h2 className="text-2xl font-bold">Total Price { 0 }</h2>
                </div>
                <div>
                    {/* start  */}

                    <div className="overflow-x-auto">
                    <table className="table">
                      {/* head */}
                      <thead>
                        <tr>
                          <th>S.N</th>
                         <th>Name</th>
                          <th>Job</th>
                          <th>Favorite Color</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                  {
                    cart.map((item, ind) => <tr key={item._id}>
                      <th>{ ind+1 }</th>
                          <td>
                            <div className="flex items-center gap-3">
                              <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                  <img src={image} alt="Image" />
                                </div>
                              </div>
                              <div>
                            <div className="font-bold">{ item.email}</div>
                                <div className="text-sm opacity-50">United States</div>
                              </div>
                            </div>
                          </td>
                          <td>Jjoiafsfas                                        </td>
                          <td>Purple</td>
                          <th>
                            <button className="btn btn-ghost btn-xs">details</button>
                          </th>
                        </tr> )
                  }                      
                        </tbody>
                      </table>
                    </div>
                    {/* End  */}
                </div>
           </div>
        </div>
    );
};

export default MyCart;