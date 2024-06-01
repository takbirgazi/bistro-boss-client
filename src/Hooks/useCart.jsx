
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import useAuthUser from './useAuthUser';

const useCart = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuthUser();
    const {data:cart=[], refetch} = useQuery({
        queryKey: ['carts',user?.email],
        queryFn: async ()=>{
            const result = await axiosSecure.get(`/carts?email=${user?.email}`);
            return result.data;
        }
    })
    return [cart,refetch]
};

export default useCart;