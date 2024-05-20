
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Parallax } from 'react-parallax';
import featured from '../../../assets/home/featured.jpg'
const Featured = () => {
    return (
      <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={featured}
        bgImageAlt="Fitured"
        strength={-200}
    >
      <div className='py-5 my-5'>
             <SectionTitle heading="Check it out" subHeading="FROM OUR MENU" />
           <div className='lg:w-10/12 w-11/12 mx-auto flex lg:flex-row flex-col  gap-5 items-center'>
             <img src={featured} alt="" className='lg:w-1/2 w-full rounded'/>
             <div className='lg:w-1/2 w-full text-white'>
             <p>March 20, 2023</p>

             <h3 className='font-bold text-xl'>WHERE CAN I GET SOME?</h3>

             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>

             <button className="px-3 py-2 btn-outline my-5 rounded-md border-b-2 bg-gray-100 font-bold">Read More</button>
             </div>
           </div>
      </div>
    </Parallax>
    );
};

export default Featured;