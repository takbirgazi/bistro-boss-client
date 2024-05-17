import  PropTypes  from 'prop-types';
const HomeManuesList = ({listInfo}) => {
    const {image, name, price, recipe} = listInfo;
    return (
        <div className='flex gap-2 items-center py-5'>
            <div className='w-16'>
                <img className='h-14 w-14 rounded-tr-full rounded-bl-full rounded-br-full' src={image} alt="" />
            </div>
            <div className='flex-grow'>
                <div className='flex items-center justify-between w-full'>
                    <p>{name} -------------------- </p>
                    <p className='text-yellow-500'>${price}</p>
                </div>
                <p>{recipe}</p>
            </div>
        </div>
    );
};

export default HomeManuesList;
HomeManuesList.propTypes={
    listInfo: PropTypes.object
}
