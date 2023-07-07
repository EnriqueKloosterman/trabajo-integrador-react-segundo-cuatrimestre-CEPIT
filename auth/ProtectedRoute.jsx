import { Navigate, Outlet} from 'react-router-dom';
import  {UserContext} from "../UserContext.jsx";
import { UserContext } from 'react';


async function useAuth(){
const {user} = await useContext(UserContex);
if(user){
    return user
} else {
    return false
}
};

function ProtectedRoute() {
  let user = useAuth
     if (user) {
        return <Outlet/>
   } else {
    return <Navigate to= "/ registro" />
      
   }  
};



export default ProtectedRoute ;
