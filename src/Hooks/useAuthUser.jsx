import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const useAuthUser = () => {
    const auth = useContext(AuthContext);
    return auth;
};

export default useAuthUser;