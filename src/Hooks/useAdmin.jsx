import { useQuery } from "@tanstack/react-query";
import useAuthUser from "./useAuthUser";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const { user } = useAuthUser();
    const axiousSecure = useAxiosSecure();
    const {data: isAdmin } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res =await axiousSecure.get(`/users/admin/${user.email}`)
            console.log(res.data.admin)
            return res.data.admin;
        }
    })


    return [isAdmin]
};

export default useAdmin;