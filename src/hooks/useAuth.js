import { useSelector } from "react-redux";

export function useAuth (){
    const {id, isauth} = useSelector(state => state.user);
    console.log({id});
    return {
        isAuth:isauth,
        id,
    }
}
