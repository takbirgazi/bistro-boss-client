
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useCart = () => {
    const axiosCard = useAxiosSecure();
    const {data} = useQuery({
        queryKey: ['carts'],
        queryFn: async ()=>{
            const result = await axiosCard.get('/carts');
            return result.data;
        }
    })
    return [data]
};

export default useCart;